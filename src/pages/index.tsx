import Header from "@/components/header";
import InformationName from "@/components/information/InformationName";
import InformationProjectsItem from "@/components/information/InformationProjectsItem";
import InformationExperience from "@/components/information/informationExperience";
import Sty from "@/styles/index.module.scss";

const HomePage = () => {
	return (
		<>
			<div className={`${Sty.all}`}>
				<Header />
				<div className={`${Sty.frontPage} container`}>
					<InformationName />
					<InformationProjectsItem />
					<InformationExperience />
				</div>
			</div>
		</>
	);
};

export default HomePage;
