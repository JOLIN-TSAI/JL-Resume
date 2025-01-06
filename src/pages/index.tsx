import { RefObject, useRef } from "react";
import Header from "@/components/header";
import InformationName from "@/components/information/informationName";
import InformationProjectsItem from "@/components/information/informationProjectsItem";
import InformationExperience from "@/components/information/informationExperience";
import InformationAddress from "@/components/information/informationAddress";
import InformationFrontSkill from "@/components/information/informationSkills/informationFrontSkill";
import InformationBackSkill from "@/components/information/informationSkills/informationBackSkill";
import WelcomeSpaceship from "@/components/WelcomeSpaceship";
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
		useRef<HTMLElement>(null),
	];

	const scrollToSection = (ref: RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const frontPage = `${Sty.frontPage}`;

	const sections = [
		{
			ref: sectionRefs[0],
			components: (
				<>
					<div
						className={`${Sty.frontPage} p-0 position-relative container`}>
						<InformationName />
						<InformationProjectsItem />
						<InformationExperience />
						<InformationAddress />
						<InformationFrontSkill />
						<InformationBackSkill />
					</div>
					<img
						src="/blob.gif"
						alt="backgroundImage"
						className={`${Sty.blobImage} position-absolute`}
					/>
				</>
			),
		},
		{
			ref: sectionRefs[1],
			components: <AboutMe />,
		},
		{
			ref: sectionRefs[2],
			components: <ExperienceTimeline />,
		},
		{
			ref: sectionRefs[3],
			components: (
				<div className="container" style={{ paddingTop: "50px" }}>
					<Project />
				</div>
			),
		},
		{
			ref: sectionRefs[4],
			components: <Games />,
		},
	];

	return (
		<>
			<WelcomeSpaceship />
			<Header scroll={scrollToSection} sectionRefs={sectionRefs} />

			<main className={`${Sty.all}`}>
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
