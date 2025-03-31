import { Avatar, Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={"flex flex-col min-h-screen max-w-screen"}>
      <Header />
      <div className={"flex-1"}>{props.children}</div>
      <Footer />
    </div>
  );
};

export const Header = () => {
  return (
    <Flex
      padding={2}
      justifyContent={"space-between"}
      className={"bg-teal-900 text-white"}
    >
      <Flex gap={2} alignItems={"center"}>
        <Link href="/">
          <Avatar.Root>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        </Link>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Recipe Manager
        </Text>
      </Flex>
    </Flex>
  );
};

export const Footer = () => {
  return (
    <div className={"bg-teal-900 text-white p-2"}>
      <div className={"container mx-auto"}>
        <p>Footer</p>
      </div>
    </div>
  );
};
