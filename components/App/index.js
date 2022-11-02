import { Box } from "@chakra-ui/react";
import NewsSection from "../news";
import SubCo from "../subco";
import TopSwiper from "../swiper/toppage";
import MissionComp from "../mission";
import AppBanner from "../Banner";
export default function AppContent({ props }) {
  return (
    <Box w={"100%"}>
      <AppBanner />
      <TopSwiper banners={props.banner} />
      <NewsSection news={props.news} />
      <SubCo alias={props.alias} />
      <MissionComp />
    </Box>
  );
}
