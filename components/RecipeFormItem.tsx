import {
  Button,
  Checkbox,
  Field,
  Input,
  InputGroup,
  NativeSelect,
  Table,
} from "@chakra-ui/react";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { Item } from "./RecipeForm";
import IngredientDrawer from "./IngredientDrawer";

export default function RecipeFormItem({
  index,
  field,
  insert,
  remove,
  isDeleteDisabled,
}: {
  index: number;
  field: Item;
  insert: (index: number, item: Item) => void;
  remove: (index: number) => void;
  isDeleteDisabled: boolean;
}) {
  // const { register, control, formState } = useFormContext();

  return <></>

  // return (
  //   <Table.Row>
  //     <Table.Cell textAlign={"center"}>⋮</Table.Cell>
  //     <Table.Cell>
  //       <Input type="text" {...register(`items.${index}.name`)} />
  //     </Table.Cell>
  //     <Table.Cell>
  //       <InputGroup
  //         flex="1"
  //         endElement={
  //           <NativeSelect.Root size="xs" variant="plain" width="auto" me="-1">
  //             <NativeSelect.Field defaultValue=".com" fontSize="sm">
  //               <option value=".com">.com</option>
  //               <option value=".org">.org</option>
  //               <option value=".net">.net</option>
  //             </NativeSelect.Field>
  //             <NativeSelect.Indicator />
  //           </NativeSelect.Root>
  //         }
  //       >
  //         <Input ps="1rem" pe="2rem" placeholder="1000" />
  //       </InputGroup>
  //     </Table.Cell>
  //     <Table.Cell textAlign={"center"}>{field.ratio}</Table.Cell>
  //     <Table.Cell textAlign={"center"}>
  //       <Controller
  //         control={control}
  //         name={`items.${index}.isLocked`}
  //         render={({ field }) => (
  //           <Field.Root disabled={field.disabled}>
  //             <Checkbox.Root
  //               checked={field.value}
  //               onCheckedChange={({ checked }) => field.onChange(checked)}
  //             >
  //               <Checkbox.HiddenInput />
  //               <Checkbox.Control />
  //               <Checkbox.Label>鎖定</Checkbox.Label>
  //             </Checkbox.Root>
  //             <Field.ErrorText>
  //               {formState.errors.items?.[index]?.isLocked?.message}
  //             </Field.ErrorText>
  //           </Field.Root>
  //         )}
  //       />
  //     </Table.Cell>

  //     <Table.Cell textAlign={"center"}>
  //       <IngredientDrawer />
  //     </Table.Cell>
  //     <Table.Cell textAlign={"center"}>{field.cost}</Table.Cell>
  //     <Table.Cell textAlign={"center"}>
  //       <Button
  //         disabled={isDeleteDisabled}
  //         variant={"ghost"}
  //         onClick={() => remove(index)}
  //       >
  //         ❌
  //       </Button>
  //     </Table.Cell>
  //     <Table.Cell textAlign={"center"}>
  //       <Button
  //         variant={"ghost"}
  //         onClick={() =>
  //           insert(index + 1, {
  //             id: field.id,
  //             name: "",
  //             originalWeight: 0,
  //             ratio: 0,
  //             usedAmount: 0,
  //             cost: 0,
  //             isLocked: false,
  //           })
  //         }
  //       >
  //         ➕
  //       </Button>
  //     </Table.Cell>
  //   </Table.Row>
  // );
}
