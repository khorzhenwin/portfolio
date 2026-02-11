import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import ArticleLayout from "../../components/blog/article";
import ThreeBackground from "../../components/ThreeBackground";

export default function Blog() {
  const content = (
    <>
      <Box>
        <Image
          src="https://i.imgur.com/AN4s2tC.jpeg"
          alt="DDD Book"
          mt={-16}
          mb={6}
        />
        Initially looking at the title of this book, I already expected it to be
        very heavily opinionated. It's not like you can tell someone how to
        design a domain model when every business has different needs and
        requirements. So at face value, I already expected to just skim through
        most of this book.
        <br />
        <br />
        Chapters 1-4 are essentially very light on the topic itself. Just
        introducing the concepts of domains & subdomains in businesses, and how
        they relate to bounded contexts in software design. Honestly, it's very
        dry and if you have worked in a microservice-based engineering team
        before, it shouldn't be hard at all to follow along. So far I would say
        these few chapters can be skimmed through and the examples can also be
        skipped as it just discusses around different flavours of decoupling.
        This is to each their own in an organization though.
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Learning Golang</title>
        <meta
          name="description"
          content="Learning Domain-Driven Design because I am a salary slave"
          key="desc"
        />
        <meta
          property="og:title"
          content="Khor Zhen Win | Learning Domain-Driven Design"
        />
        <meta property="og:description" content="Blogging? no im flogging" />
        <meta property="og:image" content="https://i.imgur.com/YwWrqoz.png" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box position="relative" zIndex={1}>
        <Header />
        <ArticleLayout
          title={"Learning Domain-Driven Design"}
          date={"February 2026"}
          content={content}
        />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
