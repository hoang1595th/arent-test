import Photo from './components/Photo';
import Hex from './components/Hex';
import Button from '../../components/Button';

export default function TopPage() {
  // Mock data for 4 Hex components
  const hexData = [
    { icon: 'meal', label: 'Morning' },
    { icon: 'meal', label: 'Lunch' },
    { icon: 'meal', label: 'Dinner' },
    { icon: 'coffee', label: 'Snack' },
  ];

  // Mock data for 8 Photo components
  const photoData = [
    { imageSrc: '/images/m01.jpg', imageAlt: 'Morning meal', label: '05.21.Morning' },
    { imageSrc: '/images/l01.jpg', imageAlt: 'Lunch meal', label: '05.21.Lunch' },
    { imageSrc: '/images/d01.jpg', imageAlt: 'Dinner meal', label: '05.21.Dinner' },
    { imageSrc: '/images/s01.jpg', imageAlt: 'Snack', label: '05.21.Snack' },
    { imageSrc: '/images/m02.jpg', imageAlt: 'Morning meal', label: '05.20.Morning' },
    { imageSrc: '/images/l02.jpg', imageAlt: 'Lunch meal', label: '05.20.Lunch' },
    { imageSrc: '/images/d02.jpg', imageAlt: 'Dinner meal', label: '05.20.Dinner' },
    { imageSrc: '/images/m03.jpg', imageAlt: 'Snack', label: '05.20.Snack' },
  ];

  return (
    <div className="p-6">
      {/* Section 1 */}
      <section className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Top Page</h1>
        <p className="text-gray-400">This is the first section of the top page with some introductory content.</p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Meal Categories</h2>
        <div className="flex gap-4 justify-center">
          {hexData.map((hex, index) => (
            <Hex
              key={index}
              icon={hex.icon}
              label={hex.label}
            />
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Photo Gallery</h2>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {photoData.map((photo, index) => (
            <Photo
              key={index}
              imageSrc={photo.imageSrc}
              imageAlt={photo.imageAlt}
              label={photo.label}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button 
            text="記録をもっと見る"
            onClick={() => console.log('See more records clicked')}
          />
        </div>
      </section>
    </div>
  )
}
