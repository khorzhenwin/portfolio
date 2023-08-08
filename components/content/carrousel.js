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
      index: 0,
      key: 0,
      title: "Karuna HackWknd 2021: Mobile Application Category",
      subTitle: "Champion - Team Alpacaverse",
      text: "A mobile application made with Java was proposed to tackle the event industry's inventory management issues by integrating a shopping cart model and QR scanning to optimize & increase efficiency across multiple storage locations.",
      image: "",
    },
    {
      index: 1,
      key: 1,
      title: "Varsity Hackathon 2022",
      subTitle: "4th Place - Team Alpacaverse",
      text: "A GUI prototype made on Figma aimed to simplify and shorten the donation process for Malaysians in need. Creating a seamless ecosystem that involves multiple user groups is able to garner a larger userbase. The proposition to implement a thrifting e-commerce model into the donation model, would promote self-sustainability.",
      image: "",
      reference:
        "https://www.figma.com/file/1SaAe6Lzs7QGXXAg4UwkGl/AlapacaHelp?node-id=0%3A1",
    },
    {
      index: 2,
      key: 2,
      title: "RHB Get Your Hack On: Data Edition 2022",
      subTitle: "Top 15 Finalists - Team Alpacaverse",
      text: "Created a single page interactive dashboard with chart.js, php, and mysql that tracks inbound and outbound transactions with visualizations to inform & notify users on a predicted amount to spend and save for the current month. Data models in the backend was then proposed to study the trends and implement a personalized recommendations such as investment opportunities, grocery vouchers, and family insurance.",
      image: "",
    },
    {
      index: 3,
      key: 3,
      title: "UM Hackathon 2023",
      subTitle: "Champion - Team Alpacaverse",
      text: "Proposing AlpacaCare which is an AI-powered health monitoring application designed to alleviate the pain points of expectant mothers. By providing predictions on the health of both mother and fetus, the platform delivers personalized knowledge resources and service recommendations to support mothers throughout their pregnancy journey. The platform also offers ready-to-eat meals and health supplements, as well as access to online specialist consultants to address each mother's unique needs.",
      image: "",
    },
    {
      index: 4,
      key: 4,
      title: "StandardChartered ImpactHack 2023",
      subTitle: "Champion - Team DoBetter",
      text: "BizFlow is a centralised data intelligence solution that empowers businesses to harness and leverage their data with seamless integration, actionable insights and AI-driven automation.",
      image: "",
    },
    {
      index: 5,
      key: 5,
      title: "Hacktitude Malaysia 2023",
      subTitle: "Champion - Team JohnPizza",
      text: " Implementing backend functionalities in an Express.js server, ranging from implementing complex SQL queries, to building backend services which was verified through automated testing on Jest",
      image: "",
    },
  ];

  return (
    <>
      <Center>
        <chakra.h3
          mt={{ base: 8, lg: 12 }}
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
        height={"520px"}
        width={"full"}
        overflow={"hidden"}
      >
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
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, key, index) => (
            <Box
              key={key + index}
              height={"4xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            >
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
                    color={"gray.100"}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    bgGradient="linear(to-r, orange.500, orange.300)"
                    bgClip="text"
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    fontWeight="bold"
                  >
                    {card.subTitle}
                  </Text>
                  <Box w={"80%"}>
                    <Text
                      fontSize={{ base: "sm", lg: "md" }}
                      align={"center"}
                      color={"gray.300"}
                    >
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
