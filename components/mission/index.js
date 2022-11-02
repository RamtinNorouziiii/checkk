import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Sakhteman from "../../public/sakhteman.png";
export default function MissionComp() {
  return (
    <Box
      backgroundImage={`url(${Sakhteman.src})`}
      width="100%"
      maxW={"100%"}
      borderRadius="4px"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      height="600px"
      id="vision"
    >
      <Box w="100%" height="100%" textAlign="center" className="blurTest">
        <div data-aos="fade-right">
          <Stack
            spacing={4}
            width={{ base: "100%", md: "45%" }}
            m={"0 auto"}
            p={20}
          >
            <Text mb={30} fontSize={{ base: "2xl", md: "3xl" }} color="white">
              {" "}
              ماموریت شرکت ما
            </Text>
            <Text
              fontWeight={700}
              color={"white"}
              fontSize={{ base: "lg", md: "xl" }}
              dir="rtl"
              textAlign="justify"
            >
              شرکت مدیریت سرمایه آتیه خواهان به عنوان بازوی اجرائی صندوق تامین
              آتیه کارکنان بانک ملت ماموریت دارد با خلق ارزش و سودآوری به منظور
              افزایش منافع سهامداران شرکت از طریق سرمایه گذاری های مستقیم و با
              واسطه، مشارکت در طرح های سرمایه گذاری و حمایت از کسب و کارهای نوپا
              در حوزه های متنوع در جهت حداکثر کردن ثروت سهامداران اهتمام ورزد.
            </Text>
          </Stack>
        </div>
      </Box>
    </Box>
  );
}
