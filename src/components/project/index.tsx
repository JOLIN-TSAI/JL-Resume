import Sty from "@/components/project/project.module.scss";
import { useBackgroundState } from "@/hooks/backgroundState";
import { useEffect, useRef } from "react";

export default function Project() {
	const { isDarkMode } = useBackgroundState();
	const brandRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<HTMLDivElement>(null);

	const brandItems = [
		{
			title: "前台技術",
			content: [
				"Site map與ER model設計",
				"切版與響應式設計(RWD)",
				"前台店家列表 篩選與收藏",
				"後台管理頁面 CRUD 功能",
				"店家後台訂單 篩選與搜尋",
			],
		},
		{
			title: "後台技術",
			content: ["資料庫結構設計(MySQL)", "RESTful API", "Node.js"],
		},
		{
			title: "Figma 視覺規劃",
			content: [
				"前台店家列表頁",
				"前台店家細節頁",
				"前台會員中心",
				"後台管理者店家CRUD頁面",
				"後台店家訂單管理與明細",
			],
		},
		{
			title: "技術研究",
			content: ["全台便利商店API", "React-hot-toast", "sweet alert"],
		},
		{
			title: "其他主責",
			content: [
				"行前時程規劃",
				"專案進度控管",
				"每週會議協調",
				"夥伴工作分配",
				"企劃書規劃與撰寫",
			],
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
			title: "SweetAlert",
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
		<div className={Sty.all}>
			<h2
				style={{
					textShadow: isDarkMode
						? "3px 3px 30px #434383"
						: "3px 3px 30px yellow",
				}}>
				SweetyTime甜覓食光
			</h2>

			<div className="px-md-5">
				<h4>品牌簡介</h4>
				<p>
					&ensp;&ensp;&ensp;&nbsp;甜覓食光SweetyTime是一個
					<strong>專注於甜點的綜合平台</strong>
					，致力於為消費者提供一站式的甜點購物體驗。
					我們匯集眾多優質甜點店家，讓消費者能輕鬆探索與選擇心儀的甜品，無論購物還是學習甜點製作，都能在這裡享受甜蜜時光。
				</p>
			</div>

			<div ref={brandRef} className={Sty.brand}>
				{brandItems.map((item, index) => (
					<div key={index} className={Sty.brandItem}>
						<h4>{item.title}</h4>
						<ol>
							{item.content.map((content, contentIndex) => (
								<li key={contentIndex}>{content}</li>
							))}
						</ol>
					</div>
				))}
			</div>

			<div ref={skillRef} className={Sty.skill}>
				<h4>使用技術</h4>
				<div className={Sty.skillItems}>
					{skills.map((skill, index) => (
						<div key={index}>
							<p>{skill.title}</p>
							<div className={Sty.skillItem}>
								<img src={skill.url} alt={skill.title} />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={Sty.project}>
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/kYp50gVkwtg"
					title="Sweety Time 專案介紹影片"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			</div>
		</div>
	);
}
