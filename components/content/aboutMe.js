import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid, Text, Button, HStack
} from "@chakra-ui/react";

const testimonials = [
  {
    key: 1,
    name: "Khor Zhen Win",
    role: "Backend Engineer @ MoneyLion",
    content:
      "Data Analytics major that decided to go rogue into software engineering. Around 2 years of experience in backend. Trying to be a good programmer, not just a passionate one. People relations are important no matter how godly of an individual contributor you are.",
    avatar: "https://i.imgur.com/FpE4HAZ.jpeg",
    redirectPath: "/blog",
  },
  {
    key: 2,
    name: "Current Job",
    content:
      "Backend Engineer in Moneylion for the Payments Team. Whole bunch of jargons like CQRS, Event Sourcing, Saga pattern,  Serverless Webhook Listeners, and many more. Think of it as a glorified aggregator of payment service providers. Tested till 100 TPS",
  },
];

function TestimonialCard(props) {
  const router = useRouter()
  const { content, avatar, name, redirectPath } = props;
  return (
    <Box
      boxShadow={"xl"}
      width={"full"}
      rounded={"xl"}
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "2xl",
        bg: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Flex
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        p={8}
        position={"relative"}
      >
        <Flex
          direction={"column"}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontWeight={"bold"} fontSize={"2xl"} pb={4} color="white">
            {name}
          </Text>
          <Text
            fontWeight={"medium"}
            fontSize={"md"}
            pb={4}
            color={"gray.300"}
            lineHeight="tall"
          >
            {content}
          </Text>
          {redirectPath && (
            <Button
              variant="link"
              onClick={() => {
                router.push(redirectPath);
              }}
              _hover={{ textDecoration: "none" }}
            >
              <HStack spacing={2}>
                <Text fontWeight={"bold"} color={"orange.400"}>
                  Read More
                </Text>
                <ChevronRightIcon boxSize={5} color={"orange.400"} />
              </HStack>
            </Button>
          )}
        </Flex>
        {avatar && (
          <Avatar
            src={avatar}
            height={"100px"}
            width={"100px"}
            alignSelf={"center"}
            m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
            border="2px solid"
            borderColor="orange.400"
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
