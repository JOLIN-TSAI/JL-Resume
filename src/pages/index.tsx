import { Suspense, lazy, useRef } from "react";
import Header from "@/components/header";
import WelcomeSpaceship from "@/components/WelcomeSpaceship";
import Footer from "@/components/footer";
import Sty from "@/styles/index.module.scss";

// 懶加載各個組件
const InformationName = lazy(
	() => import("@/components/information/informationName")
);
const InformationProjectsItem = lazy(
	() => import("@/components/information/informationProjectsItem")
);
const InformationExperience = lazy(
	() => import("@/components/information/informationExperience")
);
const InformationAddress = lazy(
	() => import("@/components/information/informationAddress")
);
const InformationFrontSkill = lazy(
	() =>
		import(
			"@/components/information/informationSkills/informationFrontSkill"
		)
);
const InformationBackSkill = lazy(
	() =>
		import(
			"@/components/information/informationSkills/informationBackSkill"
		)
);
const AboutMe = lazy(() => import("@/components/aboutMe"));
const ExperienceTimeline = lazy(
	() => import("@/components/ExperienceTimeline/ExperienceTimeline")
);
const Project = lazy(() => import("@/components/project"));
const Games = lazy(() => import("@/components/games"));

const HomePage = () => {
	const sectionRefs = [
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
		useRef<HTMLElement>(null),
	];

	const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const frontPage = `${Sty.frontPage}`;

	const sections = [
		{
			ref: sectionRefs[0],
			components: (
				<Suspense fallback={<div>Loading Information...</div>}>
					<div className={`${Sty.frontPage} p-0 container`}>
						<InformationName />
						<InformationProjectsItem
							scroll={scrollToSection}
							sectionRefs={sectionRefs}
						/>
						<InformationExperience />
						<InformationAddress />
						<InformationFrontSkill />
						<InformationBackSkill />
					</div>
				</Suspense>
			),
		},
		{
			ref: sectionRefs[1],
			components: (
				<Suspense fallback={<div>Loading About Me...</div>}>
					<AboutMe />
				</Suspense>
			),
		},
		{
			ref: sectionRefs[2],
			components: (
				<Suspense fallback={<div>Loading Experience Timeline...</div>}>
					<ExperienceTimeline />
				</Suspense>
			),
		},
		{
			ref: sectionRefs[3],
			components: (
				<Suspense fallback={<div>Loading Project...</div>}>
					<div
						className="container-fluid"
						style={{ position: "relative", paddingTop: "50px" }}>
						<Project />
						<img
							src="/project/sweetyTime/bg.png"
							alt="backgroundImage"
							className={`${Sty.backgroundImage} d-none d-md-block`}
							style={{ position: "absolute" }}
						/>
					</div>
				</Suspense>
			),
		},
		{
			ref: sectionRefs[4],
			components: (
				<Suspense fallback={<div>Loading Games...</div>}>
					<div
						className="container-fluid"
						style={{ padding: "50px 0 0 0" }}>
						<Games />
					</div>
				</Suspense>
			),
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
