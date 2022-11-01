import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy } from "swiper";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import Bg1 from "../../public/new1.jpg";
import { instance } from "../../utils/axios";
export default function NewsSection({ news }) {
  return (
    <Box
      borderRadius="28px"
      bgGradient="linear(to-t, #d9d9d9, #e8e8e8)"
      m={"5px auto "}
      width="100%"
      maxW={"100%"}
      backgroundImage={`url('${Bg1.src}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      id="news"
    >
      <Box width="100%" className="blurTest">
        <Text
          mb={10}
          py={{ base: "20px", md: "50px" }}
          color="white"
          backgroundImage={
            "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
          }
          fontSize={{ base: 20, md: 25 }}
          textAlign="center"
        >
          News
        </Text>

        <div data-aos="fade-right">
          <Box>
            <Swiper
              style={{ paddingBottom: "80px" }}
              modules={[Pagination, Lazy, Autoplay]}
              loop
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              breakpoints={{
                200: {
                  slidesPerView: 1.5,
                },
                850: {
                  slidesPerView: 3.5,
                },
                1050: {
                  slidesPerView: 3.5,
                },
              }}
              slidesPerView="auto"
              lazy={{
                enabled: true,
                loadPrevNext: false,
                loadOnTransitionStart: true,
              }}
              preloadImages={false}
            >
              {news &&
                news
                  .filter((el) => {
                    return (
                      el.isArchived === false &&
                      new Date(el.expireDate) > new Date()
                    );
                  })
                  .sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  })
                  .map((res, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Link href={`/news/${res._id}`}>
                          <Box
                            h={{ base: 380, lg: 450 }}
                            mx={5}
                            boxShadow="2xl"
                            p="6"
                            rounded="lg"
                            bg="white"
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
                                alt={res.title}
                                h={{ base: "85px", md: "150px" }}
                              />
                            </Box>
                            <Box
                              _hover={{ color: "pink.400" }}
                              pt={{ base: 1, md: 5 }}
                              mt={{ base: 4, md: 0 }}
                              ml={{ md: 6 }}
                            >
                              <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize={{ base: "sm", md: "md" }}
                                letterSpacing="wide"
                                //color="teal.600"

                                textAlign={{ base: "right", md: "justify" }}
                              >
                                {res.title}
                              </Text>
                              <Text
                                textAlign={{ base: "right", md: "justify" }}
                                mt={2}
                                color="gray.500"
                                display={{ base: "none", md: "block" }}
                              >
                                {res.shortDesc.length > 200
                                  ? `${res.shortDesc.slice(0, 200)}...`
                                  : res.shortDesc}
                              </Text>
                              <Text
                                textAlign={{
                                  base: "justify",
                                  md: "justify",
                                }}
                                mt={2}
                                color="gray.500"
                                display={{ base: "block", md: "none" }}
                              >
                                {res.shortDesc.length > 100
                                  ? `${res.shortDesc.slice(0, 100)}...`
                                  : res.shortDesc}
                              </Text>
                            </Box>
                          </Box>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </Box>
        </div>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={"red"}
          textAlign="left"
          ml={30}
          pb={30}
        >
          <Link
            style={{
              backgroundColor: "white",
              width: "20px",
              padding: "10px",
              borderRadius: "10px",
              color: "blue",
            }}
            href="/archivednews"
          >
            آرشیو خبر ها
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
