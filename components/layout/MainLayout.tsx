import {
  Avatar,
  Box,
  Breadcrumb,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

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
    <VStack padding={2} className={"bg-teal-900 text-white w-12 h-screen"}>
      <Link href="/">
        <Avatar.Root size={"sm"}>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </Link>
    </VStack>
  );
};
