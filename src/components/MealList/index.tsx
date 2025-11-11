import { useState } from "react";
import MealListCard from "./Card";
import { MealListProps } from "@/types/MealList";

const MealList = ({ data }: MealListProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 8);

  const hasMoreThanEight = data.length > 8;

  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-5xl py-20 font-bold">Featured Meals</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleData.map((item, index) => (
          <MealListCard key={item.name || index} {...item} />
        ))}
      </div>

      {hasMoreThanEight && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MealList;
