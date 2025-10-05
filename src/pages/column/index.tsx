import Recommended from './components/Recommended'
import Column from './components/Column'
import Button from '../../components/Button'

export default function ColumnPage() {
  // Mock data cho 4 Recommended items
  const recommendedData = [
    { category: 'COLUMN', japaneseText: 'オススメ' },
    { category: 'DIET', japaneseText: 'ダイエット' },
    { category: 'BEAUTY', japaneseText: '美容' },
    { category: 'HEALTH', japaneseText: '健康' }
  ]

  // Mock data cho 8 Column items
  const columnData = [
    {
      imageSrc: '/images/column-1.jpg',
      imageAlt: 'Grilled fish with parsley and lemon',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-2.jpg',
      imageAlt: 'Person sleeping peacefully',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-3.jpg',
      imageAlt: 'Man drinking orange juice',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-4.jpg',
      imageAlt: 'Fresh fruits and vegetables',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-5.jpg',
      imageAlt: 'Tea cup and teapot with herbal tea',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-6.jpg',
      imageAlt: 'Woman in gym with dumbbell',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-7.jpg',
      imageAlt: 'Fish oil capsules with dried flowers',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    },
    {
      imageSrc: '/images/column-8.jpg',
      imageAlt: 'Young woman smiling and touching cheek',
      dateTime: '2021.05.17 23:25',
      title: '魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ...',
      hashtags: '#魚料理 #和食 #DHA'
    }
  ]

  return (
    <div className="py-14 space-y-14">
      {/* Section 1 - Recommended Categories */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedData.map((item, index) => (
            <Recommended
              key={index}
              category={item.category}
              japaneseText={item.japaneseText}
            />
          ))}
        </div>
      </section>

      {/* Section 2 - Column Articles */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-[18px]">
          {columnData.map((column, index) => (
            <Column
              key={index}
              imageSrc={column.imageSrc}
              imageAlt={column.imageAlt}
              dateTime={column.dateTime}
              title={column.title}
              hashtags={column.hashtags}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            text="コラムをもっと見る"
            onClick={() => console.log('See more column clicked')}
          />
        </div>
      </section>
    </div>
  )
}
