import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Spinner,
} from "@chakra-ui/react";
import { instance } from "../../utils/axios";
export default function ManagersPage({ props }) {
  const SpecificData = props.filter(function (creature) {
    return creature.isMain === true;
  });
  const modirAmel =
    SpecificData[0] &&
    JSON.parse(SpecificData[0].members).find(
      (s) => s.role.includes("مدیر") && s.role.includes("عامل")
    );
  const Aza =
    SpecificData[0] &&
    JSON.parse(SpecificData[0].members).filter(
      (s) => s.name !== modirAmel.name
    );
  return (
    <Box width="100%" maxW={"100%"}>
      {SpecificData.length === 0 ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          m={"25% 50%"}
        />
      ) : (
        <Container backdropFilter="auto" backdropBlur="26px" minW={"100%"}>
          {" "}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                borderRadius="10px"
                src={
                  SpecificData &&
                  `http://192.168.103.23:8000/api/v1/${
                    SpecificData[0] && SpecificData[0].image
                  }`
                }
                fit={"contain"}
                w={{ base: "100%", md: "100%", lg: "400px" }}
                h={"400px"}
                //  h={{ base: "100%", sm: "400px", lg: "500px" }}
                alt={"آتیه خواهان"}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                >
                  {SpecificData[0] && SpecificData[0].title}
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
                    {SpecificData[0] && SpecificData[0].description}
                  </Text>
                </VStack>
                {/* <Text>
                      <Text mx={5} color="blue.500" display="inline-block" >
                        {<a target="_blank" color="red" href={SpecificData[0] && SpecificData[0].webLink}>
                          {SpecificData[0] && SpecificData[0].webLink}
                        </a>}
                      </Text>
  
                      : آدرس اینترنتی شرکت   </Text> */}
              </Stack>
            </Stack>
          </SimpleGrid>
          {/* <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={"#848404"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  اعضا
                </Text>
  
                <TableContainer color="#9f1f1f">
                  <Table variant="simple" dir="rtl"  >
                   
                    <Thead>
                      <Tr>
                        <Th fontSize="lg" >تاریخ تعیین سمت</Th>
                        <Th fontSize="lg">تام و نام خانوادگی</Th>
                        <Th fontSize="lg">سمت</Th>
                        <Th fontSize="lg">نماینده</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {SpecificData[0] && JSON.parse(SpecificData[0].members).map((res, index) => {
                        return (
                          <Tr key={index}>
                            <Td  fontSize="xl">{res.date || "-"}</Td>
                            <Td  fontSize="xl">{res.name || "-"}</Td>
                            <Td  fontSize="xl">{res.role || "-"}</Td>
                            <Td  fontSize="xl">{res.agent || "-"}</Td>
                          </Tr>
                        );
                      })
                      }
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box> */}
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
                      m={"0 auto"}
                      w="100%"
                      align={"center"}
                      src={
                        modirAmel && modirAmel.img
                          ? `http://192.168.103.23:8000/api/v1/${modirAmel.img}`
                          : "/assets/user.png"
                      }
                      alt={modirAmel.name}
                    />
                  </Box>
                  <Box mt={5}>
                    <Text fontSize="1.3rem" fontWeight={700} mb={3} color="red">
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
              columns={{ base: 1, md: 4 }}
              spacing={10}
            >
              {Aza &&
                Aza.map((res, index) => {
                  return (
                    <Box key={index}>
                      <Box className="heyatmodir">
                        {" "}
                        <Image
                          m={"0 auto"}
                          w="100%"
                          align={"center"}
                          src={
                            res && res.img
                              ? `http://192.168.103.23:8000/api/v1/${res.img}`
                              : "/assets/user.png"
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
        </Container>
      )}
    </Box>
  );
}
export async function getStaticProps() {
  const res = await instance.get("/mainpage");

  const props = await res.items.alias;
  return {
    props: { props },
  };
}
