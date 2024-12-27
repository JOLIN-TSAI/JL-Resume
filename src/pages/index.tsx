import Header from "@/components/header";
import InformationName from "@/components/information/InformationName";
import InformationProjectsItem from "@/components/information/InformationProjectsItem";
import InformationExperience from "@/components/information/informationExperience";
import InformationAddress from "@/components/information/informationAddress";

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
					<InformationAddress />
				</div>
			</div>
		</>
	);
};

export default HomePage;
