import { useState, ReactNode, createContext, useContext } from "react";

const BackgroundContext = createContext<{
	isDarkMode: boolean;
	toggleMode: () => void;
} | null>(null);

interface Props {
	children: ReactNode;
}
export default function BackgroundState({ children }: Props) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};
	return (
		<>
			<BackgroundContext.Provider value={{ isDarkMode, toggleMode }}>
				<div
					style={{
						backgroundColor: isDarkMode ? "#ffffff" : "#203143",
						color: isDarkMode ? "#000000" : "#ffffff",
						minHeight: "100vh",
						transition: "background-color 0.3s, color 0.3s",
					}}>
					{children}
				</div>
			</BackgroundContext.Provider>
		</>
	);
}

export const useBackgroundState = () => {
	const context = useContext(BackgroundContext);
	if (context === null) {
		throw new Error(
			"useBackgroundState 必須在 BackgroundState Provider 中使用"
		);
	}
	return context;
};
