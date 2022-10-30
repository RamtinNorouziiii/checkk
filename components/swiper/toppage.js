import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Lazy,
  Navigation,
  EffectCoverflow,
  EffectFade,
} from "swiper";

export default function TopSwiper({ banners }) {
  return (
    <Box my={"50px"}>
      <Swiper
        style={{}}
        modules={[Autoplay, Pagination, Lazy, EffectFade]}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop
        lazy={{
          enabled: true,
          loadPrevNext: false,
          loadOnTransitionStart: true,
        }}
        preloadImages={false}
      >
        {banners &&
          banners
            .sort((a, b) => {
              return a.sort - b.sort;
            })
            .map((res, index) => {
              return (
                <SwiperSlide>
                  <Box>
                    <Image
                      w={"100%"}
                      src={`http://192.168.103.23:8000/api/v1/${res.image}`}
                      h={{ base: "285px", md: "600px" }}
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </Box>
  );
}
