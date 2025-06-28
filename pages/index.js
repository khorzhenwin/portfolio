import Header from "../components/layout/header";
import Hero from "../components/content/hero";
import AboutMe from "../components/content/aboutMe";
import Achievements from "../components/content/carrousel";
import Experience from "../components/content/cards";
import Footer from "../components/layout/footer";
import ScrollToTop from "../components/scrollToTop";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Khor Zhen Win | Portfolio</title>
        <meta
          name="description"
          content="A simple portfolio made when I had some spare time during my last few days of internship."
          key="desc"
        />
        <meta
          property="og:title"
          content="Khor Zhen Win | Portfolio But Not Really"
        />
        <meta
          property="og:description"
          content="Built with Next.js and Chakra UI"
        />
        <meta property="og:image" content="https://i.imgur.com/FpE4HAZ.jpeg" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <Box bgGradient="linear(to-b, blackAlpha.650, gray.600)">
        <Header />
        <Hero />
        <AboutMe />
        <Experience />
        <Achievements />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
