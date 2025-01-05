import { useState, useEffect, useCallback } from "react";
import Sty from "./WelcomeSpaceship.module.scss";

export default function Index() {
	const [isOpen, setIsOpen] = useState(true); //彈窗是否開啟
	const [currentImageIndex, setCurrentImageIndex] = useState(0); //當前顯示的圖片索引
	const [animationState, setAnimationState] = useState("entering"); //彈窗的動畫狀態

	const images = [
		"/WelcomeSpaceship/lightPurple.svg",
		"/WelcomeSpaceship/lightOrange.svg",
		"/WelcomeSpaceship/lightBlue.svg",
		"/WelcomeSpaceship/lightGreen.svg",
		"/WelcomeSpaceship/spaceship.png",
	];

	//關閉
	const handleClose = useCallback(() => {
		if (animationState === "exiting") return;
		setAnimationState("exiting");
		setTimeout(() => {
			setIsOpen(false);
		}, 2000);
	}, [animationState]);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;
		let closeTimeout: NodeJS.Timeout | null = null;
		let animationTimeout: NodeJS.Timeout | null = null;

		if (isOpen) {
			animationTimeout = setTimeout(
				() => setAnimationState("entered"),
				500
			);
			// 圖片切換的計時器
			interval = setInterval(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % images.length
				);
			}, 500);

			closeTimeout = setTimeout(() => handleClose(), 3000);
			document.body.style.overflow = "hidden"; //禁止滾動
		}

		return () => {
			if (interval) clearInterval(interval);
			if (closeTimeout) clearTimeout(closeTimeout);
			if (animationTimeout) clearTimeout(animationTimeout);
			document.body.style.overflow = "unset"; //允許滾動
		};
	}, [handleClose, images.length, isOpen]);
	if (!isOpen) return null;
	return (
		<div
			className={`${Sty["popup-overlay"]} ${Sty[animationState]}`}
			onClick={handleClose}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === "Escape") handleClose();
			}}>
			<div className={Sty["popup-container"]}>
				<img
					src={images[currentImageIndex]}
					alt=""
					className={Sty["popup-image"]}
				/>
			</div>
		</div>
	);
}
