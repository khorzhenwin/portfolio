import { ArrowBackIcon, CalendarIcon } from "@chakra-ui/icons";
import { Box, chakra, Flex, Link, Text } from "@chakra-ui/react";

export default function ArticleLayout({ title, date, content }) {
  return (
    <>
      <Box className="article-shell">
        <Link href="/blog" className="article-backlink">
          <ArrowBackIcon /> Back to field notes
        </Link>
        <Flex className="article-heading" direction={{ base: "column", md: "row" }} justify="space-between" gap={8}>
          <Box>
            <Text className="article-kicker">Archive entry / transmission</Text>
            <chakra.h1>{title}</chakra.h1>
          </Box>
          <Text className="article-date">
            <CalendarIcon /> {date}
          </Text>
        </Flex>
        <Box className="article-body">
          {content}
        </Box>
      </Box>
    </>
  );
}
