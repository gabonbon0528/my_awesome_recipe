"use client";

import {
  Button,
  Field,
  Input,
  InputGroup,
  NativeSelect,
  Table,
} from "@chakra-ui/react";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import IngredientDrawer from "./IngredientDrawer";
import { RecipeItem } from "@/types/recipe";

export const DEFAULT_RECIPE_ITEM: RecipeItem = {
  id: "new",
  order: 0,
  name: "",
  originalWeight: 0,
  originalWeightUnit: "g",
  ratio: 0,
  usedAmount: 0,
};

export default function RecipeForm() {
  const {
    control,
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { fields, insert, remove } = useFieldArray({
    control,
    name: "recipe",
  });

  return (
    <Table.Body>
      {fields.map((field, index) => (
        <Table.Row key={field.id}>
          <Table.Cell textAlign={"center"}>⋮</Table.Cell>
          <Table.Cell>
            <Field.Root required invalid={!!errors.recipe?.[index]?.name}>
              <Input
                type="text"
                {...register(`recipe.${index}.name`, {
                  required: "必填欄位",
                  maxLength: {
                    value: 10,
                    message: "項目名稱最多只能10個字",
                  },
                })}
              />
              <Field.ErrorText>
                {String(errors.recipe?.[index]?.name?.message ?? "")}
              </Field.ErrorText>
            </Field.Root>
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
          <Table.Cell textAlign={"center"}>
            {getValues(`recipe.${index}.ratio`)}
          </Table.Cell>
          <Table.Cell textAlign={"center"}>
            {/* <IngredientDrawer /> */}
          </Table.Cell>
          <Table.Cell textAlign={"center"}>
            {getValues(`recipe.${index}.cost`)}
          </Table.Cell>
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
