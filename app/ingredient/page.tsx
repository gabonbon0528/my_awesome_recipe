import {
  Accordion,
  Box,
  Card,
  Collapsible,
  Heading,
  Span,
} from "@chakra-ui/react";

export default function IngredientPage() {
  return (
    <Box width={"100%"}>
      <Accordion.Root size={"md"} collapsible defaultValue={["value1"]}>
        <Accordion.Item value={"奶油"}>
          <Accordion.ItemTrigger>
            <Span flex="1">{"奶油"}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Card.Root size="md">
                <Card.Header>
                  <Heading size="md">鐵塔</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                  500g / 250元 / 2025/04/02
                </Card.Body>
              </Card.Root>
            </Accordion.ItemBody>
            <Accordion.ItemBody>
              <Card.Root size="md">
                <Card.Header>
                  <Heading size="md">鐵塔</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                  500g / 250元 / 2025/04/02
                </Card.Body>
              </Card.Root>
            </Accordion.ItemBody>
            <Accordion.ItemBody>
              <Card.Root size="md">
                <Card.Header>
                  <Heading size="md">總統</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                  500g / 250元 / 2025/04/02
                </Card.Body>
              </Card.Root>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value={"砂糖"}>
          <Accordion.ItemTrigger>
            <Span flex="1">{"砂糖"}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Card.Root size="md">
                <Card.Header>
                  <Heading size="md">二砂</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                  500g / 250元 / 2025/04/02
                </Card.Body>
              </Card.Root>
            </Accordion.ItemBody>
            <Accordion.ItemBody>
              <Card.Root size="md">
                <Card.Header>
                  <Heading size="md">上白糖</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                  500g / 250元 / 2025/04/02
                </Card.Body>
              </Card.Root>
            </Accordion.ItemBody>
            <Accordion.ItemBody>
              <Card.Root size="md">
                <Card.Header>
                  <Heading size="md">海藻糖</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                  500g / 250元 / 2025/04/02
                </Card.Body>
              </Card.Root>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  );
}
