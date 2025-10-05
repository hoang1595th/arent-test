import MainPhoto from './MainPhoto'
import LineChart from './LineChart'

type ChartPoint = {
  label: string
  value1: number
  value2: number
}

export default function Banner() {
  // Mock data cho MainPhoto
  const imageSrc = "/images/d01.jpg"
  const imageAlt = "Main"

  // Mock data cho LineChart
  const chartData: ChartPoint[] = [
    { label: '6月', value1: 100, value2: 98 },
    { label: '7月', value1: 95, value2: 96 },
    { label: '8月', value1: 70, value2: 90 },
    { label: '9月', value1: 85, value2: 88 },
    { label: '10月', value1: 78, value2: 72 },
    { label: '11月', value1: 72, value2: 70 },
    { label: '12月', value1: 80, value2: 64 },
    { label: '1月', value1: 65, value2: 62 },
    { label: '2月', value1: 62, value2: 58 },
    { label: '3月', value1: 55, value2: 50 },
    { label: '4月', value1: 48, value2: 48 },
    { label: '5月', value1: 45, value2: 46 },
  ]

  return (
    <div className="flex flex-col items-stretch lg:flex-row overflow-hidden gap-4 lg:gap-0">
      {/* MainPhoto bên trái */}
      <div className="w-full lg:w-[40%] h-[200px] sm:h-[240px] md:h-[312px] overflow-hidden">
        <MainPhoto
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          number={5}
          total={21}
          percentage={75}
        />
      </div>

      {/* LineChart bên phải */}
      <div className="w-full lg:w-[60%] h-[240px] md:h-[312px] bg-dark-400 pl-4 md:pl-[53px] pt-3">
        <div className="max-w-[690px] h-full w-full mx-auto">
          <LineChart data={chartData} />
        </div>
      </div>
    </div>
  )
}
