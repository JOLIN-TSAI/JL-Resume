import { RefObject } from "react";
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
		{ text: "關於我", ref: sectionRefs[0] },
		{ text: "經歷", ref: sectionRefs[1] },
		{ text: "個人專案", ref: sectionRefs[2] },
		{ text: "趣味遊戲", ref: sectionRefs[3] },
	];

	const contactIcons = [
		{ icon: <MdOutlineEmail />, link: "mailto:lonely507487@gmail.com" },
		{ icon: <IoLogoGithub />, link: "https://github.com/JOLIN-TSAI" },
		{ icon: <FaCodepen />, link: "https://codepen.io/JOLIN-TSAI-the-bold" },
	];
	const { toggleMode } = useBackgroundState();

	return (
		<header className={`${Sty.headerAll} bg-info`}>
			<div className="d-flex">
				<div className={Sty.logoBox}>
					<img src="/logo.png" alt="Logo" className={Sty.logo} />
				</div>
				<p className="m-auto" style={{ color: "yellow" }}>
					蔡依琳的個人履歷網站
				</p>
			</div>
			<nav className={Sty.nav}>
				<ul className={Sty.navItems}>
					{navItems.map((item, index) => (
						<li
							key={index}
							onClick={() => scroll(item.ref)}
							className={Sty.point}>
							{item.text}
						</li>
					))}

					<li className={Sty.contactItem}>
						<span className={Sty.contactText}>聯繫我</span>
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
		</header>
	);
}
