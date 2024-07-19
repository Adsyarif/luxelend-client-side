import scrollImage from '@/assets/image/scroll.webp';
import packageImage from '@/assets/image/package.webp';
import bagImage from '@/assets/image/bag.webp';


export function FeaturesCard({ items }) {
  const serviceData = {
    title: "Rent, Return, Repeat",
    contents: [
      {
        name: "service-1",
        imageUrl: scrollImage,
        description: "Pieces arrive clean and in perfect condition"
      },
      {
        name: "service-2",
        imageUrl: packageImage,
        description: "Choose one-time rental rent based on your need"
      },
      {
        name: "service-3",
        imageUrl: bagImage,
        description: "100+ Premium styles in various sizes"
      }
    ]
  };

  return (
    <div className={"bg-cream p-3"}>
      <h2 className="font-bold px-4">{serviceData.title}</h2>
      <div className="p-4 w-full justify-around mx-auto flex flex-nowrap text-xs font-semibold text-center gap-5">
        {serviceData.contents.map((service, index) => (
          <div key={index} className="w-1/3 flex flex-col items-center gap-2">
            <div className="w-8 h-8 flex items-center md:w-12 md:h-12">
              <img src={service.imageUrl} alt={service.name} />
            </div>
            <p className="w-30 md:w-full">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
