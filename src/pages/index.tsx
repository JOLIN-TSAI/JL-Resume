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
	return (
		<>
			<Header />
			<div className={`${Sty.all} container`}>
				<div className={`${Sty.frontPage} container`}>
					<InformationName />
					<InformationProjectsItem />
					<InformationExperience />
					<InformationAddress />
				</div>
				<hr />
				<ExperienceTimeline />
				<hr />
				<Project />
				<hr />
				<Games />
				<hr />
				<hr />
			</div>
		</>
	);
};

export default HomePage;
