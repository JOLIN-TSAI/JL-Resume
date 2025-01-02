import { RefObject, useRef } from "react";
import Header from "@/components/header";
import InformationName from "@/components/information/informationName";
import InformationProjectsItem from "@/components/information/informationProjectsItem";
import InformationExperience from "@/components/information/informationExperience";
import InformationAddress from "@/components/information/informationAddress";
import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTimeline";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutMe";
import Project from "@/components/project";
import Games from "@/components/games";
import Sty from "@/styles/index.module.scss";

const HomePage = () => {
	const sectionRefs = [
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
	];

	const scrollToSection = (ref: RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const frontPage = `${Sty.frontPage} container`;

	const sections = [
		{
			ref: sectionRefs[0],
			components: (
				<>
					<InformationName />
					<InformationProjectsItem />
					<InformationExperience />
					<InformationAddress />
				</>
			),
		},
		{
			ref: null,
			components: <AboutMe />,
		},
		{
			ref: sectionRefs[1],
			components: <ExperienceTimeline />,
		},
		{
			ref: sectionRefs[2],
			components: <Project />,
		},
		{
			ref: sectionRefs[3],
			components: <Games />,
		},
	];

	return (
		<>
			<Header scroll={scrollToSection} sectionRefs={sectionRefs} />

			<main className={`${Sty.all} container`}>
				{sections.map((item, index) => (
					<section key={index} ref={item.ref} className={frontPage}>
						{item.components}
					</section>
				))}
			</main>

			<Footer />
		</>
	);
};

export default HomePage;
