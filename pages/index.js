import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import ScrollToTop from "../components/scrollToTop";
import ThreeBackground from "../components/ThreeBackground";
import {
  aboutCards,
  experiences,
  featuredProjects,
  techStack,
} from "../lib/portfolioData";

const MotionBox = motion(Box);

function TypeWriter({ words, speed = 85, pause = 1700 }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 520);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < word.length) {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        speed,
      );
    } else if (!deleting && text.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length - 1)),
        speed / 2,
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((idx) => idx + 1);
    }

    return () => clearTimeout(timeout);
  }, [deleting, pause, speed, text, wordIndex, words]);

  return (
    <Text as="span">
      <Text
        as="span"
        bgGradient="linear(to-r, orange.500, orange.300)"
        bgClip="text"
      >
        {text}
      </Text>
      <Text as="span" color="orange.300" opacity={showCursor ? 1 : 0}>
        |
      </Text>
    </Text>
  );
}

export default function Home() {
  const duplicatedTech = useMemo(() => [...techStack, ...techStack], []);
  const fullTimeExperiences = useMemo(
    () => experiences.filter((experience) => experience.type === "Full-time"),
    [],
  );
  const internshipExperiences = useMemo(
    () => experiences.filter((experience) => experience.type === "Internship"),
    [],
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | Portfolio</title>
        <meta
          name="description"
          content="A simple portfolio made when I had some spare time during my last few days of internship."
          key="desc"
        />
        <meta
          property="og:title"
          content="Khor Zhen Win | Portfolio But Not Really"
        />
        <meta
          property="og:description"
          content="Built with Next.js and Chakra UI"
        />
        <meta property="og:image" content="https://i.imgur.com/FpE4HAZ.jpeg" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box
        position="relative"
        zIndex={1}
        color="white"
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Box flex="1">
          <Container
            maxW="6xl"
            pt={{ base: 20, md: 28 }}
            pb={{ base: 16, md: 20 }}
          >
            <VStack textAlign="center" spacing={7}>
              <Heading
                fontWeight={700}
                fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
                lineHeight="110%"
                color="white"
              >
                Hello, I&apos;m <br />
                <Text as="span" color="orange.400">
                  Khor Zhen Win
                </Text>
              </Heading>
              <Heading
                fontWeight={800}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight="105%"
              >
                I&apos;ve done{" "}
                <TypeWriter
                  words={[
                    "Backend Systems",
                    "Payment Services",
                    "Fullstack Applications",
                  ]}
                />
              </Heading>
              <Text color="gray.300" maxW="3xl" fontSize="xl" px={4}>
                A backend developer building scalable systems w/ Java (domain in
                fintech) . Have some other skills like Next.js, React, &
                Node.js.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  as="a"
                  href="#projects"
                  variant="link"
                  color="orange.300"
                  _hover={{ color: "orange.200" }}
                >
                  View Projects
                </Button>
                <Button
                  as="a"
                  href="#about"
                  variant="link"
                  color="whiteAlpha.900"
                  _hover={{ color: "white" }}
                >
                  About Me
                </Button>
              </HStack>
            </VStack>
          </Container>

          <Box
            bg="blackAlpha.400"
            borderY="1px solid"
            borderColor="whiteAlpha.200"
            py={5}
            overflow="hidden"
          >
            <Text
              textAlign="center"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="widest"
              color="gray.400"
              mb={4}
            >
              Technologies I Work With
            </Text>
            <HStack className="marquee-left" spacing={3} whiteSpace="nowrap">
              {duplicatedTech.map((tech, index) => (
                <HStack
                  key={`${tech.name}-${index}`}
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  bg="whiteAlpha.100"
                  px={4}
                  py={2}
                  borderRadius="full"
                >
                  <Icon as={tech.icon} color="orange.300" />
                  <Text fontSize="sm" color="gray.200">
                    {tech.name}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </Box>

          <Container maxW="6xl" py={{ base: 14, md: 20 }} id="projects">
            <VStack spacing={3} mb={10}>
              <Text
                fontWeight="bold"
                fontSize={20}
                textTransform="uppercase"
                color="orange.400"
              >
                Featured Work
              </Text>
              <Heading textAlign="center" color="gray.100">
                GitHub Projects
              </Heading>
            </VStack>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              {featuredProjects.map((project, idx) => (
                <GridItem key={project.title}>
                  <MotionBox
                    whileHover={{
                      rotateX: -4,
                      rotateY: idx % 2 === 0 ? 5 : -5,
                      y: -8,
                    }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    transformStyle="preserve-3d"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    bg="rgba(10, 16, 35, 0.6)"
                    borderRadius="2xl"
                    overflow="hidden"
                    h="full"
                  >
                    {project.coverImage ? (
                      <Box h="180px" overflow="hidden" position="relative">
                        <Image
                          src={project.coverImage}
                          alt={`${project.title} README cover`}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                        <Box
                          position="absolute"
                          inset={0}
                          bgGradient="linear(to-t, rgba(5,9,20,0.9), rgba(5,9,20,0.2))"
                        />
                      </Box>
                    ) : (
                      <Box
                        h="180px"
                        bgGradient={project.gradient}
                        opacity={0.78}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text
                          fontSize="sm"
                          color="whiteAlpha.900"
                          fontWeight="bold"
                        >
                          No README image available
                        </Text>
                      </Box>
                    )}
                    <VStack align="start" spacing={4} p={6}>
                      <Badge colorScheme="orange">{project.category}</Badge>
                      <Heading size="md">{project.title}</Heading>
                      <Text color="gray.300" fontSize="sm">
                        {project.description}
                      </Text>
                      <HStack spacing={2} wrap="wrap">
                        {project.tech.map((item) => (
                          <Badge
                            key={item}
                            borderRadius="md"
                            colorScheme="whiteAlpha"
                          >
                            {item}
                          </Badge>
                        ))}
                      </HStack>
                      <Button
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="link"
                        rightIcon={<FaExternalLinkAlt />}
                        color="orange.300"
                      >
                        View Project
                      </Button>
                    </VStack>
                  </MotionBox>
                </GridItem>
              ))}
            </Grid>
          </Container>

          <Container maxW="6xl" py={{ base: 14, md: 20 }} id="about">
            <VStack spacing={4} textAlign="center" mb={8}>
              <Text
                fontWeight="bold"
                fontSize={20}
                textTransform="uppercase"
                color="orange.400"
              >
                Get to know me
              </Text>
              <Heading color="gray.100">Who am I, What do I do?</Heading>
            </VStack>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={5}
            >
              {aboutCards.map((card) => (
                <Box
                  key={card.title}
                  boxShadow="xl"
                  rounded="xl"
                  bg="rgba(255, 255, 255, 0.05)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.1)"
                  p={7}
                >
                  <Heading size="md" pb={4} color="white">
                    {card.title}
                  </Heading>
                  <Text color="gray.300" lineHeight="tall">
                    {card.description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Container>

          <Box bg="blackAlpha.400" py={{ base: 16, md: 20 }}>
            <Container maxW="5xl">
              <Text
                textAlign="center"
                color="orange.400"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize="sm"
              >
                By The Numbers
              </Text>
              <Heading textAlign="center" mt={2} mb={8}>
                Delivering Results
              </Heading>
              <Box
                border="1px solid"
                borderColor="whiteAlpha.300"
                bg="rgba(12, 20, 43, 0.65)"
                borderRadius="xl"
                p={8}
                textAlign="center"
                maxW="sm"
                mx="auto"
              >
                <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="black">
                  2.5+
                </Text>
                <Text
                  mt={2}
                  color="gray.300"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  Years Experience
                </Text>
              </Box>
            </Container>
          </Box>

          <Container maxW="6xl" py={{ base: 16, md: 24 }}>
            <Text
              textAlign="center"
              color="orange.400"
              textTransform="uppercase"
              letterSpacing="widest"
              fontSize="sm"
            >
              Past Working Experiences
            </Text>
            <Heading textAlign="center" mt={2} mb={8}>
              Full-time and Internship Journey
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
              alignItems="start"
            >
              {[
                { title: "Full-time", items: fullTimeExperiences },
                { title: "Internship", items: internshipExperiences },
              ].map((section, sectionIdx) => (
                <MotionBox
                  key={section.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: sectionIdx * 0.08 }}
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  bg="rgba(9, 16, 35, 0.75)"
                  borderRadius="2xl"
                  p={{ base: 5, md: 6 }}
                >
                  <HStack justify="space-between" mb={4} align="center">
                    <Heading size="md" color="gray.100">
                      {section.title}
                    </Heading>
                    <Badge
                      borderRadius="full"
                      px={3}
                      py={1}
                      colorScheme="orange"
                    >
                      {section.items.length}{" "}
                      {section.items.length === 1 ? "Role" : "Roles"}
                    </Badge>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    {section.items.map((experience, idx) => (
                      <MotionBox
                        key={experience.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.28, delay: idx * 0.06 }}
                        whileHover={{ y: -4 }}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        bg="whiteAlpha.100"
                        borderRadius="xl"
                        p={4}
                        boxShadow="lg"
                      >
                        <HStack spacing={3} align="start">
                          <Flex
                            h={10}
                            w={10}
                            borderRadius="md"
                            bgGradient="linear(to-br, orange.400, pink.400)"
                            align="center"
                            justify="center"
                            fontWeight="bold"
                            color="white"
                            flexShrink={0}
                          >
                            {experience.initials}
                          </Flex>
                          <Box>
                            <Text color="gray.100" fontWeight="bold">
                              {experience.title}
                            </Text>
                            <Text
                              color="gray.400"
                              fontSize="xs"
                              textTransform="uppercase"
                              letterSpacing="wide"
                            >
                              {experience.type}
                            </Text>
                          </Box>
                        </HStack>
                        <Text
                          mt={3}
                          fontSize="sm"
                          color="gray.300"
                          lineHeight="tall"
                        >
                          {experience.detail}
                        </Text>
                      </MotionBox>
                    ))}
                  </VStack>
                </MotionBox>
              ))}
            </Grid>
          </Container>

          <Box id="contact" py={{ base: 16, md: 24 }}>
            <Container maxW="4xl" textAlign="center">
              <Text
                color="orange.300"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize="sm"
              >
                Let&apos;s Connect
              </Text>
              <Heading mt={3} mb={4}>
                Interested in my profile?
              </Heading>
              <Text color="gray.300" maxW="2xl" mx="auto">
                I&apos;m always open to discussing new opportunities, creative
                ideas, or just having a chat about technology.
              </Text>
              <HStack mt={8} spacing={4} justify="center" flexWrap="wrap">
                <Button
                  as="a"
                  href="https://linkedin.com/in/khorzhenwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="link"
                  color="orange.300"
                  rightIcon={<FaArrowRight />}
                >
                  Start a Conversation
                </Button>
                <Button
                  as="a"
                  href="https://github.com/khorzhenwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="link"
                  color="whiteAlpha.900"
                  rightIcon={<FaExternalLinkAlt />}
                >
                  Browse Projects
                </Button>
              </HStack>
            </Container>
          </Box>
        </Box>
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
