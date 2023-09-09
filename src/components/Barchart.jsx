import { BarChart, ResponsiveContainer, Bar, Tooltip } from "recharts"
import "../sass/pages/_barchar.scss";

const Barchart = (props) => {
    const { title, color, dataKey, chartData } = props;
    return (
        <div className="bar-chart">
            <h4>{title}</h4>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart width={150} height={40} data={chartData}>
                        <Tooltip
                            cursor={false}
                            contentStyle={{ backgroundColor: '#2a3447', border: 'none' }}
                            labelStyle={{ display: 'none' }}
                        />

                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Barchart