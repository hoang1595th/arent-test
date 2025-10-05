import { LineChart as ReLineChart, Line, XAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts'

type ChartPoint = {
  label: string
  value1: number
  value2: number
}

type LineChartProps = {
  data: ChartPoint[]
}

export default function LineChart({ data }: LineChartProps) {
  return (
    <div className="bg-dark-400 w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart data={data} margin={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <XAxis dataKey="label" stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
          <CartesianGrid vertical horizontal={false} stroke="#777777" strokeDasharray="3 0" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} labelStyle={{ color: '#fff' }} />
          <Line type="monotone" dataKey="value1" stroke="#FFCC21" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="value2" stroke="#8FE9D0" strokeWidth={3} dot={{ r: 4 }} />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  )
}
