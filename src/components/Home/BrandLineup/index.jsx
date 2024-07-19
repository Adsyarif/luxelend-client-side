import kateSpade from '@/assets/image/kate-spade.webp';
import michaelKors from '@/assets/image/michael-kors.webp';
import tedBaker from '@/assets/image/ted-baker.webp';
import reiss from '@/assets/image/reiss.webp';

export function BrandLineup({ items }) {
  const brandData = {
    title: "Brand",
    contents: [
      {
        imageUrl: kateSpade,
        description: "Kate Spade"
      },
      {
        imageUrl: michaelKors,
        description: "Michael Kors"
      },
      {
        imageUrl: tedBaker,
        description: "Ted Baker"
      },
      {
        imageUrl: reiss,
        description: "Reiss"
      }
    ]
  };
  
  return (
    <div className={"bg-white p-3"}>
      <h2 className="font-bold px-4">{brandData.title}</h2>
      <div className="py-4 w-full flex flex-nowrap text-xs font-semibold text-center gap-5">
        {brandData.contents.map((brand, index) => (
          <div key={index} className="w-1/4 flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center">
              <img src={brand.imageUrl} alt={brand.description} />
            </div>
            <p className="w-30 md:w-full">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
