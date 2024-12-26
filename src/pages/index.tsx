import Header from "@/components/header";
import Sty from "@/styles/index.module.scss";

const HomePage = () => {
	return (
		<>
			<Header />
			<div className={`${Sty["frontPage"]}`}>
				<h1 className="">Welcome to My Resume</h1>
				<p>This is the homepage of my personal resume website.</p>
			</div>
		</>
	);
};

export default HomePage;
