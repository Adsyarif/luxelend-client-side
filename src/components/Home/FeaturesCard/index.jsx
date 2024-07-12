export function FeaturesCard({ items }) {
  const services = items.contents;
  return (
    <div className={"bg-cream p-3"}>
      <h2 className="font-bold px-4">{items.title}</h2>
      <div className="p-4 w-full justify-around mx-auto flex flex-nowrap text-xs font-semibold text-center gap-5">
        {services.map((service, index) => (
          <div key={index} className="w-1/3 flex flex-col items-center gap-2">
            <div className="w-8 h-8 flex items-center md:w-12 md:h-12">
              <img src={service.imageUrl} alt={services.name} />
            </div>
            <p className="w-30 md:w-full">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
