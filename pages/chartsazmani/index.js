import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";

export default function ChartSazmani({ props }) {
  return (
    <Box>
      <Box mt={"60px"}>
        <Image
          w="100%"
          src={
            props && `http://192.168.103.23:8000/api/v1/${props && props.image}`
          }
          alt="آتیه خواهان"
        />
      </Box>
    </Box>
  );
}
export async function getStaticProps() {
  const res = await instance.get("/chartsazmani");
  const props = await res.data[0];
  console.log(props);
  return {
    props: { props },
  };
}
