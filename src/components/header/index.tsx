import React from "react";
import { Link } from "react-router-dom";
import Sty from "@/components/header/header.module.scss";
import Logo from "@/assets/logo.png";
import { IoLogoGithub } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const navItems = [
	{ text: "關於我", link: "/about" },
	{ text: "個人專案", link: "/projects" },
	{ text: "趣味遊戲", link: "/games" },
];

const contactIcons = [
	{ icon: <MdOutlineEmail />, link: "mailto:lonely507487@gmail.com" },
	{ icon: <IoLogoGithub />, link: "https://github.com/JOLIN-TSAI" },
	{ icon: <FaCodepen />, link: "https://codepen.io/JOLIN-TSAI-the-bold" },
];

export default function Index() {
	return (
		<header className={`${Sty.headerAll} bg-info`}>
			<div className={Sty.logoBox}>
				<img src={Logo} alt="Logo" className={Sty.logo} />
			</div>
			<nav className={Sty.nav}>
				<ul className={Sty.navItems}>
					{navItems.map((item, index) => (
						<li key={index}>
							<Link to={item.link} className={Sty.navLink}>
								{item.text}
							</Link>
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
				</ul>
			</nav>
		</header>
	);
}
