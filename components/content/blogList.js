import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Badge,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

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
      {
        avatar: "https://i.imgur.com/yyCNJbS.png",
        headline: "Learning Concurrency in Go",
        subheadline:
          "Interim thoughts on Go concurrency from a Java background",
        badge: "March 2026",
        redirectPath: "/blog/learning-04",
        badgeColour: "yellow",
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
        avatar: "https://i.imgur.com/1sr0qCZ.png",
        headline: "Taiwan Trip",
        subheadline: "Travelling with friends",
        badge: "October 2025",
        redirectPath: "/blog/social-02",
        badgeColour: "blue",
      },
      {
        avatar: "https://i.imgur.com/gTCslTN.jpeg",
        headline: "My First Job",
        subheadline: "Experience since a fresh graduate",
        badge: "February 2026",
        redirectPath: "/blog/social-03",
        badgeColour: "teal",
      },
    ],
  },
];

function StoryCard(props) {
  const { avatar, headline, subheadline, badge, redirectPath, badgeColour } =
    props;
  const cardRef = useRef(null);

  const updatePointer = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    card.style.setProperty("--story-x", `${x}%`);
    card.style.setProperty("--story-y", `${y}%`);
  };

  return (
    <Link
      href={redirectPath}
      className="story-card"
      ref={cardRef}
      onPointerMove={updatePointer}
      _hover={{ textDecoration: "none" }}
    >
      <Box className="story-card-glow" />
      <Flex align="center" gap={4} position="relative" zIndex={1}>
        <Avatar src={avatar} size="lg" className="story-card-avatar" />
        <Box flex="1" minW={0}>
          <Flex align="center" gap={2} wrap="wrap">
            <Heading as="h3" size="sm" color="white">
              {headline}
            </Heading>
            {badge && (
              <Badge className="story-card-date" colorScheme={badgeColour}>
                {badge}
              </Badge>
            )}
          </Flex>
          <Text fontSize="sm" color="gray.300" mt={2} noOfLines={2}>
            {subheadline}
          </Text>
        </Box>
        <ChevronRightIcon className="story-card-arrow" boxSize={6} />
      </Flex>
      <Text className="story-card-route">OPEN STORY / {redirectPath.replace("/blog/", "")}</Text>
    </Link>
  );
}

function Section(props) {
  const { title, posts } = props;
  return (
    <Box className="story-group">
      <Flex className="story-group-heading" align="center" justify="space-between">
        <Text>{title}</Text>
        <Text>{String(posts.length).padStart(2, "0")} ENTRIES</Text>
      </Flex>
      {posts.length !== 0 && posts.map((post) => <StoryCard {...post} key={post.redirectPath} />)}
    </Box>
  );
}

export default function BlogList() {
  return (
    <>
      <Box className="stories-shell">
        <Flex className="stories-hero" direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "end" }} gap={6}>
          <VStack align="start" spacing={3}>
            <Text className="stories-kicker">Personal archive / 07</Text>
            <Heading color="white" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="0.95">
              Field notes
            </Heading>
          </VStack>
          <Text className="stories-intro">
            Technical detours, unfinished thoughts, and the human systems behind the work.
          </Text>
        </Flex>
        <Box className="stories-index">
          {sections.map((section) => <Section {...section} key={section.title} />)}
        </Box>
      </Box>
    </>
  );
}
