import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box, Image, Text } from "@chakra-ui/react";
import ArticleLayout from "../../components/blog/article";
import ThreeBackground from "../../components/ThreeBackground";

export default function Blog() {
  const content = (
    <>
      <Box>
        <span
          style={{
            fontWeight: "lighter",
            color: "orange",
            fontFamily: "italic",
            fontVariant: "small-caps",
          }}
        >
          CONTEXT
        </span>
        <br />
        I went on this trip with 3 other friends in October 2025. Weather was
        chill, not always raining but genting type of weather. Travel route was
        Taichung & Taipei for a total of 6 days. Overall pretty chill trip and
        very fun, would give 8/10 for the company.
        <Image src="https://i.imgur.com/0zK6Vd4.png" alt="Airport" py={4} />
        <Image
          src="https://i.imgur.com/a4m6svU.png"
          alt="Train Station"
          py={4}
        />
        On the first day we directly boarded the train to head to Taichung from
        the aiport. We checked in and immediately headed out to explore Feng
        Chia night market.
        <Image
          src="https://i.imgur.com/px7bNVZ.png"
          alt="Minglun Pancake"
          py={4}
        />
        <Image
          src="https://i.imgur.com/P5boWjU.jpeg"
          alt="Feng Chia Night Market"
          py={4}
        />
        On the second day we started off with Braised Pork Rice but there
        wasn&apos;t many shops open as during our visit there was the swine flu
        outbreak. We then headed to the Rainbow Village, which was a very
        colourful and vibrant place. Stooped by for lunch at Tong An Curry which
        to my surprise taiwan curry rice has Japanese influence yes but the
        taste is totally different, focusing more on smokey aromas. After that
        later in the day, we headed to the Gaomei Wetlands, which was a very
        beautiful place to watch the sunset.
        <Image
          src="https://i.imgur.com/8qFlhmQ.png"
          alt="Braised Pork Rice"
          py={4}
        />
        <Image
          src="https://i.imgur.com/JQwSMe5.jpeg"
          alt="Rainbow Village"
          py={4}
        />
        <Image
          src="https://i.imgur.com/n3MHmyf.png"
          alt="Tong An Curry"
          py={4}
        />
        <Image
          src="https://i.imgur.com/cPMqY2u.png"
          alt="Gaomei Wetlands"
          py={4}
        />
        On the third day we booked a tour to go to Sun Moon Lake, which was a
        very beautiful place. We took the boat tour around the lake and also
        visited the temples around the lake. After that we headed to see some
        sheep at Qingjing Farm, which was a very fun experience.
        <Image
          src="https://i.imgur.com/7hZNgmJ.png"
          alt="Sun Moon Lake"
          py={4}
        />
        <Image
          src="https://i.imgur.com/ndUhyrb.png"
          alt="Qingjing Farm"
          py={4}
        />
        On the forth day we decided to chill abit and head back to Taipei. We
        visited Liberty Square before heading to a quaint place for drinks (i
        forgot the name).
        <Image
          src="https://i.imgur.com/BdKwtLW.png"
          alt="Liberty Square"
          py={4}
        />
        <Image src="https://i.imgur.com/bynuFW2.png" alt="Drinks" py={4} />
        <Image src="https://i.imgur.com/w6DZ8eu.png" alt="Drinks 2" py={4} />
        On the fifth day we went to Jiufen & Shifen to light up the lantern as
        well as explore the old town to get souvenirs. Towards the end of the
        trip it&apos;s usually just shopping and buying stuff so for the sixth
        day we just went to Ximending and Taipei 101 to do some shopping and eat
        some food before heading back to the airport.
        <Image src="https://i.imgur.com/OoIX3rq.png" alt="Jiufen" py={4} />
        <Image src="https://i.imgur.com/0brAbLV.png" alt="Taipei 101" py={4} />
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Taiwan Trip</title>
        <meta name="description" content="Taiwan Trip" key="desc" />
        <meta property="og:title" content="Khor Zhen Win | Taiwan Trip" />
        <meta property="og:description" content="Blogging? no im flogging" />
        <meta property="og:image" content="https://i.imgur.com/1sr0qCZ.png" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box position="relative" zIndex={1}>
        <Header />
        <ArticleLayout
          title={"Taiwan Trip"}
          date={"October 2025"}
          content={content}
        />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
