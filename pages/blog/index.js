import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import BlogList from "../../components/content/blogList";
import ThreeBackground from "../../components/ThreeBackground";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Khor Zhen Win | Blog</title>
        <meta
          name="description"
          content="Where i rant because i have no friends."
          key="desc"
        />
        <meta
          property="og:title"
          content="Khor Zhen Win | Blog But Not Really"
        />
        <meta property="og:description" content="Blogging? no im flogging" />
        <meta property="og:image" content="https://i.imgur.com/FpE4HAZ.jpeg" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box position="relative" zIndex={1}>
        <Header />
        <BlogList />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
