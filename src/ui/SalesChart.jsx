import { eachDayOfInterval, format, isDate, isSameDay, subDays } from "date-fns";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const fakeData = [
    { label: "Jan 09", totalSales: 480, extrasSales: 20 },
    { label: "Jan 10", totalSales: 580, extrasSales: 100 },
    { label: "Jan 11", totalSales: 550, extrasSales: 150 },
    { label: "Jan 12", totalSales: 600, extrasSales: 50 },
    { label: "Jan 13", totalSales: 700, extrasSales: 150 },
    { label: "Jan 14", totalSales: 800, extrasSales: 150 },
    { label: "Jan 15", totalSales: 700, extrasSales: 200 },
    { label: "Jan 16", totalSales: 650, extrasSales: 200 },
    { label: "Jan 17", totalSales: 600, extrasSales: 300 },
    { label: "Jan 18", totalSales: 550, extrasSales: 100 },
    { label: "Jan 19", totalSales: 700, extrasSales: 100 },
    { label: "Jan 20", totalSales: 800, extrasSales: 200 },
    { label: "Jan 21", totalSales: 700, extrasSales: 100 },
    { label: "Jan 22", totalSales: 810, extrasSales: 50 },
    { label: "Jan 23", totalSales: 950, extrasSales: 250 },
    { label: "Jan 24", totalSales: 970, extrasSales: 100 },
    { label: "Jan 25", totalSales: 900, extrasSales: 200 },
    { label: "Jan 26", totalSales: 950, extrasSales: 300 },
    { label: "Jan 27", totalSales: 850, extrasSales: 200 },
    { label: "Jan 28", totalSales: 900, extrasSales: 100 },
    { label: "Jan 29", totalSales: 800, extrasSales: 300 },
    { label: "Jan 30", totalSales: 950, extrasSales: 200 },
    { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
    { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
    { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
    { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
    { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
    { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
    { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
];

function SalesChart({ recentBookings, numDays }) {
    const storedTheme = localStorage.getItem('theme');

    const allDates = eachDayOfInterval({
        start: subDays(new Date(), numDays - 1),
        end: new Date(),
    });

    const data = allDates.map((date) => {
        return {
            label: format(date, "MMM dd"),
            totalSales: recentBookings
                .filter((booking) => isSameDay(date, new Date(booking.created_at)))
                .reduce((acc, cur) => acc + cur.totalPrice, 0),
            extrasSales: recentBookings
                .filter((booking) => isSameDay(date, new Date(booking.created_at)))
                .reduce((acc, cur) => acc + cur.extrasPrice, 0),
        };
    });

    const themeColors = {
        dark: {
            totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
            extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
            text: "#64748b",
            background: "#18212f",
        },
        light: {
            totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
            extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
            text: "#64748b",
            background: "#fff",
        },
    };

    const colors = themeColors[storedTheme] || themeColors.light;

    return (
        <div className={`dark:text-white mx-auto font-Ubuntu font-bold text-center bg-${colors.background}`}>
            Sales From May 25 2023 — May 31 2023
            <ResponsiveContainer height={300} width={700}>
                <AreaChart data={data}>
                    <XAxis dataKey="label" tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
                    <YAxis tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
                    <CartesianGrid />
                    <Tooltip contentStyle={{ backgroundColor: colors.background }} />
                    <Area dataKey="totalSales" type="natural" fill={colors.totalSales.fill} stroke={colors.totalSales.stroke} name="Total Sale" unit="$" />
                    <Area dataKey="extrasSales" type="natural" fill={colors.extrasSales.fill} stroke={colors.extrasSales.stroke} name="Extras Sale" unit="$" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalesChart
