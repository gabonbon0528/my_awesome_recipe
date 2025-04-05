import { Timestamp } from "firebase/firestore";

export interface IngredientType {
  id: string | number;
  name: string;
  unit?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// 序列化後的型別（用於傳遞給前端）
export interface SerializedIngredientType {
  id: string | number;
  name: string;
  unit?: string;
  createdAt?: string; // ISO 字符串格式
  updatedAt?: string;
}

export interface IngredientFormValues {
  ingredientType: string;
  ingredientTypeName: string;
  brand: string;
  price: string;
  weight: string;
  unit: "g" | "ml";
  purchaseDate: string;
}

export interface IngredientPurchase extends IngredientFormValues {
  id: string;
  createdAt: string;
  updatedAt: string;
}
