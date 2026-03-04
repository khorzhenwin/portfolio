import {
  Box, HStack, Link,
} from "@chakra-ui/react";
import { InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const navItems = [
  { label: "Projects", anchor: "projects" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

export default function Nav() {
  const router = useRouter();
  const onHome = router.pathname === "/";

  return (
    <>
      <Box
        px={4}
        position="sticky"
        top={0}
        zIndex={100}
        bg="rgba(0, 0, 0, 0.3)"
        backdropFilter="blur(10px)"
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
        py={4}
      >
        <HStack spacing={4} justify="space-between">
          <HStack spacing={4}>
            <Link href="/">
              <StarIcon h={6} w={6} color="white" />
            </Link>
            <Link href="/blog">
              <InfoOutlineIcon h={6} w={6} color="white" />
            </Link>
          </HStack>
          <HStack spacing={5}>
            {navItems.map((item) => (
              <Link
                key={item.anchor}
                href={onHome ? `#${item.anchor}` : `/#${item.anchor}`}
                fontSize="sm"
                color="whiteAlpha.900"
                _hover={{ color: "white", textDecoration: "underline" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
