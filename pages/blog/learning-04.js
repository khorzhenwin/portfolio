import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import ArticleLayout from "../../components/blog/article";
import ThreeBackground from "../../components/ThreeBackground";

const imageUrl = "https://i.imgur.com/yyCNJbS.png";
const description =
  "A Java engineer's final thoughts on finishing Concurrency in Go.";

export default function Blog() {
  const content = (
    <>
      <Box>
        <Image src={imageUrl} alt="Learning Concurrency in Go" mb={6} />
        <Text mb={4}>
          Read here:{" "}
          <Link
            href="https://edu.anarcho-copy.org/Programming%20Languages/Go/Concurrency%20in%20Go.pdf"
            isExternal
            color="orange.300"
            fontWeight="bold"
          >
            Concurrency in Go
          </Link>
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Book Rating : 8/10
        </Heading>
        <Text mb={4}>
          Overall, I think this is a great book to read if you are coming from a
          different language. It&apos;s a good fundamental because it holds good
          meat about the internal operations within the language itself, instead
          of just telling you what syntax to use and calling it a day.
        </Text>
        <Text mb={4}>
          Coming from Java, the concepts differ quite heavily from the Spring
          Boot convention of writing{" "}
          <code>@Async(&apos;threadPoolTaskExecutor&apos;)</code> while declaring
          a pool for the concurrent tasks to run. Go feels much more direct. You
          are introduced to the primitives more plainly, so the mental model is
          less about framework convention and more about how the concurrent work
          is actually being coordinated.
        </Text>
        <Text mb={4}>
          The early chapters do a good job introducing the building blocks:
          goroutines, channels, and synchronous mutexes. That part was important
          for me because it slowly paints the bigger picture of how concurrent
          processes work at scale instead of trying to act smart too early.
        </Text>
        <Text mb={4}>
          The programming paradigm in this book is also mildly refreshing to
          understand. Coming from a Java background, I honestly think this book
          should still be read even if you are not writing any Go code, because
          it gives an interesting perspective on how other languages are
          handling concurrency.
        </Text>
        <Text mb={4}>
          Another thing I liked is that the book does a great job describing
          anti-patterns in premature optimization when you are trying to write
          &quot;Best practice&quot; code. It gives a fairly reasonable
          &quot;trust me bro&quot; basis with the Go runtime, which I actually
          appreciated. Sometimes that is enough when the point is to help you
          build the correct intuition first before disappearing into runtime
          rabbit holes.
        </Text>
        <Text mb={4}>
          A notable shout from me is Chapter 4, where it mentioned a section
          about error handling that I really enjoyed. From where I was coming
          from, asynchronous processes were usually either thrown all the way to
          the caller or failed silently. But in this section, in line with
          Go&apos;s programming paradigm of error handling, it breaks down a
          simple example of how concurrent errors should be handled.
        </Text>
        <Text mb={4}>
          Although I would have loved to see an example of fail-fast error
          handling where any goroutine giving the first error immediately stops
          the rest, that is more of a nitpick from me than an actual complaint.
          I also skimmed through some topics like work stealing in the Go
          runtime and healing unhealthy goroutines, but overall most of the
          content was interesting to me and I greatly enjoyed the book.
        </Text>
        <Text mb={4}>
          That said, if you have already been writing Golang for enterprise
          applications for more than a year, I don&apos;t think this book will
          be very beneficial to you. But if you are transitioning into Go from
          another language, I think it is absolutely worth the read.
        </Text>
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Learning Concurrency in Go</title>
        <meta name="description" content={description} key="desc" />
        <meta
          property="og:title"
          content="Khor Zhen Win | Learning Concurrency in Go"
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Khor Zhen Win | Learning Concurrency in Go"
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box
        position="relative"
        zIndex={1}
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Box flex="1">
          <ArticleLayout
            title={"Learning Concurrency in Go"}
            date={"March 2026"}
            content={content}
          />
        </Box>
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
