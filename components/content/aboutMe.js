import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
  Heading,
} from "@chakra-ui/react";

const testimonials = [
  {
    key: 1,
    name: "Khor Zhen Win",
    role: "Backend Engineer @ MoneyLion",
    content:
      "Data Analytics major that decided to go rogue into software engineering. Around 2 years of experience in backend. Trying to be a good programmer, not just a passionate one. People relations are important no matter how godly of an individual contributor you are.",
    avatar: "https://i.imgur.com/FpE4HAZ.jpeg",
  },
  {
    key: 2,
    name: "Current Job",
    content:
      "Backend Engineer in Moneylion for the Payments Team. Whole bunch of jargons like CQRS, Event Sourcing, Saga pattern,  Serverless Webhook Listeners, and many more. Think of it as a glorified aggregator of payment service providers. Tested till 100 TPS",
  },
];

function TestimonialCard(props) {
  const { content, avatar, name } = props;
  return (
    <Box boxShadow={"xl"} width={"full"} rounded={"md"} bg={"blackAlpha.300"}>
      <Flex
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        p={8}
        // justifyContent={"space-between"}
        position={"relative"}
      >
        <Flex
          direction={"column"}
          textAlign={{ base: "center", md: "left" }}
          // justifyContent={"space-between"}
        >
          <Text fontWeight={"medium"} fontSize={"25px"} pb={4}>
            {name}
          </Text>
          <Text
            fontWeight={"medium"}
            fontSize={"15px"}
            pb={4}
            color={"gray.200"}
          >
            {content}
          </Text>
        </Flex>
        {avatar && (
          <Avatar
            src={avatar}
            height={"100px"}
            width={"100px"}
            alignSelf={"center"}
            m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
          />
        )}
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
            spacing={"5"}
            my={2}
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
