import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { useBackgroundState } from "@/hooks/backgroundState";

export default function Timeline() {
	const { isDarkMode } = useBackgroundState();
	const timelineData = [
		{
			date: "2018 - 2022",
			title: "實踐大學畢業",
			subtitle: "觀光管理學系",
			description: "完成學士學位，專注於觀光管理與相關專業知識。",
			icon: <FaGraduationCap />,
			background: isDarkMode ? "#94b2d7" : "rgb(85, 167, 234)",
		},
		{
			date: "Dec 2022 - Feb 2023",
			title: "誠品股份有限公司",
			subtitle: "文具禮品人員",
			description:
				"負責文具禮品銷售、商品陳列與顧客服務，執行促銷活動、庫存管理及收銀作業，提升門市業績與顧客滿意度。",
			icon: <FaBriefcase />,
			background: isDarkMode ? "#94b2d7" : "rgb(85, 167, 234)",
		},
		{
			date: "Feb 2023 - Apr 2023",
			title: "承勁實業有限公司 (mygreat)",
			subtitle: "工程專案秘書",
			description:
				"協協助專案進度追蹤與會議紀錄，負責設計審核、工程報告製作，並與業主及施工團隊溝通，確保工程順利完成。",
			icon: <FaBriefcase />,
			background: isDarkMode ? "#94b2d7" : "rgb(85, 167, 234)",
		},
		{
			date: "Sep 2023 - May 2024",
			title: "志光教育科技股份有限公司",
			subtitle: "數位行銷企劃",
			description:
				"負責數位廣告投放、社群經營與行銷活動策劃，精準分析廣告效益並優化策略，成功提升品牌曝光與課程轉化率。",
			icon: <FaBriefcase />,
			background: isDarkMode ? "#94b2d7" : "rgb(85, 167, 234)",
		},
		{
			date: "Jun 2024 - Nov 2024",
			title: "資展國際股份有限公司（原資策會）",
			subtitle: "前端工程師課程學員",
			description:
				"學習前端開發技術，包含 HTML、CSS、JavaScript、React 及 RESTful API，擔任組長，帶領團隊完成專案開發與管理。",
			icon: <FaGraduationCap />,
			background: isDarkMode ? "#E16EB9" : "rgb(235, 69, 125)",
		},
	];
	return (
		<VerticalTimeline lineColor={isDarkMode ? "#94b2d7" : "#aaa"}>
			{timelineData.map((item, index) => (
				<VerticalTimelineElement
					key={index}
					className="work"
					date={item.date}
					contentStyle={{
						background: item.background,
						color: isDarkMode ? "#000" : "#fff",
					}}
					contentArrowStyle={{
						borderRight: `7px solid ${item.background}`,
					}}
					iconStyle={{
						background: item.background,
						color: "#fff",
					}}
					icon={item.icon}>
					<h3 className="title">{item.title}</h3>
					<h4 className="subtitle">{item.subtitle}</h4>
					<p>{item.description}</p>
				</VerticalTimelineElement>
			))}
			<VerticalTimelineElement
				iconStyle={{
					background: isDarkMode ? "#4FE98F" : "rgb(16, 204, 82)",
					color: "#fff",
				}}
				icon={<FaStar />}
			/>
		</VerticalTimeline>
	);
}
