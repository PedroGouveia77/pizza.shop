import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { Line, XAxis, YAxis, CartesianGrid, LineChart, ResponsiveContainer } from "recharts";
import colors from 'tailwindcss/colors'

const data = [
    { date: "08/04", revenue: 1200 },
    { date: "07/04", revenue: 1000 },
    { date: "06/04", revenue: 1500 },
    { date: "05/04", revenue: 1100 },
    { date: "04/04", revenue: 900 },
    { date: "03/04", revenue: 1800 },
    { date: "02/04", revenue: 800 },
    { date: "01/04", revenue: 950 },
]

export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                    Receita no período
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height={240}>
                        <LineChart style={{fontSize: 12}} data={data}>
                            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
                            <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={(value: number) =>
                            value.toLocaleString(
                            "pt-BR",
                            {style: "currency", currency: "BRL" })} 
                            />
                             <CartesianGrid vertical={false} className="stroke-muted" />
                            <Line
                            type="linear"
                            strokeWidth={2}
                            dataKey="revenue"
                            stroke={colors.violet['500']}
                            />
                           
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
