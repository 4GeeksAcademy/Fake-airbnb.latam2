"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import modelo1 from "@/data/modelo1.json";
import modelo2 from "@/data/modelo2.json";
import { Navbar } from "@/components/Navbar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { HostInfo } from "@/components/HostInfo";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { BookingCard } from "@/components/BookingCard";
import { MOCK_DELAY_MS } from "@/config/mock";
import { Alojamiento } from "@/types/alojamiento";
import { HabitacionDetalle } from "@/types/habitacionDetalle";

type RoomDetailData = Alojamiento & HabitacionDetalle;

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const roomId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [query, setQuery] = useState("");
  const [room, setRoom] = useState<RoomDetailData | null | undefined>(undefined);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const baseRoom = (modelo1 as Alojamiento[]).find((item) => item.id === roomId);
      const detailRoom = (modelo2 as HabitacionDetalle[]).find((item) => item.id === roomId);
      setRoom(baseRoom && detailRoom ? { ...baseRoom, ...detailRoom } : null);
    }, MOCK_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [roomId]);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navbar query={query} onQueryChange={setQuery} />
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <Link href="/catalog" className="mb-4 inline-block text-sm font-medium text-[#222222] underline">
          Volver a catalogo
        </Link>

        {room === undefined ? (
          <p className="text-[#6A6A6A]">Cargando alojamiento...</p>
        ) : !room ? (
          <p className="text-[#222222]">Alojamiento no encontrado</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <section className="space-y-6">
              <RoomHeader
                title={room.title}
                rating={room.rating}
                reviewsCount={room.reviewsCount}
                location={room.location}
              />
              <PhotoGallery photos={room.photos} title={room.title} />
              <HostInfo
                hostName={room.host.name}
                yearsHosting={room.host.yearsHosting}
                avatarPlaceholder={room.host.avatarPlaceholder}
                description={room.description}
              />
              <AmenitiesGrid amenities={room.amenities} />
            </section>
            <BookingCard
              pricePerNight={room.pricePerNight}
              guestsMin={room.guestsMin}
              guestsMax={room.guestsMax}
            />
          </div>
        )}
      </main>
    </div>
  );
}
