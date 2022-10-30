import {
  Box,
  Flex,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Bg1 from "../../public/light.jpg";

export default function StockInv() {
  return (
    <div data-aos="flip-left">
      <Box
        backgroundImage={`url('${Bg1.src}')`}
        width="100%"
        maxW={"100%"}
        borderRadius="4px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        mt={"50px"}
      >
        <Box color="black" w="100%" height="100%" textAlign="center">
          <Stack
            spacing={4}
            width={{ base: "100%", md: "50%" }}
            m={"0 auto"}
            p={20}
          >
            <Text mt={20} mb={30} fontSize={"3xl"}>
              {" "}
              سرمایه گذاری های سریع المعامله در بازار{" "}
            </Text>
            <Box fontWeight={700} fontSize={"xl"} dir="rtl" textAlign="justify">
              <UnorderedList>
                <ListItem
                  color="#003f04"
                  fontSize={"2xl"}
                  style={{ lineHeight: 5 }}
                >
                  {" "}
                  سهام شرکت های پذیرفته شده در بورس و فرابورس{" "}
                </ListItem>
                <ListItem color="#003f04" fontSize={"2xl"}>
                  {" "}
                  سرمایه گذاری در اوراق بهادار{" "}
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
