import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Achievements from "../components/carrousel";
import Experience from "../components/cards";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Khor Zhen Win</title>
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <Header />
      <Hero />
      <AboutMe />
      <Achievements />
      <Experience />
      <Footer />
      <ScrollToTop />
    </>
  );
}
