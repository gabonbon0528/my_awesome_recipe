import { Box, Button, Checkbox, Flex, Heading, Table } from "@chakra-ui/react";
import RecipeForm from "../../../components/RecipeForm";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Flex
      padding={4}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Heading>My Post: {slug}</Heading>
      <Table.Root size="md" rounded={"md"} variant="outline" width={"80%"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader textAlign={"center"}>拖曳</Table.ColumnHeader>
            <Table.ColumnHeader>項目</Table.ColumnHeader>
            <Table.ColumnHeader>原始材料重量</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>
              <Checkbox.Root variant={"solid"} colorPalette={"teal"}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>比例</Checkbox.Label>
              </Checkbox.Root>
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>
              使用原料
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>成本</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>刪除</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>新增</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <RecipeForm />
      </Table.Root>
    </Flex>
  );
}
