import {
  Box, HStack, Link,
} from "@chakra-ui/react";
import { InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";

export default function Nav() {
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
        </HStack>
      </Box>
    </>
  );
}
