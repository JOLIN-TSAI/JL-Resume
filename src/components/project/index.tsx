import Sty from "@/components/project/project.module.scss";
import { useBackgroundState } from "@/hooks/backgroundState";
import { useEffect, useRef } from "react";

export default function Project() {
	const { isDarkMode } = useBackgroundState();
	const brandRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<HTMLDivElement>(null);

	const shops = [
		{
			id: "1",
			title: "網站前台",
			url: "/project/sweetyTime/frontDesk.png",
		},
		{
			id: "2",
			title: "詳細頁",
			url: "/project/sweetyTime/detailPage.png",
		},
		{
			id: "3",
			title: "admin後台商家管理",
			url: "/project/sweetyTime/adminBackstage-CD.png",
		},
		{
			id: "4",
			title: "admin後台商家RU功能",
			url: "/project/sweetyTime/adminBackstage-RU.png",
		},
		{
			id: "5",
			title: "商家後台訂單管理",
			url: "/project/sweetyTime/shopBackstage-list.png",
		},
		{
			id: "6",
			title: "商家後台訂單內容",
			url: "/project/sweetyTime/shopBackstage-detail.png",
		},
	];

	const skills = [
		{ title: "HTML", url: "/project/sweetyTime/skills/HTML.png" },
		{ title: "CSS", url: "/project/sweetyTime/skills/CSS.png" },
		{
			title: "JavaScript",
			url: "/project/sweetyTime/skills/JavaScript.png",
		},
		{ title: "Bootstrap", url: "/project/sweetyTime/skills/Bootstrap.png" },
		{ title: "Sass", url: "/project/sweetyTime/skills/Sass.png" },
		{
			title: "SweetAlert2",
			url: "/project/sweetyTime/skills/SweetAlert2.png",
		},
		{ title: "MUI", url: "/project/sweetyTime/skills/MUI.png" },
		{ title: "GSAP", url: "/project/sweetyTime/skills/GSAP.png" },
		{ title: "React.js", url: "/project/sweetyTime/skills/React.png" },
		{ title: "Next.js", url: "/project/sweetyTime/skills/Next.png" },
		{ title: "Express.js", url: "/project/sweetyTime/skills/express.png" },
		{ title: "Node.js", url: "/project/sweetyTime/skills/node.png" },
		{ title: "REST API", url: "/project/sweetyTime/skills/RestAPI.png" },
		{ title: "MySQL", url: "/project/sweetyTime/skills/MySQL.png" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(Sty.visible);
					} else {
						entry.target.classList.remove(Sty.visible);
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (brandRef.current) observer.observe(brandRef.current);
		if (skillRef.current) observer.observe(skillRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<div className={Sty.all}>
				<h2
					style={{
						textShadow: isDarkMode
							? "3px 3px 30px #434383"
							: "3px 3px 30px yellow",
					}}>
					SweetyTime甜覓食光
				</h2>

				<div
					ref={brandRef}
					className={`${Sty.brand} ${Sty.introduction}`}>
					<h4>品牌簡介</h4>
					<p>
						甜覓食光SweetyTime是一個
						<strong>專注於甜點的綜合平台</strong>
						，致力於為消費者提供一站式的甜點購物體驗。
						我們匯集眾多優質甜點店家，讓消費者能輕鬆探索與選擇心儀的甜品，無論購物還是學習甜點製作，都能在這裡享受甜蜜時光。填補了現今電商平台中對甜點領域關注的空白。
					</p>
				</div>
				<div
					ref={skillRef}
					className={`${Sty.skill} ${Sty.introduction}`}>
					<h4>使用技術</h4>
					<div className={Sty.skillItems}>
						{skills.map((skill, index) => (
							<div
								key={index}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<h6>{skill.title}</h6>
								<img
									src={skill.url}
									alt={skill.title}
									style={{ width: "80px", height: "80px" }}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={Sty.project}>
				{shops.map((shop, index) => (
					<div key={index} className={Sty.items}>
						<div className={Sty.decorate}>{shop.id}</div>
						<h3>{shop.title}</h3>
						<div className={Sty.imageBox}>
							<img src={shop.url} alt="" className={Sty.image} />
						</div>
					</div>
				))}
			</div>
		</>
	);
}
