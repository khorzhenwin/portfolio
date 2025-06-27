import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

const sections = [
  {
    title: "Personal Projects",
    redirectPath: "/blog/post-1",
  },
  {
    title: "Work 💻",
    redirectPath: "/blog/post-2",
  },
  {
    title: "Social",
    redirectPath: "/blog/post-3",
  },
];

function Section(props) {
  const { title, description, redirectPath } = props;
  return (
    <Box py={4}>
      <chakra.h3
        fontWeight={"bold"}
        fontSize={15}
        textTransform={"uppercase"}
        color={"gray.400"}
        pb={6}
      >
        {title}
      </chakra.h3>
    </Box>
  );
}

export default function BlogList() {
  const router = useRouter();
  return (
    <>
      <Box
        my={{ base: 20, md: 30, lg: 30, xl: 35 }}
        mx={{ base: 7, md: 0 }}
      >
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
