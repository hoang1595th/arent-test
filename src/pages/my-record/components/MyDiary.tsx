type MyDiaryProps = {
  date: string
  time: string
  title: string
  excerpt: string
}

export default function MyDiary({ date, time, title, excerpt }: MyDiaryProps) {
  return (
    <div className="border border-gray-400/40 bg-[#414141] text-light p-5 w-[231px] h-[231px]">
      <div className="w-[200px]">
        <div className="text-2xl font-bold text-dark-500/90">
          {date}
        </div>
        <div className="text-2xl font-bold text-dark-500/90">
          {time}
        </div>

        <div
          className="mt-6 text-gray-400 text-base"
          style={{ height: '132px', display: '-webkit-box', WebkitLineClamp: 6 as unknown as number, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          <p className="mb-3">{title}</p>
          <p className="leading-7">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}


