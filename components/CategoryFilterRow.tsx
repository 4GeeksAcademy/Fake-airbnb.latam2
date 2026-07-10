"use client";

type CategoryItem = {
  id: string;
  label: string;
  icon: string;
};

type CategoryFilterRowProps = {
  categories: CategoryItem[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
};

export const CategoryFilterRow = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterRowProps) => {
  return (
    <nav className="border-b border-[#DDDDDD] bg-white" aria-label="Categorías">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 md:px-10">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-[#222222] bg-[#F7F7F7] text-[#222222]"
                  : "border-[#DDDDDD] text-[#6A6A6A] hover:text-[#222222]"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};