import Header from "@/components/header";
import InformationName from "@/components/information/InformationName";
import InformationProjectsItem from "@/components/information/InformationProjectsItem";
import Sty from "@/styles/index.module.scss";

const HomePage = () => {
	return (
		<>
			<div className="d-flex flex-column gap-5">
				<Header />
				<div className={`${Sty.frontPage} container`}>
					<InformationName />
					<InformationProjectsItem />
				</div>
			</div>
		</>
	);
};

export default HomePage;
