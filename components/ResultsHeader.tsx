type SortOrder = "asc" | "desc";

type ResultsHeaderProps = {
  resultsCount: number;
  sortOrder: SortOrder;
  onSortChange: (nextOrder: SortOrder) => void;
};

export const ResultsHeader = ({ resultsCount, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 border-b border-[#DDDDDD] bg-white px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
      <p className="text-sm font-medium text-[#222222]">{resultsCount} resultados</p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort-order" className="text-sm text-[#6A6A6A]">
          Ordenar por precio
        </label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="h-10 rounded-full border border-[#DDDDDD] bg-white px-4 text-sm text-[#222222] outline-none focus:border-[#222222]"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
};
