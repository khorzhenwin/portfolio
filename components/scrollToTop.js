import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { IconButton } from "@chakra-ui/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <IconButton
          size={"sm"}
          icon={<HiArrowUp />}
          colorScheme={"orange"}
          bg={"orange.400"}
          variant="solid"
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right={["16px", "30px"]}
        />
      )}
    </>
  );
}
