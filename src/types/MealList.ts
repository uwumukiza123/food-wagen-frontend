export type MealListData = {
  createdAt?: string;
  name: string;
  avatar: string;
  rating: number;
  open: boolean;
  logo: string;
  image: string;
  price: string;
  status: string;
};

export type MealListProps = {
  data: MealListData[];
};
