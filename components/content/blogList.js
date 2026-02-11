import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  chakra,
  Flex,
  Badge,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

const sections = [
  {
    title: "Learning",
    posts: [
      {
        avatar: "https://i.imgur.com/p1c9rvg.jpeg",
        headline: "Baited into buying a home server",
        subheadline:
          "Journey of setting up a home server because cloud is expensive",
        badge: "June 2025",
        redirectPath: "/blog/learning-01",
        badgeColour: "orange",
      },
      {
        avatar: "https://i.imgur.com/YwWrqoz.png",
        headline: "Learning Golang",
        subheadline: "Vibe coding my way to a new language",
        badge: "July 2025",
        redirectPath: "/blog/learning-02",
        badgeColour: "purple",
      },
      {
        avatar: "https://i.imgur.com/AN4s2tC.jpeg",
        headline: "Learning Domain-Driven Design",
        subheadline: "Reading this heavily opinionated book",
        badge: "February 2026",
        redirectPath: "/blog/learning-03",
        badgeColour: "teal",
      },
    ],
  },
  {
    title: "Social",
    posts: [
      {
        avatar: "https://i.imgur.com/ZWw76i0.png",
        headline: "Losing Weight",
        subheadline: "-36kg in 6 months",
        badge: "July 2025",
        redirectPath: "/blog/social-01",
        badgeColour: "purple",
      },
      {
        avatar: "https://i.imgur.com/gTCslTN.jpeg",
        headline: "My First Job",
        subheadline: "Experience since a fresh graduate",
        badge: "February 2026",
        redirectPath: "/blog/social-02",
        badgeColour: "teal",
      },
    ],
  },
];

function Card(props) {
  const { avatar, headline, subheadline, badge, redirectPath, badgeColour } =
    props;
  return (
    <>
      <Link href={redirectPath} _hover={{ textDecoration: "none" }}>
        <Box
          py={4}
          px={4}
          rounded="xl"
          transition="all 0.3s ease"
          _hover={{
            bg: "rgba(255, 255, 255, 0.1)",
            transform: "translateY(-2px)",
            boxShadow: "lg",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
          border="1px solid transparent"
        >
          <Flex align="center">
            <Avatar
              src={avatar}
              size="lg"
              border="2px solid"
              borderColor="orange.400"
            />
            <Box ml="4">
              <Text fontWeight="bold" fontSize="lg" color="white">
                {headline}
                {badge && (
                  <Badge
                    ml="2"
                    colorScheme={badgeColour}
                    variant="solid"
                    rounded="full"
                    px={2}
                  >
                    {badge}
                  </Badge>
                )}
              </Text>
              <Text fontSize="sm" color="gray.300" mt={1}>
                {subheadline}
              </Text>
            </Box>
            <ChevronRightIcon boxSize={8} color={"orange.400"} ml="auto" />
          </Flex>
        </Box>
      </Link>
    </>
  );
}

function Section(props) {
  const { title, posts } = props;
  return (
    <Box py={4} pb={6}>
      <chakra.h3
        fontWeight={"bold"}
        fontSize={15}
        textTransform={"uppercase"}
        color={"gray.400"}
        pb={2}
      >
        {title}
      </chakra.h3>
      {posts.length != 0 &&
        posts.map((post, index, key) => (
          <Card {...post} index={index} key={index} />
        ))}
    </Box>
  );
}

export default function BlogList() {
  return (
    <>
      <Box my={{ base: 20, md: 30, lg: 30, xl: 35 }} mx={{ base: 7, md: 0 }}>
        <Flex direction={"column"} width={"full"}>
          <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
            <chakra.h2
              textAlign={{ base: "center", md: "left" }}
              fontWeight={"bold"}
              fontSize={22}
              textTransform={"uppercase"}
              color={"orange.400"}
              pb={6}
            >
              Stories About Myself
            </chakra.h2>
            {sections.map((section, index, key) => (
              <Section {...section} index={index} key={index} />
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
