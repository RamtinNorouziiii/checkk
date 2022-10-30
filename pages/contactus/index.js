import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Image,
  SimpleGrid,
  List,
  ListItem,
} from "@chakra-ui/react";
export default function ContactUs() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"contain"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"https://picsum.photos/400"}
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text fontSize="2xl"> Contact Us </Text>

          <Text color={"gray.500"}></Text>
          <SimpleGrid columns={2} spacing={10}>
            <List spacing={5}>
              <ListItem> Tell</ListItem>
            </List>
            <List spacing={5}>
              <ListItem> 02177299423</ListItem>
            </List>

            <List spacing={5}>
              <ListItem>Eamil</ListItem>
            </List>
            <List spacing={5}>
              <ListItem> sample@gmail.com</ListItem>
            </List>

            <List spacing={5}>
              <ListItem> Address</ListItem>
            </List>
            <List spacing={5}>
              <ListItem> Ambachtsweg 85 2641KW Pijnacker (NL)</ListItem>
            </List>
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
}
