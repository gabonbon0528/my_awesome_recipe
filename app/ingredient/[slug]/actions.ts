"use server";

import { addIngredientType, addPurchase } from "@/services/ingredients";
import { IngredientFormValues } from "@/types/ingredients";
import { revalidatePath } from "next/cache";

export async function createIngredient(
  formData: IngredientFormValues,
  isCreateIngredientType: boolean
) {
  try {
    if (isCreateIngredientType) {
      await addIngredientType(formData.ingredientTypeName, formData.unit);
    }
    await addPurchase({
      ingredientType: formData.ingredientType,
      brand: formData.brand,
      price: Number(formData.price),
      weight: Number(formData.weight), 
      unit: formData.unit,
      purchaseDate: formData.purchaseDate
    });
    revalidatePath("/ingredient/[slug]");
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "新增失敗，請重新嘗試",
    };
  }
}
