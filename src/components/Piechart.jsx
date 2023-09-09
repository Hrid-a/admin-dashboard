import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import "../sass/pages/_piechart.scss";
const data = [
    { name: 'mobile', value: 400, color: '#0088FE' },
    { name: 'desktop', value: 300, color: '#00C49F' },
    { name: 'laptop', value: 300, color: '#FFBB28' },
    { name: 'tablet', value: 200, color: '#FF8042' },
];

const Piechart = () => {
    return (
        <div className="pie">
            <h4>Loads By source</h4>

            <div className="chart">
                <ResponsiveContainer width="99%" height="100%" minWidth="0">
                    <PieChart >
                        <Tooltip
                            contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                            position={{ x: 65, y: 95 }} />
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry) => (
                                <Cell key={entry.name} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>


            <div className="chart__details">
                <ul>
                    {data.map(item => (<li key={item.name}>
                        <span><span className="dot"
                            style={{ backgroundColor: item.color }}></span>{item.name}</span>
                        <span>{item.value}</span>
                    </li>))}
                </ul>
            </div>
        </div>

    )
}

export default Piechart;