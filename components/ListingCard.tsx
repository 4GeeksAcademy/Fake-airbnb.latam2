import Link from "next/link";
import { Alojamiento } from "@/types/alojamiento";

type ListingCardProps = {
  alojamiento: Alojamiento;
};

export const ListingCard = ({ alojamiento }: ListingCardProps) => {
  const imageUrl = `https://loremflickr.com/800/600/interior,house,apartment/all?random=${alojamiento.id}`;

  return (
    <Link href={`/rooms/${alojamiento.id}`} className="block">
      <article className="rounded-2xl border border-[#DDDDDD] bg-white p-3">
        <div className="mb-3 h-48 overflow-hidden rounded-xl bg-gradient-to-br from-[#F7F7F7] to-[#EBEBEB] md:h-52">
          <img
            src={imageUrl}
            alt={alojamiento.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold text-[#222222] md:text-base">{alojamiento.title}</h3>
        <p className="mt-1 text-sm text-[#6A6A6A]">{alojamiento.location}</p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <p className="font-medium text-[#222222]">
            ${alojamiento.pricePerNight} <span className="font-normal text-[#6A6A6A]">/ noche</span>
          </p>
          <p className="font-medium text-[#222222]">★ {alojamiento.rating.toFixed(1)}</p>
        </div>
      </article>
    </Link>
  );
};