import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Team from "../components/Team";
import CalendarArt from "../components/CalendarArt";
import Footer from "../components/Footer";
import {websiteName} from "../components/variables";

export default function Home() {
	return (
		<div>
			<Head>
				<title>{websiteName}</title>
				<meta name="description" content="Poggers" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header />
			<About />
			<CalendarArt />
			<Team />
			<Footer />
		</div>
	);
}
