"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import data from "@/data/modelo1.json";
import { Navbar } from "@/components/Navbar";
import { ListingGrid } from "@/components/ListingGrid";
import { ResultsHeader } from "@/components/ResultsHeader";
import { Alojamiento } from "@/types/alojamiento";
import { MOCK_DELAY_MS } from "@/config/mock";

const CatalogMap = dynamic(() => import("@/components/CatalogMap").then((mod) => mod.CatalogMap), {
  ssr: false,
});

type SortOrder = "asc" | "desc";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [alojamientos, setAlojamientos] = useState<Alojamiento[]>([]);

  useEffect(() => {
    setLoading(true);
    setAlojamientos([]);
    const timer = window.setTimeout(() => {
      setAlojamientos(data as Alojamiento[]);
      setLoading(false);
    }, MOCK_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const visibleListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = alojamientos.filter((item) => {
      if (normalizedQuery.length === 0) {
        return true;
      }
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.location.toLowerCase().includes(normalizedQuery)
      );
    });

    return [...filtered].sort((a, b) => {
      return sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight;
    });
  }, [alojamientos, query, sortOrder]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar query={query} onQueryChange={setQuery} />
      <ResultsHeader resultsCount={visibleListings.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
      {loading ? (
        <main className="mx-auto max-w-7xl px-4 py-10 text-[#6A6A6A] md:px-10">Cargando alojamientos...</main>
      ) : (
        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start md:px-10">
          <div>
            <ListingGrid alojamientos={visibleListings} />
          </div>
          <CatalogMap alojamientos={visibleListings} />
        </main>
      )}
    </div>
  );
}
