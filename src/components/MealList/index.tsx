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

  const handleOpenPopup = (
    mode: "add" | "edit" | "delete",
    meal?: MealListData
  ) => {
    setPopupMode(mode);
    setSelectedMeal(meal || null);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((meal) => (
          <MealListCard
            key={meal.name}
            {...meal}
            onEdit={() => handleOpenPopup("edit", meal)}
            onDelete={() => handleOpenPopup("delete", meal)}
          />
        ))}
      </div>

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
