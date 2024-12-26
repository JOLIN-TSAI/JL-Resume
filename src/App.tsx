import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/index";
import "@/styles/globals.scss";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import GamesPage from "@/pages/games";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/games" element={<GamesPage />} />
			</Routes>
		</Router>
	);
};

export default App;
