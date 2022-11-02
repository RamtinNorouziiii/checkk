import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  Avatar,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement, useEffect, useState } from "react";
import Bg1 from "../../public/pen.jpg";
import { instance } from "../../utils/axios";
export default function CeoPage({ props }) {
  return (
    <Container
      backgroundImage={`url('${Bg1.src}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      width="100%"
      minH="100vh"
      maxW={"100%"}
      p={0}
      align="justify"
    >
      <Text
        dir="rtl"
        color="white"
        width="100%"
        textAlign="center"
        fontSize="2xl"
        pt={"130px"}
      >
        سخن مدیرعامل
      </Text>

      <SimpleGrid
        width="100%"
        height="100%"
        columns={{ base: 1, md: 2 }}
        spacing={10}
        className="blurTest"
        paddingRight={0}
        mt={10}
        p={5}
      >
        <Stack spacing={4}>
          <Text
            pt={10}
            dir="rtl"
            color={"white"}
            lineHeight="32px"
            fontWeight="500"
            fontSize={"16px"}
          >
            {props.description}
          </Text>
          <Text fontSize="lg" textAlign="center" color={"red.200"}>
            {" "}
            بهمن اسکندری{" "}
          </Text>
        </Stack>
        <Stack spacing={4}>
          <Flex>
            <Box>
              <Avatar
                my={10}
                width="100%"
                height="100%"
                src={`http://192.168.103.23:8000/api/v1/${props.image}`}
                mb={4}
              />
            </Box>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
export async function getStaticProps() {
  const res = await instance.get("/ceo");
  const props = await res.items[0];
  console.log(props);
  return {
    props: { props },
  };
}
