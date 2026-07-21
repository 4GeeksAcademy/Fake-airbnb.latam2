"use client";

import { useState } from "react";

type BookingCardProps = {
  pricePerNight: number;
  guestsMin: number;
  guestsMax: number;
};

export const BookingCard = ({ pricePerNight, guestsMin, guestsMax }: BookingCardProps) => {
  const [guestsCount, setGuestsCount] = useState(guestsMin);

  const decreaseGuests = () => setGuestsCount((prev) => Math.max(guestsMin, prev - 1));
  const increaseGuests = () => setGuestsCount((prev) => Math.min(guestsMax, prev + 1));

  return (
    <aside className="rounded-2xl border border-[#DDDDDD] bg-white p-5 shadow-sm md:sticky md:top-24">
      <p className="text-2xl font-semibold text-[#222222]">
        ${pricePerNight} <span className="text-base font-normal text-[#6A6A6A]">/ noche</span>
      </p>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-[#DDDDDD] px-3 py-2">
        <span className="text-sm text-[#222222]">Huéspedes</span>
        <div className="flex items-center gap-3">
          <button onClick={decreaseGuests} className="h-8 w-8 rounded-full border border-[#DDDDDD] text-[#222222]" aria-label="Reducir huéspedes">
            -
          </button>
          <span className="w-6 text-center text-sm font-medium text-[#222222]">{guestsCount}</span>
          <button onClick={increaseGuests} className="h-8 w-8 rounded-full border border-[#DDDDDD] text-[#222222]" aria-label="Aumentar huéspedes">
            +
          </button>
        </div>
      </div>
      <button className="mt-4 w-full rounded-xl bg-[#FF385C] px-4 py-3 text-sm font-semibold text-white hover:bg-[#E31C5F]">
        Reservar
      </button>
    </aside>
  );
};
