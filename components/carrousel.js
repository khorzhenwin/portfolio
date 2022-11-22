import React from "react";
import {
  Box,
  IconButton,
  Heading,
  useBreakpointValue,
  Stack,
  Text,
  Container,
  Center,
  chakra,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Karuna HackWknd 2021: Mobile Application Category",
      subTitle: "1st Place - Team Alpacaverse",
      text: "A mobile application made with Java was proposed to tackle the event industry's inventory management issues by integrating a shopping cart model and QR scanning to optimize & increase efficiency across multiple storage locations.",
      image: "../resources/images/karuna.jpg",
    },
    {
      title: "Varsity Hackathon 2022",
      subTitle: "4th Place - Team Alpacaverse",
      text: "A GUI prototype made on Figma aimed to simplify and shorten the donation process for Malaysians in need. Creating a seamless ecosystem that involves multiple user groups is able to garner a larger userbase. The proposition to implement a thrifting e-commerce model into the donation model, would promote self-sustainability.",
      image: "../resources/images/varsity.jpg",
      reference:
        "https://www.figma.com/file/1SaAe6Lzs7QGXXAg4UwkGl/AlapacaHelp?node-id=0%3A1",
    },
    {
      title: "RHB Get Your Hack On: Data Edition 2022",
      subTitle: "Top 15 Finalists - Team Alpacaverse",
      text: "Created a single page interactive dashboard with chart.js, php, and mysql that tracks inbound and outbound transactions with visualizations to inform & notify users on a predicted amount to spend and save for the current month. Data models in the backend was then proposed to study the trends and implement a personalized recommendations such as investment opportunities, grocery vouchers, and family insurance.",
      image: "",
    },
  ];

  return (
    <>
      <Center>
        <chakra.h3
          mt={10}
          mb={5}
          fontWeight={"bold"}
          fontSize={20}
          textTransform={"uppercase"}
          color={"orange.400"}
          id="achievements"
        >
          Hackathons & Competitions
        </chakra.h3>
      </Center>
      <Box
        position={"relative"}
        height={"500px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"4xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              // backgroundImage={`url(${card.image})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={5}
                  w={"full"}
                  maxW={"lg"}
                  position="relative"
                  top="40%"
                  transform="translate(0, -50%)"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    align={"center"}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    fontWeight="bold"
                  >
                    {card.subTitle}
                  </Text>
                  <Box w={"80%"}>
                    <Text fontSize={{ base: "sm", lg: "md" }} align={"center"}>
                      {card.text}
                    </Text>
                  </Box>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
