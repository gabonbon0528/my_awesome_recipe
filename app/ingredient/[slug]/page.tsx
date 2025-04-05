import {
  cachedGetAllIngredientTypes,
  getPurchaseById
} from "@/services/ingredients";
import { Box } from "@chakra-ui/react";
import IngredientForm from "../../../components/Ingredient/IngredientForm";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const purchase = await getPurchaseById(slug);
  const types = await cachedGetAllIngredientTypes();

  const serializedTypes = types.map((type) => ({
    ...type,
    createdAt: type.createdAt?.toDate().toISOString(),
    updatedAt: type.updatedAt?.toDate().toISOString(),
  }));

  return (
    <Box width={"100%"}>
      <IngredientForm
        isCreate={slug === "create"}
        types={serializedTypes}
        purchase={purchase}
      />
    </Box>
  );
}
