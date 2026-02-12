import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import ArticleLayout from "../../components/blog/article";
import ThreeBackground from "../../components/ThreeBackground";

export default function Blog() {
  const content = (
    <>
      <Box>
        <Image src="https://i.imgur.com/AN4s2tC.jpeg" alt="DDD Book" mb={6} />
        <Heading as="h2" size="lg" mb={4}>
          Book Rating : 5/10
        </Heading>
        Initially looking at the title of this book, I already expected it to be
        very heavily opinionated. It&apos;s not like you can tell someone how to
        design a domain model when every business has different needs and
        requirements. So at face value, I already expected to just skim through
        most of this book.
        <br />
        <br />
        Chapters 1-4 are essentially very light on the topic itself. Just
        introducing the concepts of domains & subdomains in businesses, and how
        they relate to bounded contexts in software design. Honestly, it&apos;s
        very dry and if you have worked in a microservice-based engineering team
        before, it shouldn&apos;t be hard at all to follow along. So far I would
        say these few chapters{" "}
        <span style={{ fontWeight: "semibold", color: "orange" }}>
          can be skimmed through
        </span>{" "}
        and the examples can also be skipped as it just discusses around
        different flavours of decoupling. This is to each their own in an
        organization though.
        <br />
        <br />
        Chapter 5 introduces concepts of locking which I for one think if you
        have read part of Designing Data Intensive Applications (DDIA) you would
        have already been exposed to this concept. Chapter 6 talks about
        aggregates and state management which is a key concept in CQRS if the
        reader is not already familiar with it.{" "}
        <span style={{ fontWeight: "semibold", color: "orange" }}>
          Chapter 7
        </span>{" "}
        is rather juicy where the main notion revolves around event sourcing
        which I think is the crux of the entire DDD concept. Relating how event
        sourcing works similarly to WAL in databases, you would rather get the
        concept quickly. It&apos;s quite important in my opinion to understand
        this now as it evolves further into how replayability of events can help
        in reconstructing state in different bounded contexts.
        <br />
        <br />
        <span style={{ fontWeight: "semibold", color: "orange" }}>
          Chapter 8
        </span>{" "}
        goes deeper into the topic of architectural patterns such as hexagonal
        architecture (ports & adapters), and CQRS. I think at least for the CQRS
        part, it was quite insightful because I personally had experience with
        asynchronous projections causing read models to have lag that was still
        tolerable in the trade off. However, since the projections was sort of
        an outbox pattern, downstream events still depended on the read model to
        be up-to-date which caused some issues.
        <br />
        <br />
        Honestly, I skipped most of Chapter 9 because it was mostly about Saga
        pattern, outbox, and half of the things that didn&apos;t really interest
        me. Again, about Chapter 10 I have no clue what it was about, so nothing
        for me to note on here. I can&apos;t really tell you what I learned from
        Chapter 11 as well, but I think it has something to do with evolving
        legacy systems to DDD.
        <br />
        <br />
        Chapter&apos;s Skipped
        <li>12 - Event Storming</li>
        <li>13 - Domain-Driven Design in the Real World</li>
        <li>14 - Microservices</li>
        <br />
        Chapter 15 on Event Driven Architecture, and Chapter 16 on Data Mesh are
        worth skimming through. You may find some nuggets of knowledge in there.
        Data Mesh topic is mostly on OLAP vs OLTP if you are not already
        familiar with Data Engineering terminologies like fact tables, dimension
        tables, etc. It will help if you are interested in how medallion
        architecture is used for data pipelines. But since I was already
        familiar with the concepts of DAGs, ETL/ELT, I didn&apos;t find much
        value in it.
        <br />
        <br />I skipped the 2 appendix chapters as well since it didn&apos;t
        seem to add much value to me. Overall I would say this book is{" "}
        <span style={{ fontWeight: "semibold", color: "orange" }}>
          just okay
        </span>
        . If you are new to DDD concepts, it may be worth a read but I would
        suggest skimming through most of the chapters. If you are already
        familiar with microservices architecture, event sourcing, CQRS, and
        related patterns, I don&apos;t think this book would add much value to
        you. It&apos;s quite opinionated and I feel like the author is trying to
        push DDD as the ultimate solution to all software design problems when
        in reality, it&apos;s just one of many tools in the toolbox.
        <br />
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Learning Domain-Driven Design</title>
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
