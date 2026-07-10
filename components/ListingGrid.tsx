import { Alojamiento } from "@/types/alojamiento";
import { ListingCard } from "@/components/ListingCard";

type ListingGridProps = {
  alojamientos: Alojamiento[];
};

export const ListingGrid = ({ alojamientos }: ListingGridProps) => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 md:grid-cols-2 md:gap-6 md:px-10 lg:grid-cols-3 xl:grid-cols-4">
      {alojamientos.map((alojamiento) => (
        <ListingCard key={alojamiento.id} alojamiento={alojamiento} />
      ))}
    </section>
  );
};