import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Spinner,
  AspectRatio,
  Image,
  Button,
  Center,
  Badge,
  DarkMode,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Slider from "react-slick";
import Bg1 from "../../public/bg1.jpg";
export default function SubCo({ alias }) {
  const settings = {
    className: "center",
    arrow: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 3500,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      height={600}
      rounded={"md"}
      backgroundImage={`url('${Bg1.src}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width={{ base: "99%", lg: "100%" }}
    >
      <Container minW={"98%"} py={16} as={Stack} spacing={12} id="aliasStock">
        <Stack align={"center"}>
          <Text fontSize={{ base: 20, md: 30 }}> شرکت های تابعه</Text>
        </Stack>
        <Stack display="bolck" direction={{ md: "row" }}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
          >
            <Slider {...settings}>
              {alias &&
                alias
                  .flatMap((o) => (!o.isMain ? o : []))
                  .map((res, index) => {
                    return (
                      <Link href={`/alias/${res._id}`}>
                        <Box
                          border="1px solid #6e6eb5"
                          width="255px"
                          height="255px"
                          boxShadow="2xl"
                          p="6"
                          rounded="lg"
                          bg={"rgba(255,255,255,0.6)"}
                        >
                          <Box flexShrink={0}>
                            <Image
                              borderRadius="lg"
                              src={
                                res &&
                                `http://192.168.103.23:8000/api/v1/${
                                  res && res.image
                                }`
                              }
                              w="100%"
                              alt="news"
                              h={"150px"}
                            />
                          </Box>
                          <Box width="100%" pt={5} mt={{ base: 4, md: 0 }}>
                            <Text
                              fontWeight="bold"
                              textTransform="uppercase"
                              fontSize="sm"
                              letterSpacing="wide"
                              color="teal.600"
                              textAlign="center"
                            >
                              {res.title}
                            </Text>
                          </Box>
                        </Box>
                      </Link>
                    );
                  })}
            </Slider>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
