export type MealFormData = {
  foodName: string;
  foodRating?: string;
  foodImage?: string;
  restaurantName?: string;
  restaurantLogo?: string;
  restaurantStatus?: "open" | "close" | "";
  id?: any;
};

export type MealModalMode = "add" | "edit" | "delete";

export interface MealModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "delete";
  initialData?: Partial<MealFormData>;
  onAdd?: (data: MealFormData) => void;
  onEdit?: (data: MealFormData) => void;
  onDelete?: (id: string) => void;
}
