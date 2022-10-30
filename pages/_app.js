import "../styles/main.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
