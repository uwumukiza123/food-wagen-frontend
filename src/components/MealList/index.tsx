"use client";
import { useState } from "react";
import MealListCard from "./Card";
import Popup from "../ui/Popup";
import { MealListData } from "@/types/MealList";
import { MealFormData } from "@/types/Popup";

type MealListProps = {
  data: MealListData[];
  onEditMeal: (updatedMeal: MealFormData) => void;
  onDeleteMeal: (id: string) => void;
};

const MealList = ({ data, onEditMeal, onDeleteMeal }: MealListProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMode, setPopupMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedMeal, setSelectedMeal] = useState<MealListData | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleOpenPopup = (mode: "edit" | "delete", meal?: MealListData) => {
    setPopupMode(mode);
    setSelectedMeal(meal || null);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => setIsPopupOpen(false);

  const handleEdit = (updatedData: MealFormData) => {
    if (!selectedMeal) return;
    onEditMeal({ ...selectedMeal, ...updatedData });
  };

  const handleDelete = (id: string) => {
    onDeleteMeal(id);
  };

  const visibleData = showAll ? data : data.slice(0, 8);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleData.map((meal) => (
          <MealListCard
            key={meal.id}
            {...meal}
            onEdit={() => handleOpenPopup("edit", meal)}
            onDelete={() => handleOpenPopup("delete", meal)}
          />
        ))}
      </div>

      {data.length > 8 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        mode={popupMode}
        initialData={selectedMeal || {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MealList;
