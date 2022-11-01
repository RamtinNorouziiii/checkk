import { Box, Center, Text, Stack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function NewsPage() {
  return (
    <Box>
      <Center pt={"80px"}>
        <Box
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack>
            <Text
              mb={10}
              color={"black"}
              fontSize={"2xl"}
              _hover={{ color: "pink.400" }}
              display="inline-block"
            >
              title News
            </Text>
            <Text
              display="inline-block"
              float="right"
              fontSize={"md"}
              color={"gray.500"}
            >
              08-09-2022
            </Text>
            <Text whiteSpace="pre-line" textAlign="justify" color={"gray.500"}>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}></Stack>
          <Box bg={"gray.100"} mt={6} mb={6} mx={"auto"} width="60%">
            <Image
              src={"https://picsum.photos/700"}
              width="100%"
              minH={"400px"}
              maxH={"600px"}
              marginTop="10px"
              cursor="pointer"
              p={1}
              style={{ border: "3px solid #9ca1a9" }}
              alt={"news"}
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
