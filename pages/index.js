import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Achievements from "../components/carrousel";
import Experience from "../components/cards";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Khor Zhen Win | Portfolio</title>
				<meta
					name="description"
					content="A simple portfolio made when I had some spare time during my last few days of internship."
					key="desc"
				/>
				<meta
					property="og:title"
					content="Khor Zhen Win | Portfolio But Not Really"
				/>
				<meta
					property="og:description"
					content="Built with Next.js and Chakra UI"
				/>
				<meta property="og:image" content="https://i.imgur.com/n1H5luJ.jpg" />
				<link
					rel="shortcut icon"
					href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
				/>
			</Head>
			<Header />
			<Hero />
			<AboutMe />
			<Experience />
			<Achievements />
			<Footer />
			<ScrollToTop />
		</>
	);
}
