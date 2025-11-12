import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "../Input";
import { MealModalProps, MealFormData } from "@/types/Popup";

const Popup: React.FC<MealModalProps> = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<MealFormData>({
    foodName: initialData.foodName || "",
    foodRating: initialData.foodRating || "",
    foodImage: initialData.foodImage || "",
    restaurantName: initialData.restaurantName || "",
    restaurantLogo: initialData.restaurantLogo || "",
    restaurantStatus: initialData.restaurantStatus || "",
  });

  const [error, setError] = useState<string | null>(null);

  const titleMap = {
    add: "Add a meal",
    edit: "Edit meal",
    delete: "Delete meal",
  } as const;

  const actionButtonMap = {
    add: "Add",
    edit: "Save",
    delete: "Yes",
  } as const;

  const title = titleMap[mode];
  const actionButtonText = actionButtonMap[mode];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if ((mode === "add" || mode === "edit") && !formData.foodName.trim()) {
      setError("Food name is required");
      return;
    }

    setError(null);
    console.log(`Submitting form in ${mode} mode with data:`, formData);
    onClose();
  };

  const renderFormFields = () => {
    if (mode === "delete") {
      return (
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete the meal:{" "}
          <strong>{initialData.foodName || "Selected Meal"}</strong>? This
          action cannot be undone.
        </p>
      );
    }

    return (
      <>
        <Input
          placeholder="Food name"
          name="foodName"
          value={formData.foodName}
          onChange={handleChange}
          required
          error={error}
        />
        <Input
          placeholder="Food rating"
          name="foodRating"
          value={formData.foodRating}
          onChange={handleChange}
        />
        <Input
          placeholder="Food image (link)"
          name="foodImage"
          value={formData.foodImage}
          onChange={handleChange}
        />
        <Input
          placeholder="Restaurant name"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleChange}
        />
        <Input
          placeholder="Restaurant logo (link)"
          name="restaurantLogo"
          value={formData.restaurantLogo}
          onChange={handleChange}
        />

        <div className="mb-4">
          <div className="relative">
            <select
              name="restaurantStatus"
              value={formData.restaurantStatus}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="" disabled>
                Restaurant status (open/close)
              </option>
              <option value="open">Open</option>
              <option value="close">Close</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          {title}
        </h2>

        <form onSubmit={handleSubmit}>
          {renderFormFields()}

          <div className="flex justify-between space-x-4 pt-2">
            <button
              type="submit"
              className={`flex-1 py-3 font-semibold text-white rounded-lg transition duration-200 cursor-pointer bg-orange-500 hover:bg-orange-600`}
            >
              {actionButtonText}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 font-semibold border-2 border-orange-500 text-orange-500 rounded-lg bg-white hover:bg-gray-50 transition duration-200 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
