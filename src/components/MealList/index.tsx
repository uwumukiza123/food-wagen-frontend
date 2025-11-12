"use client";
import { useState } from "react";
import MealListCard from "./Card";
import Popup from "../ui/Popup";
import { MealListData } from "@/types/MealList";
import { MealFormData } from "@/types/Popup";

type MealListProps = {
  data: MealListData[];
};

const MealList = ({ data }: MealListProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMode, setPopupMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedMeal, setSelectedMeal] = useState<MealListData | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleOpenPopup = (
    mode: "add" | "edit" | "delete",
    meal?: MealListData
  ) => {
    setPopupMode(mode);
    setSelectedMeal(meal || null);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => setIsPopupOpen(false);

  const visibleMeals = showAll ? data : data.slice(0, 8);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleMeals.map((meal) => (
          <MealListCard
            key={meal.name}
            {...meal}
            onEdit={() => handleOpenPopup("edit", meal)}
            onDelete={() => handleOpenPopup("delete", meal)}
          />
        ))}
      </div>

      {data.length > 8 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-2xl"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        mode={popupMode}
        initialData={(selectedMeal as unknown as Partial<MealFormData>) || {}}
      />
    </div>
  );
};

export default MealList;
