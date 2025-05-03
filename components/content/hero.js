import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Link,
  LinkOverlay,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import Illustration from "../illustrations/hero";

export default function Hero() {
  const [documentId, setDocumentId] = useState(null);
  const scrollRef = useRef(null);

  const handleDonwload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (documentId) {
      scrollRef.current = document.getElementById(documentId);
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
      setDocumentId(null);
    }
  }, [documentId]);

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pb={{ base: 20, md: 28 }}
        pt={{ base: 10, md: 20 }}
      >
        <Stack v={2}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"white"}
          >
            Can{" "}
            <Text as={"span"} color={"orange.400"}>
              You
            </Text>{" "}
            Tell Me About{" "}
            <Text as={"span"} color={"orange.400"}>
              Yourself?
            </Text>
          </Heading>
          <Text fontWeight={600} color={"gray.200"}>
            No thanks bro, so take a look at this page.
          </Text>
        </Stack>
        <Stack v={2}>
          <Text color={"gray.200"} maxW={"3xl"}>
            Basically what you can do in canva in an hour but I decided to code
            it instead. Simple portfolio made purely copy pasta from{" "}
            <Link href="https://chakra-templates.dev" isExternal>
              Chakra Templates.{" "}
            </Link>
            This site was made using Next.js and Chakra UI.
          </Text>
          <Text color={"gray.200"} maxW={"3xl"}>
            Connect with me on{" "}
            <Link href="https://linkedin.com/in/khorzhenwin">LinkedIn</Link>
          </Text>
        </Stack>
        <Button
          color="white"
          rounded={"md"}
          px={6}
          bg={"blue.400"}
          _hover={{ bg: "blue.500" }}
          rightIcon={<Icon as={FaDownload} />}
          onClick={handleDonwload}
        >
          Download CV
        </Button>
        <Box color="gray.500" direction={"column"}>
          <Stack spacing={2} direction={"row"} pb={2}>
            <Button
              rounded={"md"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              <LinkOverlay onClick={() => setDocumentId("aboutMe")}>
                About Me
              </LinkOverlay>
            </Button>
            <Button
              rounded={"md"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              <LinkOverlay onClick={() => setDocumentId("experience")}>
                Experiences
              </LinkOverlay>
            </Button>
          </Stack>
          {/* LEAVE THE STACK, ITS EASIER TO RENDER MOBILE */}
          <Stack spacing={2} pb={2}>
            <Button
              rounded={"md"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              <LinkOverlay onClick={() => setDocumentId("achievements")}>
                Achievements
              </LinkOverlay>
            </Button>
          </Stack>
        </Box>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
