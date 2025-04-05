import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import RecipeList from "../../components/Recipe/RecipeList";
import { getAllRecipes } from "@/services/recipe";

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];

export default async function RecipePage() {
  const recipes = await getAllRecipes();
  const serializedRecipes = recipes.map((recipe) => ({
    ...recipe,
    createdAt: recipe.createdAt?.toDate().toISOString(),
    updatedAt: recipe.updatedAt?.toDate().toISOString(),
  }));

  return (
    <VStack width={"100%"} alignItems={"stretch"}>
      <HStack justifyContent={"space-between"} pb={2}>
        <Heading size={"3xl"}>食譜</Heading>
        <Link href="/recipe/create">
          <Button size={"md"} colorPalette={"teal"}>
            <FaPlus />
            新增食譜
          </Button>
        </Link>
      </HStack>
      <RecipeList recipes={serializedRecipes} />
    </VStack>
  );
}
