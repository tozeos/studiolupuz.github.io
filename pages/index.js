import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Team from "../components/Team";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Lupuz Studio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<About />
			<Team />
		</div>
	);
}
