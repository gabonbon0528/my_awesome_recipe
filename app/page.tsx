import { Button, Link, Text, Heading, Box } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box className="text-gray-900" padding={4}>
      <Heading>Welcome to My Awesome Recipe</Heading>
      <Text>
        This app will help you organize your recipes, calculate the cost of
        ingredients, and cook better.
      </Text>
      <Text>
        Click{" "}
        <Link href="/recipe" colorPalette="teal" fontSize="xl">
          here Σ੧(❛□❛✿)
        </Link>{" "}
        to create a new recipe!
      </Text>
    </Box>
  );
}
