import { RefObject, useEffect, useState } from "react";
import Sty from "@/components/header/header.module.scss";
import { IoLogoGithub } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaCloudMoon } from "react-icons/fa";
import { useBackgroundState } from "@/hooks/backgroundState";

interface HeaderProps {
	scroll: (ref: RefObject<HTMLElement>) => void;
	sectionRefs: RefObject<HTMLElement>[];
}

export default function Index({ scroll, sectionRefs }: HeaderProps) {
	const navItems = [
		{ text: "全部資訊", ref: sectionRefs[0] },
		{ text: "關於我", ref: sectionRefs[1] },
		{ text: "個人經歷", ref: sectionRefs[2] },
		{ text: "團隊專案", ref: sectionRefs[3] },
		{ text: "趣味遊戲", ref: sectionRefs[4] },
	];

	const contactIcons = [
		{ icon: <MdOutlineEmail />, link: "mailto:lonely507487@gmail.com" },
		{ icon: <IoLogoGithub />, link: "https://github.com/JOLIN-TSAI" },
		{ icon: <FaCodepen />, link: "https://codepen.io/JOLIN-TSAI-the-bold" },
	];
	const { toggleMode, isDarkMode } = useBackgroundState();
	const [currentSectionIndex, setCurrentSectionIndex] = useState<
		number | null
	>(null);
	useEffect(() => {
		const setInitialSection = () => {
			sectionRefs.forEach((ref, index) => {
				if (ref.current) {
					const bounding = ref.current.getBoundingClientRect();
					if (
						bounding.top >= 0 &&
						bounding.top < window.innerHeight
					) {
						setCurrentSectionIndex(index);
					}
				}
			});
			if (currentSectionIndex === null) setCurrentSectionIndex(0); // 預設第一個區域
		};

		setInitialSection();
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = sectionRefs.findIndex(
						(ref) => ref.current === entry.target
					);
					setCurrentSectionIndex(index);
				}
			});
		});
		sectionRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});
		return () => {
			sectionRefs.forEach((ref) => {
				if (ref.current) observer.unobserve(ref.current);
			});
		};
	}, [sectionRefs]);
	return (
		<header className={`${Sty.headerAll} container-fluid`}>
			<div className="row w-100 px-xl-5 mx-auto">
				<div className="d-flex col-5 col-md-3 p-0">
					<div className={Sty.logoBox}>
						<img
							src={
								isDarkMode
									? "/winnerBear.png"
									: "/sleepBear.png"
							}
							alt="Logo"
							className={Sty.logo}
						/>
					</div>
					<p className="my-auto" style={{ color: "#fdca30" }}>
						JL-TSAI planet
					</p>
				</div>
				<nav className={`${Sty.nav} col-7 col-md-9 p-0`}>
					<ul className={Sty.navItems}>
						{navItems.map((item, index) => (
							<li
								key={index}
								onClick={() => scroll(item.ref)}
								className={`${
									currentSectionIndex === index
										? Sty.active
										: Sty.point
								} d-none d-lg-block`}>
								{item.text}
							</li>
						))}

						<li className={Sty.contactItem}>
							<span
								className={`${Sty.contactText} d-none d-xl-block`}>
								聯繫我
							</span>
							<div className={Sty.contactIcons}>
								{contactIcons.map((contact, index) => (
									<a
										key={index}
										href={contact.link}
										target="_blank"
										rel="noopener noreferrer"
										className={Sty.contactIcon}>
										{contact.icon}
									</a>
								))}
							</div>
						</li>
						<li className={Sty.Bgc}>
							<FaCloudMoon
								onClick={toggleMode}
								style={{
									cursor: "pointer",
									fontSize: "26px",
								}}></FaCloudMoon>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
