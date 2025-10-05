import LineChart from '../../../components/LineChart'

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
    <div className="bg-[#414141] p-6 h-[304px] flex flex-col">
      <div className="flex items-start gap-4 mb-1">
        <div className="text-sm w-20 tracking-wide">{titleLeft}</div>
        <div className="text-2xl">{date}</div>
      </div>

      <div className="w-full flex-1">
        <LineChart data={data} />
      </div>

      <div className="flex gap-4">
        <button className="w-14 h-6 rounded-2xl bg-white text-primary-600">日</button>
        <button className="w-14 h-6 rounded-2xl bg-white text-primary-600">週</button>
        <button className="w-14 h-6 rounded-2xl bg-white text-primary-600">月</button>
        <button className="w-14 h-6 rounded-2xl bg-[#FFCC21] text-white">年</button>
      </div>
    </div>
  )
}
