type MyDiaryProps = {
  date: string
  time: string
  title: string
  excerpt: string
}

export default function MyDiary({ date, time, title, excerpt }: MyDiaryProps) {
  return (
    <div className="border-2 border-dark-400/60 text-gray-400 p-4 pb-7 w-[231px] h-[231px] flex">
      <div className="flex-1 overflow-hidden">
        <div className="text-lg font-bold">
          {date}
        </div>
        <div className="text-lg font-bold">
          {time}
        </div>

        <div
          className="mt-2 text-sm"
          style={{ height: '132px', display: '-webkit-box', WebkitLineClamp: 6 as unknown as number, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          <p className="">{title}</p>
          <p className="">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}
