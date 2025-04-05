"use client";
import {
  Box,
  Button,
  Center,
  Grid,
  Input,
  Presence,
  Separator,
  Stack,
  useDisclosure,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

export const Calculator = () => {
  const { open, onToggle } = useDisclosure();
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const calculate = (expression: string): number => {
    // 只允許數字和基本運算符
    if (!/^[0-9+\-*/\s.()]*$/.test(expression)) {
      throw new Error("無效的輸入");
    }

    // 使用 Function 建構器，限制作用域
    try {
      return new Function(`return ${expression}`)();
    } catch (error) {
      throw new Error("計算錯誤");
    }
  };

  const handleCalculate = () => {
    try {
      const result = calculate(input);
      setResult(String(result));
    } catch (error) {
      setResult("錯誤");
    }
  };

  const handleToggleButton = () => {
    setInput("");
    setResult("");
    onToggle();
  };

  return (
    <Stack gap="4">
      <Button alignSelf="flex-start" onClick={handleToggleButton}>
        計算機
      </Button>
      <Presence
        position="fixed"
        bottom="0"
        insetX="0"
        present={open}
        animationName={{
          _open: "slide-from-bottom-full",
          _closed: "slide-to-bottom-full",
        }}
        animationDuration="moderate"
      >
        <Center p="10" roundedTop="md" layerStyle="fill.muted">
          <HStack gap="8" justifyContent="flex-start" w={"100%"}>
            <Input
              size="2xl"
              bg="white"
              outline="none"
              border="none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              flex={1}
            />
            <VStack gap="1" alignItems="flex-start" flex={1}>
              <HStack gap="1">
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "1")}
                >
                  1
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "2")}
                >
                  2
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "3")}
                >
                  3
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "4")}
                >
                  4
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "5")}
                >
                  5
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "6")}
                >
                  6
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "7")}
                >
                  7
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "8")}
                >
                  8
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "9")}
                >
                  9
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "0")}
                >
                  0
                </Button>
              </HStack>
              <HStack gap="1">
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "+")}
                >
                  +
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "-")}
                >
                  -
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "*")}
                >
                  *
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + "/")}
                >
                  /
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => setInput(input + ".")}
                >
                  .
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={handleCalculate}
                  colorPalette="blue"
                >
                  =
                </Button>
                <Button
                  size="sm"
                  rounded={"full"}
                  onClick={() => {
                    setInput("");
                    setResult("0");
                  }}
                  colorPalette="red"
                >
                  C
                </Button>
              </HStack>
            </VStack>
            <Heading size="5xl" textAlign="center" flex={1}>
              {result}
            </Heading>
          </HStack>
        </Center>
      </Presence>
    </Stack>
  );
};
