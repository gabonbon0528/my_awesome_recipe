"use client";

import {
  Button,
  Input,
  InputGroup,
  NativeSelect,
  Table,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import IngredientDrawer from "./IngredientDrawer";

export interface Item {
  id: string;
  order: number;
  name: string; // 項目
  originalWeight: number; // 原始材料重量
  ratio: number; // 比例
  usedAmount: number; // 使用原料
  cost: number; // 成本
  isLocked: boolean; // 鎖定項目
}

const items: Item[] = [
  {
    id: "1",
    order: 1,
    name: "高筋麵粉",
    originalWeight: 1000,
    ratio: 100,
    usedAmount: 1000,
    cost: 50,
    isLocked: false,
  },
  {
    id: "2",
    order: 2,
    name: "水",
    originalWeight: 650,
    ratio: 65,
    usedAmount: 650,
    cost: 0,
    isLocked: false,
  },
  {
    id: "3",
    order: 3,
    name: "酵母",
    originalWeight: 10,
    ratio: 1,
    usedAmount: 10,
    cost: 5,
    isLocked: false,
  },
];

export default function RecipeForm() {
  const { control, register, formState } = useForm<{ items: Item[] }>({
    defaultValues: { items },
  });
  const { fields, insert, remove } = useFieldArray<{ items: Item[] }>({
    control,
    name: "items",
  });

  return (
    <Table.Body>
      {fields.map((field, index) => (
        <Table.Row key={field.id}>
          <Table.Cell textAlign={"center"}>⋮</Table.Cell>
          <Table.Cell>
            <Input type="text" {...register(`items.${index}.name`)} />
          </Table.Cell>
          <Table.Cell>
            <InputGroup
              flex="1"
              endElement={
                <NativeSelect.Root
                  size="xs"
                  variant="plain"
                  width="auto"
                  me="-1"
                >
                  <NativeSelect.Field defaultValue="g" fontSize="sm">
                    <option value="g">g</option>
                    <option value="ml">ml</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              }
            >
              <Input ps="1rem" pe="2rem" placeholder="1000" />
            </InputGroup>
          </Table.Cell>
          <Table.Cell textAlign={"center"}>{field.ratio}</Table.Cell>
          <Table.Cell textAlign={"center"}>
            <IngredientDrawer />
          </Table.Cell>
          <Table.Cell textAlign={"center"}>{field.cost}</Table.Cell>
          <Table.Cell textAlign={"center"}>
            <Button
              disabled={fields.length === 1}
              variant={"ghost"}
              onClick={() => remove(index)}
            >
              ❌
            </Button>
          </Table.Cell>
          <Table.Cell textAlign={"center"}>
            <Button
              variant={"ghost"}
              onClick={() =>
                insert(index + 1, {
                  id: field.id,
                  order: index + 1,
                  name: "",
                  originalWeight: 0,
                  ratio: 0,
                  usedAmount: 0,
                  cost: 0,
                  isLocked: false,
                })
              }
            >
              ➕
            </Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
