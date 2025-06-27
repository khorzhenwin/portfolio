import {
  Box, HStack, Link,
} from "@chakra-ui/react";
import { InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";

export default function Nav() {
  return (
    <>
      <Box px={4}>
        <HStack spacing={4}>
          <Link href="/">
            <StarIcon h={14} />
          </Link>
          <Link href="/blog">
            <InfoOutlineIcon h={14} />
          </Link>
        </HStack>
      </Box>
    </>
  );
}
