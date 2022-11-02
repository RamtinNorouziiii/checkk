import { ReactNode, useEffect, useState } from "react";
import { GoMailRead } from "react-icons/go";
import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { instance } from "../../utils/axios";


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterComp() {
    const [info,setInfo]=useState()
    useEffect(() => {
        instance
          .get("/mainpage")
          .then((res) => {
            setInfo(res.items && res.items.info);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
console.log(info)
  return (
    <Box
      dir="rtl"
      bg={useColorModeValue("#333333", "gray.900")}
      color={useColorModeValue("gray.100", "gray.100")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "2fr 1fr", md: "3fr 2fr 4fr 1fr  " }}
          spacing={8}
        >
          <Stack align={"center"}>
            <ListHeader>درباره ما</ListHeader>
            <hr style={{ color: "white", width: "50%", marginBottom: "10px" }} />
            <Link href={"/aboutus"}>  تاریخچه و ماموریت شرکت  </Link>

            <Link href={"/joboffers"}> همکاری با ما </Link>
          </Stack>

          <Stack align={"center"}>
            <ListHeader>تماس با ما</ListHeader>
            <hr style={{ color: "white", width: "50%", marginBottom: "10px" }} />
            <Link href={`tel:${info && info[0] && info[0].tell}`}>
              {" "}
              {info && info[0] && info[0].tell} <PhoneIcon />{" "}
            </Link>
            <Link>
              {info && info[0] && info[0].codePosti} <GoMailRead style={{ display: "inline-block" }} />
            </Link>
            <Link href={`mailto: ${info && info[0] && info[0].email}`}>
              {info && info[0] && info[0].email} <EmailIcon />
            </Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>آدرس مجموعه</ListHeader>
            <hr style={{ color: "white", width: "100%", marginBottom: "10px" }} />
            <Text>
              {
                info && info[0] && JSON.parse(info[0].addOnes)[0].answer
              }
            </Text>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>
              <Link
                href={
                  "https://www.google.com/maps/place/%D8%B4%D8%B1%DA%A9%D8%AA+%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA+%D8%B3%D8%B1%D9%85%D8%A7%DB%8C%D9%87+%D8%A2%D8%AA%DB%8C%D9%87+%D8%AE%D9%88%D8%A7%D9%87%D8%A7%D9%86%E2%80%AD/@35.7250874,51.4297916,17z/data=!3m1!4b1!4m5!3m4!1s0x3f8e015f9846dc3f:0x25c74de863129633!8m2!3d35.7250275!4d51.4297947"
                }
              >
                مکان یابی
              </Link>{" "}

            </ListHeader>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d809.7663197800405!2d51.429544790221556!3d35.72461304664519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e015f9846dc3f%3A0x25c74de863129633!2z2LTYsdqp2Kog2YXYr9uM2LHbjNiqINiz2LHZhdin24zZhyDYotiq24zZhyDYrtmI2KfZh9in2YY!5e0!3m2!1sen!2snl!4v1666514144864!5m2!1sen!2snl" width="300" height="200" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </Stack>

        </SimpleGrid>
      </Container>
      <Text textAlign="center" fontSize={"sm"} w="100%">
        کلیه حقوق این وب سایت متعلق به شرکت مدیریت سرمایه آتیه خواهان  می‌باشد
      </Text>
    </Box>
  );
}
