import { RefObject, useRef } from "react";
import Header from "@/components/header";
import InformationName from "@/components/information/informationName";
import InformationProjectsItem from "@/components/information/informationProjectsItem";
import InformationExperience from "@/components/information/informationExperience";
import InformationAddress from "@/components/information/informationAddress";
import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTimeline";
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

	return (
		<>
			<Header scroll={scrollToSection} sectionRefs={sectionRefs} />
			<div className={`${Sty.all} container`}>
				<section
					className={`${Sty.frontPage} container`}
					ref={sectionRefs[0]}>
					<InformationName />
					<InformationProjectsItem />
					<InformationExperience />
					<InformationAddress />
				</section>
				<hr />
				<section ref={sectionRefs[1]}>
					<ExperienceTimeline />
				</section>

				<hr />
				<section ref={sectionRefs[2]}>
					<Project />
				</section>

				<hr />
				<section ref={sectionRefs[3]}>
					<Games />
				</section>
			</div>
		</>
	);
};

export default HomePage;
