export function BrandLineup({ items }) {
  const brands = items.contents;
  return (
    <div className={"bg-white p-3"}>
      <h2 className="font-bold px-4">{items.title}</h2>
      <div className="py-4 w-full flex flex-nowrap text-xs font-semibold text-center gap-5">
        {brands.map((brand, index) => (
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
