import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import { instance } from "../../utils/axios";
import User from "../../public/user.png";
export default function AliasPage({ props }) {
  const data = props[0];
  const modirAmel =
    data &&
    JSON.parse(data.members).length > 1 &&
    JSON.parse(data.members).find(
      (s) => s.role.includes("مدیر") && s.role.includes("عامل")
    );
  const Aza =
    modirAmel &&
    data &&
    JSON.parse(data.members).length > 1 &&
    JSON.parse(data.members).filter((s) => s.name !== modirAmel.name);

  return (
    <Box>
      <Container width="100%" minW={"100%"} p={0}>
        <Box px={5} minW={"100%"} className="blurTest">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                src={`http://192.168.103.23:8000/api/v1/${data.image}`}
                fit={"contain"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
                alt={data.title}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"} dir="rtl" textAlign="justify">
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                >
                  {data.title}
                </Heading>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray"} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    fontSize={"lg"}
                    whiteSpace="pre-line"
                    dir="rtl"
                    textAlign="justify"
                  >
                    {data.description}
                  </Text>
                </VStack>
                <Box>
                  <Text mx={5} color="blue.500" display="inline-block">
                    {
                      <a
                        target="_blank"
                        rel="noreferrer"
                        color="red"
                        href={data.webLink}
                      >
                        {data.webLink}
                      </a>
                    }
                  </Text>
                  : آدرس اینترنتی شرکت{" "}
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>

          {modirAmel && Aza ? (
            <Box dir="rtl" py={30}>
              <Box mb={20}>
                <SimpleGrid
                  textAlign="center"
                  columns={{ base: 1, md: 1 }}
                  spacing={10}
                >
                  <Box>
                    <Box className="heyatmodir">
                      {" "}
                      <Image
                        w={"100%"}
                        m={"0 auto"}
                        align={"center"}
                        src={
                          modirAmel.img
                            ? `http://192.168.103.23:8000/api/v1/${modirAmel.img}`
                            : User.src
                        }
                        alt={modirAmel.name}
                      />
                    </Box>
                    <Box mt={5}>
                      <Text
                        fontSize="1.3rem"
                        fontWeight={700}
                        mb={3}
                        color="red"
                      >
                        {" "}
                        {modirAmel.name}
                      </Text>
                      <Text fontSize="1.1rem" fontWeight={500} color="gray">
                        {" "}
                        {modirAmel.role}{" "}
                      </Text>
                    </Box>
                  </Box>
                </SimpleGrid>
              </Box>

              <SimpleGrid
                textAlign="center"
                columns={{ base: 1, md: Aza.length }}
                spacing={10}
              >
                {Aza &&
                  Aza.map((res, index) => {
                    return (
                      <Box key={index}>
                        <Box className="heyatmodir">
                          {" "}
                          <Image
                            minH={"200px"}
                            w={"100%"}
                            m={"0 auto"}
                            align={"center"}
                            src={
                              res.img
                                ? `http://192.168.103.23:8000/api/v1/${res.img}`
                                : User.src
                            }
                            alt={Aza.name}
                          />
                        </Box>
                        <Box mt={5}>
                          <Text
                            fontSize="1.3rem"
                            fontWeight={700}
                            mb={3}
                            color="red"
                          >
                            {" "}
                            {res.name}
                          </Text>
                          <Text fontSize="1.1rem" fontWeight={500} color="gray">
                            {" "}
                            {res.role}{" "}
                          </Text>
                        </Box>
                      </Box>
                    );
                  })}
              </SimpleGrid>
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
export async function getStaticProps(context) {
  const res = await instance.get("/mainpage");
  const results = await res.items.alias;
  const props = results.filter(function (creature) {
    return creature._id === context.params.id;
  });
  return {
    props: { props },
  };
}
export async function getStaticPaths() {
  const res = await instance.get("/mainpage");
  const results = await res.items.alias;
  const paths = results.map((post) => {
    return { params: { id: post._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
