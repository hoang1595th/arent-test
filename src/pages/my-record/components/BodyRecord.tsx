import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

type BodyRecordPoint = {
  label: string
  value1: number
  value2: number
}

type BodyRecordProps = {
  titleLeft: string
  date: string
  data: BodyRecordPoint[]
}

export default function BodyRecord({ titleLeft, date, data }: BodyRecordProps) {
  return (
    <div className="bg-[#414141] text-light p-6">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-sm text-gray-300 tracking-wide">{titleLeft}</div>
          <div className="text-3xl font-bold text-light mt-1">{date}</div>
        </div>
      </div>

      <div className="w-full h-[264px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, bottom: 10 }}>
            <XAxis dataKey="label" stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
            <YAxis stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} labelStyle={{ color: '#fff' }} />
            <Line type="monotone" dataKey="value1" stroke="#FFCC21" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="value2" stroke="#8FE9D0" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="px-5 py-2 rounded bg-[#FFCC21] text-dark-600">日</button>
        <button className="px-5 py-2 rounded bg-transparent border border-gray-500 text-light">週</button>
        <button className="px-5 py-2 rounded bg-transparent border border-gray-500 text-light">月</button>
        <button className="px-5 py-2 rounded bg-[#FFCC21] text-dark-600">年</button>
      </div>
    </div>
  )
}


