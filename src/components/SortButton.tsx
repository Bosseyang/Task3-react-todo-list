import React from "react";
import { type ITodo } from "../types"; // adjust path if you have a type definition

interface SortButtonProps {
  sortType: "date" | "author";
  sortBy: string | null;
  setSortBy: (sort: "date" | "author") => void;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const SortButton: React.FC<SortButtonProps> = ({
  sortType,
  sortBy,
  setSortBy,
  setTodos,
}) => {
  const handleSort = () => {
    setTodos((prev) => {
      const sorted = [...prev];
      if (sortType === "date") {
        sorted.sort((a, b) => b.date.getTime() - a.date.getTime());
      } else if (sortType === "author") {
        sorted.sort((a, b) => a.author.localeCompare(b.author));
      }
      return sorted;
    });
    setSortBy(sortType);
  };

  return (
    <button
      className={`button sort-${sortType}-button ${
        sortBy === sortType ? "gray1" : "gray2"
      }`}
      onClick={handleSort}
    >
      Sort by {sortType.charAt(0).toUpperCase() + sortType.slice(1)}
    </button>
  );
};
