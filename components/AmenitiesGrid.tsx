type Amenity = {
  icon: string;
  label: string;
};

type AmenitiesGridProps = {
  amenities: Amenity[];
};

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="rounded-2xl border border-[#DDDDDD] bg-white p-4">
      <h2 className="text-lg font-semibold text-[#222222]">Lo que ofrece este lugar</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div key={`${amenity.icon}-${amenity.label}`} className="flex items-center gap-3 rounded-xl border border-[#EBEBEB] p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7] text-xs font-medium uppercase text-[#222222]">
              {amenity.icon.slice(0, 2)}
            </span>
            <span className="text-sm text-[#222222]">{amenity.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
