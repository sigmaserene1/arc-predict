"use client";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
} from "recharts";

const data = [
{ day: "Mon", price: 52 },
{ day: "Tue", price: 55 },
{ day: "Wed", price: 60 },
{ day: "Thu", price: 58 },
{ day: "Fri", price: 65 },
];

export default function PriceChart() {
return (
<div
style={{
width: "100%",
height: "300px",
marginTop: "30px",
}}
> <ResponsiveContainer> <LineChart data={data}> <XAxis dataKey="day" /> <YAxis /> <Tooltip /> <Line
         type="monotone"
         dataKey="price"
       /> </LineChart> </ResponsiveContainer> </div>
);
}
