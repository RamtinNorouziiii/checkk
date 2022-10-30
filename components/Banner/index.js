import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Lazy,
  Navigation,
  EffectCoverflow,
  EffectFade,
} from "swiper";
import { Box, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import Banner1 from "../../public/banner1.png";
import Banner2 from "../../public/banner2.png";
export default function AppBanner() {
  return (
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
        <Box>
          <Image w={"100%"} src={Banner1} h={{ base: "85px", md: "150px" }} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image w={"100%"} src={Banner2} h={{ base: "85px", md: "150px" }} />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
