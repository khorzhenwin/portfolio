import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	VStack,
	Container,
	Avatar,
	useColorModeValue,
	chakra,
	Center,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
	return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.700")}
			boxShadow={"lg"}
			p={8}
			rounded={"xl"}
			align={"center"}
			pos={"relative"}
		>
			{children}
		</Stack>
	);
};

const TestimonialHeading = ({ children }) => {
	return (
		<Heading as={"h3"} fontSize={"xl"}>
			{children}
		</Heading>
	);
};

const TestimonialText = ({ children }) => {
	return (
		<Text
			textAlign={"center"}
			color={useColorModeValue("gray.600", "gray.400")}
			fontSize={"sm"}
		>
			{children}
		</Text>
	);
};

const TestimonialAvatar = ({ src, name, title }) => {
	return (
		<Flex align={"center"} mt={8} direction={"column"}>
			<Avatar src={src} alt={name} mb={2} />
			<Stack spacing={-1} align={"center"}>
				<Text fontWeight={600}>{name}</Text>
				<Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
					{title}
				</Text>
			</Stack>
		</Flex>
	);
};

export default function WithSpeechBubbles() {
	return (
		<Box
			id="experience"
			// bg={useColorModeValue("gray.100", "gray.700")}
		>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={12} mb={10}>
				<VStack spacing={0} alignItems={"center"}>
					<chakra.h3
						fontWeight={"bold"}
						pb={6}
						fontSize={20}
						textTransform={"uppercase"}
						color={"orange.400"}
					>
						My Experience
					</chakra.h3>
					<Heading align={"center"}>What roles am I familiar with?</Heading>
					<Text align={"center"}>
						I got to experience multiple functional and technical roles during
						my two internships
					</Text>
				</VStack>
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 10, md: 4, lg: 10 }}
				>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Data Engineering</TestimonialHeading>
							<TestimonialText>
								ETL process using Python and BigQuery with Apache Airflow to
								maintain continuous and scalable data pipelines to produce clean
								and presentable data.
							</TestimonialText>
						</TestimonialContent>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Backend Development</TestimonialHeading>
							<TestimonialText>
								Constructed & maintained microservices using Node.js, Express, &
								MongoDB. API schema structured using Swagger and automated API
								testing using Jest.
							</TestimonialText>
						</TestimonialContent>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Quality Assurance</TestimonialHeading>
							<TestimonialText>
								Conducted Manual testing of web and native mobile applications.
								Explored front-end automated testing using Robot & Selenium.
							</TestimonialText>
						</TestimonialContent>
					</Testimonial>
				</Stack>
			</Container>
		</Box>
	);
}
