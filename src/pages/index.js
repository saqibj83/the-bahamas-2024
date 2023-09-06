import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { saasClassicTheme } from "common/theme/saasClassic";
import ResetCSS from "common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/SaasClassic/saasClassic.style";

import BannerSection from "containers/SaasClassic/Banner";
import PartnerSection from "containers/SaasClassic/Partner";
import CountDown from "containers/CryptoModern/CountDown";
import Navbar from "containers/SaasClassic/Navbar";
import ServiceSection from "containers/SaasClassic/Service";
import TrialSection from "containers/SaasClassic/Trial";
import UpdateScreen from "containers/SaasClassic/UpdateScreen";
import Newsletter from "containers/SaasClassic/Newsletter";
import Footer from "containers/SaasClassic/Footer";

const SaasClassic = () => {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <Head>
          <title>Triton Poker Series | London 2023 </title>
          <meta
            name="Description"
            content="Triton Super High Roller Series 2023"
          />
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="google-site-verification"
            content="OUn2prDdnV-MyCWAa56nnZAV-dqzTiN7b3zaOyhPAUA"
          />
          {/* Load google fonts */}
          <link href="https://use.typekit.net/wtc2zlg.css" rel="stylesheet" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <CountDown />
          <UpdateScreen />
          <TrialSection />
          <Newsletter />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasClassic;
