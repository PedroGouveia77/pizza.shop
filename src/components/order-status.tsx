type OrderStatus = 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'

interface OrderStatusProps {
    status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
    pending: "Pendente",
    processing: "Em preparo",
    delivering: "Em entrega",
    delivered: "Entregue",
    canceled: "Cancelado",
}

export function OrderStatus({status}: {status: OrderStatus}) {
    return (
        <div className="flex items-center gap-2">
            {status === 'pending' && (
                <span className="h-2 w-2 rounded-full bg-slate-400" />
            )}
            {status === 'canceled' && (
                <span className="h-2 w-2 rounded-full bg-rose-500" />
            )}
            {['processing', 'delivering'].includes(status) && (
                <span className="h-2 w-2 rounded-full bg-amber-500" />
            )}
            {status === 'delivered' && (
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
            )}
            
            
            <span className="font-medium text-muted-foreground">{orderStatusMap[status]}</span>
        </div>
    )
}
