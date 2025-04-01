"use client";

import {
  Button,
  CloseButton,
  Drawer,
  Flex,
  Portal,
  RadioCard,
} from "@chakra-ui/react";
import { useState } from "react";

const items = [
  {
    value: "1",
    title: "阿嘟高筋麵粉",
    description: "1000g",
    cost: 100,
    createdAt: "2021-01-01",
  },
  {
    value: "2",
    title: "紫羅蘭高筋麵粉",
    description: "1000g",
    cost: 100,
    createdAt: "2021-01-01",
  },
  {
    value: "3",
    title: "小白高筋麵粉",
    description: "1000g",
    cost: 100,
    createdAt: "2021-01-01",
  },
];

export default function IngredientDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          選擇原料
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>選擇原料</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <RadioCard.Root defaultValue="next">
                <Flex flexDirection={"column"} gap={2}>
                  {items.map((item) => (
                    <RadioCard.Item key={item.value} value={item.value}>
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                          <RadioCard.ItemDescription>
                            {item.description} / {item.cost}元 / {item.createdAt}
                          </RadioCard.ItemDescription>
                        </RadioCard.ItemContent>
                        <RadioCard.ItemIndicator />
                      </RadioCard.ItemControl>
                    </RadioCard.Item>
                  ))}
                </Flex>
              </RadioCard.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
