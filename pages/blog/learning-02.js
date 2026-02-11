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
          src="https://i.imgur.com/YwWrqoz.png"
          alt="Go"
          w={{ base: "100%", md: "70%" }}
          mt={-16}
          mb={6}
        />
        Someone slid into my dms asking me if I wanted a slave job that does 10
        too 12 hours a day but pays 1.6x my current salary. So without even
        securing an interview I just straight up bootcamped my way into learning
        Golang. First it was the basics of{" "}
        <Link
          href="https://gobyexample.com/"
          isExternal
          color="orange.300"
          fontWeight="bold"
        >
          Go by Example
        </Link>{" "}
        then some youtube tutorials. I&apos;m pretty sure many of us goes
        through this same process one way or another.
        <br />
        <br />
        So then I just built some bs REST APIs with Chi router and Gorm just to
        test out some things. Vibe coded the entire project with my best friend
        ChatGPT which helped me setup my dockerfile and docker-compose.
        Originally the project was supposed to fetch stock prices, have an
        in-memory calculation that I will do some maths magic on it to send me a
        notification to Telegram. Then the whole application was supposed to be
        containerized and deployed on EC2. I tried setting up a local postgres
        volume in my docker-compose but somehow vibe coding couldn&apos;t help
        me solve me having to keep running migration on app startup.
        <br />
        <br />I even setup my debit card so that AWS can charge my ass just for
        wanting to use free tier RDS (to store my ticker symbols). First version
        can be found here called{" "}
        <Link
          href="https://github.com/khorzhenwin/go-chujang"
          isExternal
          color="orange.300"
          fontWeight="bold"
        >
          go-chujang
        </Link>{" "}
        But because my original architecture used kafka as a temp storage where
        my worker can keep consuming and reading the ticker prices, this flow
        seemed abit anti-pattern to me. Once i took a step back and actually
        reviewed the architecture i was like wtf im a dumbass.
        <br />
        <br />
        So here came version 2 called{" "}
        <Link
          href="https://github.com/khorzhenwin/gold-digger"
          isExternal
          color="orange.300"
          fontWeight="bold"
        >
          gold-digger
        </Link>{" "}
        where it basically ripped out the whole kafka integration with a local
        volume for TimescaleDB (TSDB / TigerData). On a high-level seems like it
        should work better but unironically at this scale where im limited to
        free tier rate limit of like 20-25 calls per day with rotation of 5 API
        keys, I doubt I would ever need this kind of architecture.
        <br />
        <br />
        But TLDR I got my <Link href="/blog/personal-01">home server</Link>{" "}
        thinking I can deploy this application on it. But I&apos;m still
        currently stuck at pushing my image tag to my home server registry. But
        fun times learning Go, it&apos;s as expected as what everyone raves
        about, easy to implement concurrency, abit of a nuisance pointer
        referencing. Very pragmatic error handling paradigm but abit tedious at
        some times.
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Learning Golang</title>
        <meta
          name="description"
          content="Learning Golang because I am a salary slave"
          key="desc"
        />
        <meta property="og:title" content="Khor Zhen Win | Learning Golang" />
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
          title={"Learning Golang"}
          date={"July 2025"}
          content={content}
        />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
