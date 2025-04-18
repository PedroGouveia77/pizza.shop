import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

export function DayOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                    Pedidos (por dia)
                </CardTitle>
                <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-semibold tracking-tight">
                    12
                </span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-rose-500 dark:text-rose-400">-3%</span> em relação a ontem
                </p>
            </CardContent>
        </Card>         
    )
}
