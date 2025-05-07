"use client";

type FilterSortBarProps = {
  filter: string;
  sort: string;
  onFilterChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export const FilterSortBar = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}: FilterSortBarProps) => {
  return (
    <div className="flex flex-col items-end gap-3 sm:flex-row sm:items-center sm:justify-end mb-6 px-4">
      <select
        className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 bg-white"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All Rated</option>
        <option value="top">Top Rated</option>
        <option value="4plus">4 Stars & Up</option>
        <option value="3plus">3 Stars & Up</option>
      </select>

      <select
        className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 bg-white"
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="recent">Recently Added</option>
        <option value="lowPrice">Lowest Price</option>
        <option value="highPrice">Highest Price</option>
      </select>
    </div>
  );
};
