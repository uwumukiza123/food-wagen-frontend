export type MealFormData = {
  foodName: string;
  foodRating?: string;
  foodImage?: string;
  restaurantName?: string;
  restaurantLogo?: string;
  restaurantStatus?: "open" | "close" | "";
};

export type MealModalMode = "add" | "edit" | "delete";

export interface MealModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: MealModalMode;
  initialData?: Partial<MealFormData>;
}
