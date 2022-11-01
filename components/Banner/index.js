import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Lazy,
  Navigation,
  EffectCoverflow,
  EffectFade,
} from "swiper";
import { Box, Spinner, Image } from "@chakra-ui/react";
import Banner1 from "../../public/banner1.png";
import Banner2 from "../../public/banner2.png";

export default function AppBanner() {
  return (
    <Box m={"0 auto"} w={"100%"}>
      <Swiper
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        effect="fade"
        loop
        speed={1500}
      >
        <SwiperSlide>
          <Image
            w={"100%"}
            src={Banner1.src}
            h={{ base: "85px", md: "150px" }}
            alt="آتیه خواهان"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            w={"100%"}
            src={Banner2.src}
            h={{ base: "85px", md: "150px" }}
            alt="آتیه خواهان"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
