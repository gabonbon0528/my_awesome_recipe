import {
  Avatar,
  Box,
  Breadcrumb,
  Button,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBurger, FaBookBookmark } from "react-icons/fa6";
import { Tooltip } from "../ui/tooltip";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={"flex min-h-screen max-w-screen"}>
      <Sidebar />
      <VStack padding={4} alignItems={"flex-start"} gap={4} flex={1}>
        <Breadcrumb.Root size={"lg"}>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        {props.children}
      </VStack>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <VStack
      padding={2}
      gap={2}
      bg={"teal"}
      className={"text-white w-14 h-screen"}
    >
      <Link href="/">
        <Avatar.Root size={"md"}>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </Link>
      <Link href="/ingredient">
        <Tooltip content="原料" interactive>
          <IconButton rounded="full" colorPalette="teal">
            <FaBurger />
          </IconButton>
        </Tooltip>
      </Link>
      <Link href="/recipe">
        <Tooltip content="食譜" interactive>
          <IconButton rounded="full" colorPalette="teal">
            <FaBookBookmark />
          </IconButton>
        </Tooltip>
      </Link>
    </VStack>
  );
};
