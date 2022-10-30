import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Bg1 from "../../public/about1.jpg";
import { instance } from "../../utils/axios/index";
import { TypedReactHooksDemo } from "../../utils/typing/index";
export default function AboutUs({ props }) {
  return (
    <Container
      width="100%"
      maxW={"100%"}
      p={0}
      backgroundImage={`url('${Bg1.src}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      <Container width="100%" maxW={"100%"} py={20} mx={0} className="blurTest">
        <Container width="100%" maxW={"100%"} py={20} mx={0}>
          <Box>
            <TypedReactHooksDemo />
          </Box>
          <SimpleGrid
            flexDirection="row-reverse"
            columns={{ base: 1, md: 2 }}
            spacing={10}
            mt={10}
          >
            <Flex justifyContent="center">
              {/* <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/back.jfif"}
              objectFit={"cover"}
            /> */}
            </Flex>

            <Stack spacing={4}>
              <Text fontSize={"2xl"} color="white">
                {props && props.title1}
              </Text>
              <Text color="white" fontSize={"xl"} dir="rtl" textAlign="justify">
                {props && props.description1}
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container maxW={"5xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text fontSize={"2xl"} color="white">
                {" "}
                {props && props.title2}
              </Text>
              <Text
                color={"white"}
                fontSize={"xl"}
                dir="rtl"
                textAlign="justify"
              >
                {props && props.description2}
              </Text>
            </Stack>
            <Flex justifyContent="center">
              {/* <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            /> */}
            </Flex>
          </SimpleGrid>
        </Container>
        <Container maxW={"5xl"} py={12}>
          <SimpleGrid
            flexDirection="row-reverse"
            columns={{ base: 1, md: 2 }}
            spacing={10}
          >
            <Flex justifyContent="center">
              {/* <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            /> */}
            </Flex>

            <Stack spacing={4}>
              <Text fontSize={"2xl"} color="white">
                {" "}
                {props && props.title3}
              </Text>
              <Text
                color={"white"}
                fontSize={"xl"}
                dir="rtl"
                textAlign="justify"
              >
                {props && props.description3}
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Container>
    </Container>
  );
}
export async function getStaticProps() {
  const res = await instance.get("aboutus");
  const props = await res.data[0];
  return {
    props: { props },
  };
}
