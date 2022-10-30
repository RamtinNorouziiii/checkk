import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react";
export default function RegulationsPage() {
  return (
    <Box minH="100vh">
      <TableContainer cursor="pointer" py={10} mx={10} my={70}>
        <Table variant="stripped ">
          <Thead>
            <Tr bgColor="#a6f1e0" border="2px solid black ">
              <Th fontSize="lg">Date </Th>
              <Th fontSize="lg">Title </Th>
              <Th fontSize="lg">Download </Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              my={20}
              border="2px solid black "
              borderInlineStartRadius={"lg"}
            >
              <Td color={"blue.500"}> {`07-08-2022`} </Td>
              <Td width="75%">
                <Text>Title Regulation</Text>
              </Td>{" "}
              <Td color={"blue.500"}> Download</Td>
            </Tr>

            <Tr
              my={20}
              border="2px solid black "
              borderInlineStartRadius={"lg"}
            >
              <Td color={"blue.500"}> {`07-08-2022`}</Td>
              <Td width="75%">
                <Text>Title Regulation</Text>
              </Td>{" "}
              <Td color={"blue.500"}> Download</Td>
            </Tr>

            <Tr
              my={20}
              border="2px solid black "
              borderInlineStartRadius={"lg"}
            >
              <Td color={"blue.500"}> {`07-08-2022`}</Td>
              <Td width="75%">
                <Text>Title Regulation</Text>
              </Td>{" "}
              <Td color={"blue.500"}> Download</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
