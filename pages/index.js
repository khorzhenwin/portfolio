import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Projects from "../components/carrousel";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Project 1.0.0</title>
        <link
          rel="shortcut icon"
          href="https://image.flaticon.com/icons/png/512/931/931949.png"
        />
      </Head>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
      <ScrollToTop />
    </>
  );
}
