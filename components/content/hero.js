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
    link.href = "/KhorZhenWin_CV.pdf";
    link.download = "KhorZhenWin_CV.pdf";
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
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={"white"}
        >
          An{" "}
          <Text as={"span"} color={"orange.400"}>
            Introduction!
          </Text>
        </Heading>
        <Text color={"gray.200"} maxW={"3xl"}>
          A simple and presentable portfolio made purely from open source
          templates from{" "}
          <Link href="https://chakra-templates.dev" isExternal>
            Chakra Templates.{" "}
          </Link>
          This site was made using Next.js and Chakra UI. Connect with me on{" "}
          <Link href="https://linkedin.com/in/khorzhenwin">LinkedIn</Link>
        </Text>
        <Button
          color="white"
          rounded={"full"}
          px={6}
          bg={"blue.400"}
          _hover={{ bg: "blue.500" }}
          rightIcon={<Icon as={FaDownload} />}
          onClick={handleDonwload}
        >
          Download CV
        </Button>
        <Box color="gray.500" direction={"column"}>
          <Stack spacing={6} direction={"row"} pb={4}>
            <Button
              rounded={"full"}
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
              rounded={"full"}
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
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            <LinkOverlay onClick={() => setDocumentId("achievements")}>
              Achievements
            </LinkOverlay>
          </Button>
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
