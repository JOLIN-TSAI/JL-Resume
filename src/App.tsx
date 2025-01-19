import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundState from "./hooks/backgroundState";

// 懶加載組件
const HomePage = lazy(() => import("./pages/index"));

const App = () => {
	return (
		<BackgroundState>
			<Suspense fallback={<div>loading ... </div>}>
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</Router>
			</Suspense>
		</BackgroundState>
	);
};

export default App;
