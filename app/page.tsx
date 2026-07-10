"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/modelo1.json";
import { Navbar } from "@/components/Navbar";
import { CategoryFilterRow } from "@/components/CategoryFilterRow";
import { ListingGrid } from "@/components/ListingGrid";
import { Alojamiento } from "@/types/alojamiento";
import { MOCK_DELAY_MS } from "@/config/mock";

const getCategories = (alojamientos: Alojamiento[]) => {
  const unique = Array.from(new Set(alojamientos.map((item) => item.category)));
  return [
    { id: "Todo", label: "Todo", icon: "🏠" },
    ...unique.map((category) => ({ id: category, label: category, icon: "✨" })),
  ];
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Todo");
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

  const categories = useMemo(() => getCategories(data as Alojamiento[]), []);

  const filteredListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return alojamientos.filter((item) => {
      const matchesCategory = selectedCategory === "Todo" || item.category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.location.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [alojamientos, query, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar query={query} onQueryChange={setQuery} />
      <CategoryFilterRow
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {loading ? (
        <main className="mx-auto max-w-7xl px-4 py-10 text-[#6A6A6A] md:px-10">Cargando alojamientos...</main>
      ) : (
        <ListingGrid alojamientos={filteredListings} />
      )}
    </div>
  );
}
