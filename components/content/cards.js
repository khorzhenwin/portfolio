import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  Container,
  Avatar,
  useColorModeValue,
  chakra,
  Center,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      rounded={"xl"}
      boxShadow={"xl"}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "2xl",
        bg: "rgba(255, 255, 255, 0.1)",
        borderColor: "orange.400",
      }}
    >
      {children}
    </Box>
  );
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack p={8} align={"center"} pos={"relative"}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"lg"} color={"gray.100"} textAlign={"center"} >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text textAlign={"center"} color={"gray.400"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box id="experience">
      <Container maxW={"7xl"} py={8} as={Stack} spacing={12} mb={{ lg: 5 }}>
        <VStack spacing={0} alignItems={"center"}>
          <chakra.h3
            fontWeight={"bold"}
            pb={6}
            fontSize={20}
            textTransform={"uppercase"}
            color={"orange.400"}
          >
            My Internship Experiences
          </chakra.h3>
          <Heading align={"center"} color={"gray.100"}>
            What roles did I work in?
          </Heading>
          <Text align={"center"} color={"gray.200"}>
            I got to experience multiple functional and technical roles during
            my two internships
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Data Engineering</TestimonialHeading>
              <TestimonialText>
                ETL process using Python and BigQuery with Apache Airflow to
                maintain continuous and scalable data pipelines to produce clean
                and presentable data.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Backend Development</TestimonialHeading>
              <TestimonialText>
                Constructed & maintained microservices using Node.js, Express, &
                MongoDB. API schema structured using Swagger and automated API
                testing using Jest.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Frontend Development</TestimonialHeading>
              <TestimonialText>
                Multiple hackathon & pet projects using React, Next.js, Chakra
                UI, MantineUI, Tailwind and recharts. State management using
                zustand but never really gotten into tanstack query.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Quality Assurance</TestimonialHeading>
              <TestimonialText>
                Manual & automated testing of web & native mobile apps
                using Robot(Python) & Selenium/Katalon. Manual testing of
                backend services on postman.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
