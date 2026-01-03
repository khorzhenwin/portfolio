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
      <Box textAlign={"justify"}>
        Basically how this started was, I was having my own fun little project
        building something for my own learning (more on this in another post). I
        didn&apos;t tell anyone about it either, I was just doing it for shits and
        giggles. Then just on a random Monday, a friend from my university days
        dropped me a message asking if I was interested in buying a home server.
        <Image
          src="https://i.imgur.com/0qowfW2.png"
          alt="Leaked Chat"
          w={{ base: "100%", md: "70%" }}
          py={6}
        />
        As anyone would think, wtf this is so random why would I want a home
        server?
        <br />
        <br />
        But then I was like fk Im not gonna spend my money on travelling,
        clothes, food, or entertainment anyways. I just so happened to connect
        my debit card to my AWS account and im already being charged like
        RM20-30 a month. Besides that, my RedPanda kafka cluster which I was
        using for my learning-ish personal project is also on a free trial.
        <br />
        <br />
        So I was like, lets just go balls deep into this.
        <Image
          src="https://i.imgur.com/p1c9rvg.jpeg"
          alt="Polaris"
          w={{ base: "100%", md: "70%" }}
          py={6}
        />
        I didn&apos;t bother much about the specs of the bare metal server since I
        just wanted something to run a few containers here and there for my
        personal projects. So i entirely trusted my friend on it and gave him
        ~RM700 to buy and build it for me. Specs :
        <br />
        <li>CPU - i3-8100</li>
        <li>RAM - 8GB DDR4</li>
        <li>Storage - 500GB SSD</li>
        <br />
        So how we got to the name{" "}
        <span style={{ fontWeight: "semibold", color: "orange" }}>
          Polaris
        </span>{" "}
        was because the case was &quot;white&quot; and we wanted to be cool and not name
        it &quot;Home Server&quot; or some normie bs.
        <Image
          src="https://i.imgur.com/mf1H6mE.jpeg"
          alt="Polaris Setup"
          w={{ base: "100%", md: "70%" }}
          py={6}
        />
        Basically my friends helped me flash ubuntu server on it, installed{" "}
        <span style={{ fontWeight: "semibold", color: "orange" }}>k3s</span>{" "}
        that comes with all the cool in built traefik which handles your ingress
        setup and other things that are baked in for your simplicity. They then
        explained to me about all the things I have to do which I have never
        heard about before. The guy even wrote my manifest file for me to host
        my own service registry. Crazy times we live in.
        <br />
        <br />
        Big words started coming in like proxmox, OpenLens for monitoring, setting up
        WireGuard if im not slapping a VPN on my port forward and many other big
        jargons. But currently im stuck on the WireGuard part because I am lazy
        to setup the cloud tunnelling because apparently my ISP is doing me
        dirty with the CGNAT (I have no idea what i am talking about). So I have
        to use a VPS to tunnel the connection back to my home server.
        <br />
        <br />
        To conclude basically I am a lazy mofo that decided he wasn&apos;t that
        interested in deploying his containers after all. Because I need to stay
        at home to use the home server and that ain&apos;t my lifestyle chief. I
        can&apos;t be confined by the four walls of my room. Therefore I am now stuck
        in limbo.
        <br />
        <br />
        Thanks for reading.
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Home Server</title>
        <meta
          name="description"
          content="Buying a home server because I have adult money"
          key="desc"
        />
        <meta property="og:title" content="Khor Zhen Win | Home Server" />
        <meta property="og:description" content="Blogging? no im flogging" />
        <meta property="og:image" content="https://i.imgur.com/p1c9rvg.jpeg" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box position="relative" zIndex={1}>
        <Header />
        <ArticleLayout
          title={"Buying A Home Server Because I Have Adult Money"}
          date={"June 2025"}
          content={content}
        />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
