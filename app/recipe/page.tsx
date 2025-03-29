"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  HStack,
  IconButton,
  Pagination,
  Table,
  Tag,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];

export default function RecipePage() {
  const [page, setPage] = useState(1);

  return (
    <HStack gap={8} justifyContent="center">
      <Box p={4} borderWidth={1} borderColor="gray.200" borderRadius={8}>
        <Table.Root size="sm" interactive>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>食譜名稱</Table.ColumnHeader>
              <Table.ColumnHeader>上次編輯日期</Table.ColumnHeader>
              <Table.ColumnHeader>標籤</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>
                  <Tag.Root size="sm">
                    <Tag.Label>{item.price}</Tag.Label>
                  </Tag.Root>
                </Table.Cell>
                <Table.Cell textAlign="end">
                  <Button colorPalette="teal" variant="outline">
                    檢視
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Pagination.Root
          count={20}
          pageSize={2}
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <ButtonGroup variant="ghost" size="sm">
            <Pagination.PrevTrigger asChild>
              <IconButton>
                <HiChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton>
                <HiChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        gap={4}
        p={4}
        borderWidth={1}
        borderColor="gray.200"
        borderRadius={8}
      >
        <Table.Root size="sm" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>材料名稱</Table.ColumnHeader>
              <Table.ColumnHeader>數量</Table.ColumnHeader>
              <Table.ColumnHeader>單位</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Tag.Root size="sm">
          <Tag.Label>123</Tag.Label>
        </Tag.Root>
        <Button colorPalette="teal" asChild>
          <Link href="/recipe/detail">編輯食譜</Link>
        </Button>
      </Box>
    </HStack>
  );
}
