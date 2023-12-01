import { Category } from "./Category";

export type Product = {
  _id: string;
  title: string;
  image: string;
  category: Category;
  description: string;
  price: number;
  rate: number;
};

export type ProductFormParams = Omit<Product, "_id" | "category"> & {
  category: string;
};
