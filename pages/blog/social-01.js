import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box, Image, Text } from "@chakra-ui/react";
import ArticleLayout from "../../components/blog/article";

export default function Blog() {
  const content = (
    <>
      <Box textAlign={"justify"}>
        For my entire lifetime even when i was a kid, I have always walked the
        realms of life carrying extra weight. Being the obese kid with more
        curves than any other girl around me was not a fun experience. I was
        always treated differently, looked at differently, even by my own
        parents and siblings. So when Covid hit, I was like its now or never, to
        prove to myself I don't need anyone else in my life to shape up cause I
        aint gonna ship out.
        <Image
          src="https://i.imgur.com/PhU8YBU.jpeg"
          alt="High School"
          w={{ base: "70%", md: "50%" }}
          py={6}
        />
        <span style={{ fontWeight: "bold", color: "orange" }}>TLDR</span> <br />
        <li>I lost 36kg in 6 months.</li>
        <li>Ate 1200kcal a day</li>
        <li>Exercise 5 days a week</li>
        <li>Weights 1 hour, walk 1 hour, jog 25 mins - 3 to 5 km</li>
        <br />
        Obviously the diet at that time was not sustainable for me @ 172cm with
        1200kcal so it's harder to maintain calories now but all in all good
        experience. Wouldn't recommend what I did but if you have the sheer
        determination, I believe anything is possible. I became more confident,
        more active, more sociable, with a higher self-esteem that propelled me
        to excel in everything I do and overall I feel better with being healthy
        as a part of my lifestyle. I don't get tired much and I can very much
        function normally everyday with 6 hours of sleep.
        <br />
        <br />
        But ya be healthy guys and girls.
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Losing Weight</title>
        <meta
          name="description"
          content="Losing Weight Because Being Fat is Not Cool"
          key="desc"
        />
        <meta property="og:title" content="Khor Zhen Win | Losing Weight" />
        <meta property="og:description" content="Blogging? no im flogging" />
        <meta property="og:image" content="https://i.imgur.com/p1c9rvg.jpeg" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <Box bgGradient="linear(to-b, blackAlpha.650, gray.600)">
        <Header />
        <ArticleLayout
          title={"Losing Weight Because Being Fat is Not Cool"}
          date={"July 2025"}
          content={content}
        />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
