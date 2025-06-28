import { ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, chakra, Flex, Badge, Text, Link } from "@chakra-ui/react";

const sections = [
  {
    title: "Personal Projects",
    posts: [
      {
        avatar: "https://i.imgur.com/p1c9rvg.jpeg",
        headline: "Baited into buying a home server",
        subheadline:
          "Journey of setting up a home server because cloud is expensive",
        badge: "June 2025",
        redirectPath: "/blog/personal-01",
      },
    ],
  },
  {
    title: "Work 💻",
    posts: [],
  },
  {
    title: "Social",
    posts: [],
  },
];

function Card(props) {
  const { avatar, headline, subheadline, badge, redirectPath } = props;
  return (
    <>
      <Link href={redirectPath} _hover={{ textDecoration: "none" }}>
        <Flex>
          <Avatar src={avatar} />
          <Box ml="3">
            <Text fontWeight="bold">
              {headline}
              {badge && (
                <Badge ml="1" colorScheme="orange">
                  {badge}
                </Badge>
              )}
            </Text>
            <Text fontSize="sm">{subheadline}</Text>
          </Box>
          <ChevronRightIcon
            boxSize={12}
            color={"orange.400"}
            ml="auto"
            cursor="pointer"
          />
        </Flex>
      </Link>
    </>
  );
}

function Section(props) {
  const { title, posts } = props;
  return (
    <Box py={4} pb={12}>
      <chakra.h3
        fontWeight={"bold"}
        fontSize={15}
        textTransform={"uppercase"}
        color={"gray.400"}
        pb={6}
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
