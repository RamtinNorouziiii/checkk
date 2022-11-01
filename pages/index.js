import { Box } from "@chakra-ui/react";
import DefaultLayout from "../layouts/default";
import { AppBanner } from "../components";
import AppContent from "../components/App";
import { instance } from "../utils/axios";

export default function Home({ props }) {
  return (
    <Box className="App" bg={"#c7c5c5"}>
      <AppContent props={props} />
    </Box>
  );
}
export async function getStaticProps(context) {
  const result = await instance.get("/mainpage");
  const props = result.items;
  return {
    props: {
      props,
    },
  };
}
