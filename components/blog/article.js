import { CalendarIcon } from "@chakra-ui/icons";
import { Box, chakra, Flex, Text } from "@chakra-ui/react";

export default function ArticleLayout({ title, date, content }) {
  return (
    <>
      <Box my={{ base: 10, md: 20, lg: 30, xl: 35 }} mx={{ base: 7, md: 0 }}>
        <Flex direction={"column"} width={"full"}>
          <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
            <chakra.h2
              textAlign={{ base: "center", md: "left" }}
              fontSize={22}
              fontWeight="semibold"
              color={"orange.400"}
            >
              {title}
            </chakra.h2>
            <Text
              fontWeight={500}
              color={"gray.200"}
              pt={2}
              textAlign={{ base: "center", md: "left" }}
            >
              <CalendarIcon /> {date}
            </Text>
          </Box>
          <Box
            width={{ base: "full", sm: "lg", lg: "xl" }}
            margin={"auto"}
            mt={8}
          >
            {content}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
