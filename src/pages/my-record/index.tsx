import MyDiary from './components/MyDiary'
import Record from './components/Record'
import MyExercise from './components/MyExercise'
import BodyRecord from './components/BodyRecord'
import Button from '../../components/Button'

const mockRecords = [
  {
    imageUrl: '/images/MyRecommend-1.jpg',
    title: 'BODY RECORD',
    buttonText: '自分のカラダの記録',
  },
  {
    imageUrl: '/images/MyRecommend-2.jpg',
    title: 'MY EXERCISE',
    buttonText: '自分の運動の記録',
  },
  {
    imageUrl: '/images/MyRecommend-3.jpg',
    title: 'MY DIARY',
    buttonText: '自分の日記',
  },
]

export default function MyRecordPage() {
  return (
    <div className="py-14 space-y-14">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mockRecords.map((item, idx) => (
            <Record key={idx} imageUrl={item.imageUrl} title={item.title} buttonText={item.buttonText} />
          ))}
        </div>
      </section>

      {/* Section 2: BodyRecord chart */}
      <section>
        <BodyRecord
          titleLeft="BODY RECORD"
          date="2021.05.21"
          data={[
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
          ]}
        />
      </section>

      {/* MyExercise section with mock list */}
      <section>
        <MyExercise
          date="2021.05.21"
          items={[
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
            { name: '家事全般（立位・軽い）', kcal: 26, minutes: 10 },
          ]}
        />
      </section>

      {/* Section 4: Grid of 8 MyDiary cards with heading and button */}
      <section>
        <h2 className="text-[22px] text-dark-400">MY DIARY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, idx) => (
            <MyDiary
              key={`diary-${idx}`}
              date="2021.05.21"
              time="23:25"
              title="私の日記の記録が一部表示されます。"
              excerpt={"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            text="自分の日記をもっと見る"
            onClick={() => console.log('See more diary clicked')}
          />
        </div>
      </section>
    </div>
  )
}
