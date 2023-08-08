import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const testimonials = [
  {
    key: 1,
    name: "Khor Zhen Win",
    role: "Final Year CS Student",
    content:
      "More of a technical person who enjoys logical thinking but is also able to see things from a functional perspective. Learning to be a good programmer, not just a passionate one.",
    avatar: "https://i.imgur.com/n1H5luJ.jpg",
  },
];

function TestimonialCard(props) {
  const { content, avatar } = props;
  return (
    <Box boxShadow={"xl"} width={"full"} rounded={"xl"} bg={"blackAlpha.300"}>
      <Flex
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        p={10}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Flex
          direction={"column"}
          textAlign={{ base: "center", md: "justify" }}
          justifyContent={"space-between"}
        >
          <Text
            fontWeight={"medium"}
            fontSize={"15px"}
            pb={4}
            color={"gray.200"}
          >
            A final year student @ APU Malaysia studying Computer Science (Data
            Analytics). {content}
          </Text>
        </Flex>
        <Avatar
          src={avatar}
          height={"100px"}
          width={"100px"}
          alignSelf={"center"}
          m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        />
      </Flex>
    </Box>
  );
}

export default function AboutMe() {
  return (
    <>
      <Box m={{ base: 5 }}>
        <Flex
          textAlign={"center"}
          justifyContent={"center"}
          direction={"column"}
          width={"full"}
        >
          <Box
            width={{ base: "full", sm: "lg", lg: "xl" }}
            margin={"auto"}
            id="aboutMe"
          >
            <chakra.h3
              fontWeight={"bold"}
              fontSize={20}
              textTransform={"uppercase"}
              color={"orange.400"}
            >
              Get to know me
            </chakra.h3>
            <chakra.h1
              py={5}
              fontSize={48}
              fontWeight={"bold"}
              color={"gray.100"}
            >
              Who am I, What do I do?
            </chakra.h1>
          </Box>
          <SimpleGrid
            columns={{ base: 1, xl: 1 }}
            spacing={"20"}
            my={8}
            mx={"auto"}
          >
            {testimonials.map((cardInfo, index, key) => (
              <TestimonialCard {...cardInfo} index={index} key={key} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
}
