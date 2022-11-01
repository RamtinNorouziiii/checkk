import {
  Box,
  Flex,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ShareHoldersChart } from "../../components/shareHolderChart";
import Bg1 from "../../public/stock1.png";
import { instance } from "../../utils/axios";
export default function ShareHolders({ props }) {
  return (
    <Box mt="5">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Box
          borderRadius="8px"
          color="white"
          width="100%"
          maxW={"100%"}
          backgroundImage={`url('${Bg1.src}')`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backdropFilter="auto"
          backdropBlur="18px"
        >
          <Box pt={20} pb={10} className="blurTest">
            <Text mb={"20px"} fontSize={30} textAlign="center" id="stocks">
              سرمایه و ترکیب سهامداران
            </Text>
            <Text
              fontWeight="bolder"
              dir="rtl"
              textAlign="justify"
              fontSize="21"
              w={"75%"}
              m={"20px auto"}
            >
              {props && props.description}
            </Text>
            <TableContainer
              backdropFilter="auto"
              backdropBlur="3px"
              m="0 auto"
              w={{ base: "100%", md: "60%" }}
              mt={20}
            >
              <Table
                fontWeight="bolder"
                fontSize={18}
                variant="simple"
                dir="rtl"
              >
                <Thead>
                  <Tr borderBottomWidth={3}>
                    <Th fontSize="xl" color="white">
                      {" "}
                      سهامداران{" "}
                    </Th>
                    <Th fontSize="xl" color="white">
                      درصد سهام
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {props &&
                    JSON.parse(props.addOnes)
                      .sort((a, b) => {
                        return b.percent - a.percent;
                      })
                      .map((res, index) => {
                        return (
                          <Tr key={index}>
                            <Td fontSize="20px"> {res.title}</Td>
                            <Td fontSize="20px"> {res.percent} % </Td>
                          </Tr>
                        );
                      })}
                  <Tr borderBottom="none" borderTopWidth={3}>
                    <Td fontSize="25px"> جمع کل</Td>
                    <Td fontSize="25px"> 100 % </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <ShareHoldersChart
              shareholders={props && JSON.parse(props.addOnes)}
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
export async function getStaticProps() {
  const res = await instance.get("/mainpage");
  const props = await res.items.shareholders[0];
  console.log(props);
  return {
    props: { props },
  };
}
