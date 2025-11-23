import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"div"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
      <Box
        bg="rgba(0, 0, 0, 0.3)"
        backdropFilter="blur(10px)"
        borderTop="1px solid rgba(255, 255, 255, 0.1)"
        color={"gray.200"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={8}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text textAlign={{ base: "center" }}>
            © {new Date().getFullYear()} Khor Zhen Win. Built with Next.js & Chakra UI.
          </Text>
        <Stack direction={"row"} spacing={6}>
          <Link href={"https://github.com/khorzhenwin"} isExternal>
            <SocialButton label={"GitHub"}>
              <FaGithub />
            </SocialButton>
          </Link>
          <Link href={"https://linkedin.com/in/khorzhenwin"} isExternal>
            <SocialButton label={"LinkedIn"}>
              <FaLinkedin />
            </SocialButton>
          </Link>
          <SocialButton
            label={"Email"}
            href={"mailto:khorzhenwin@gmail.com"}
            isExternal
          >
            <FaEnvelope />
          </SocialButton>
        </Stack>
        </Container>
      </Box>
  );
}
