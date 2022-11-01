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
import { instance } from "../../utils/axios";
export default function CompanyInv({ props }) {
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
            width={{ base: "100%", md: "45%" }}
            m={"0 auto"}
            px={20}
            py={40}
          >
            <Text mb={30} fontSize={"3xl"}>
              {" "}
              سرمایه گذاری در سهام سایر شرکت ها{" "}
            </Text>
            <Box fontWeight={700} fontSize={"xl"} dir="rtl" textAlign="justify">
              <UnorderedList>
                {props &&
                  props.map((res, index) => {
                    return (
                      <ListItem key={index} color="#003f04" fontSize={"2xl"}>
                        {res.title}{" "}
                      </ListItem>
                    );
                  })}
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
export async function getStaticProps() {
  const res = await instance.get("/mainpage");
  const props = await res.items.stock;
  console.log(props);
  return {
    props: { props },
  };
}
