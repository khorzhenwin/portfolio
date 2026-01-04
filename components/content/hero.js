import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

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
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
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
        pt={{ base: 20, md: 32 }}
      >
        <Stack spacing={2}>
          <Heading
            fontWeight={700}
            fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
            lineHeight={"110%"}
            color={"white"}
          >
            Hello, I&apos;m <br />
            <Text as={"span"} color={"orange.400"}>
              Khor Zhen Win
            </Text>
          </Heading>
          <Text color={"gray.300"} maxW={"3xl"} fontSize="xl" px={4}>
            A backend developer building scalable systems w/ Java (domain in fintech) .  Have some other skills like Next.js, React, & Node.js.
          </Text>
        </Stack>

        <Stack spacing={4} direction={{ base: "column", md: "row" }}>
          <Button
            rounded={"full"}
            px={8}
            size="lg"
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
            onClick={() => setDocumentId("achievements")}
          >
            View Projects
          </Button>
          <Button
            rounded={"full"}
            px={8}
            size="lg"
            variant="outline"
            colorScheme="whiteAlpha"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
            rightIcon={<Icon as={FaDownload} />}
            onClick={handleDonwload}
          >
            Download CV
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
