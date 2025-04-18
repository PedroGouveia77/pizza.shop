import { X } from "lucide-react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";

import { TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { GetOrderResponse } from "@/api/get-orders";

export interface OrderTableRowProps {
    order: {
        orderId: string
        createdAt: string
        status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
        customerName: string
        total: number
    }
}


export function OrderTableRow({order}: OrderTableRowProps) {  
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const queryClient = useQueryClient()

    const {mutateAsync: cancelOrderFn} = useMutation({  
        mutationFn: cancelOrder,
        async onSuccess(_, {orderId}) {
            const ordersListCache = queryClient.getQueriesData<GetOrderResponse>({queryKey: ['orders']})
            ordersListCache.forEach(([cacheKey, cacheData]) => {
                if (!cacheData) {
                    return
                }

                queryClient.setQueryData<GetOrderResponse>(cacheKey, {
                   ...cacheData,
                   orders: cacheData.orders.map(order => {
                    if (order.orderId === orderId) {
                        return {...order, status: 'canceled'}
                    }
                    return order
                   })
                })
            })
        }
    })


    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido.</span>
                </Button>
                </DialogTrigger>
                <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-sm font-medium">{order.orderId}</TableCell>
            <TableCell className="text-muted-foreground">{formatDistanceToNow(order.createdAt, {
                locale: ptBR,
                addSuffix: true,
            })}</TableCell>
            <TableCell>
                <OrderStatus status={order.status} />
            </TableCell>
            <TableCell className="font-medium">{order.customerName}</TableCell>
            <TableCell className="font-medium">
                {(order.total / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </TableCell>
            <TableCell>
                <Button variant="outline" size="sm">
                <ArrowRight className="h-3 w-3 mr-2" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button onClick={() => cancelOrderFn({orderId: order.orderId})} disabled={!['pending', 'processing'].includes(order.status)} variant="ghost" size="sm">
                <X className="h-3 w-3 mr-2" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}