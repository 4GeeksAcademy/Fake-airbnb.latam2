import Link from "next/link";

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export const Navbar = ({ query, onQueryChange }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-[#DDDDDD] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:h-20 md:px-10">
        <Link href="/" className="text-lg font-bold text-[#FF385C] md:text-xl">
          LATAMbnb
        </Link>
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Buscar alojamientos
          </label>
          <input
            id="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Busca destino o alojamiento"
            className="h-11 w-full rounded-full border border-[#DDDDDD] px-4 text-sm text-[#222222] outline-none placeholder:text-[#6A6A6A] focus:border-[#222222]"
          />
        </div>
        <Link
          href="/catalog"
          className="inline-flex h-10 items-center rounded-full border border-[#DDDDDD] px-4 text-sm font-medium text-[#222222] transition-colors hover:border-[#222222]"
        >
          Catálogo
        </Link>
        <button className="h-10 w-10 rounded-full border border-[#DDDDDD] text-[#222222]" aria-label="Idioma">
          🌐
        </button>
        <button className="h-10 w-10 rounded-full border border-[#DDDDDD] text-[#222222]" aria-label="Menú de usuario">
          ☰
        </button>
      </div>
    </header>
  );
};