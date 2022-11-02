import { Box } from "@chakra-ui/react";
import React from "react";
import FooterComp from "../components/Footer";

import { AppBanner, AppHeaderComponent } from "../components/index";

export default function DefaultLayout({ children }) {
  return (
    <>
      <AppHeaderComponent />
      <main className="App"> {children} </main>
      <FooterComp />
    </>
  );
}
