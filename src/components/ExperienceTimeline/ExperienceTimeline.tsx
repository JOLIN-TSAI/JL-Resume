import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";

const timelineData = [
	{
		date: "2018 - 2022",
		title: "實踐大學畢業",
		subtitle: "觀光管理學系",
		description: "完成學士學位，專注於觀光管理與相關專業知識。",
		icon: <FaGraduationCap />,
		background: "rgb(33, 150, 243)",
	},
	{
		date: "Dec 2022 - Feb 2023",
		title: "誠品股份有限公司",
		subtitle: "文具禮品人員",
		description: "協助店內文具與禮品銷售、商品陳列，並提供顧客服務。",
		icon: <FaBriefcase />,
		background: "rgb(33, 150, 243)",
	},
	{
		date: "Feb 2023 - Apr 2023",
		title: "承勁實業有限公司 (mygreat)",
		subtitle: "工程專案秘書",
		description:
			"協助專案進度跟蹤、會議紀錄整理，並協調內外部溝通以確保專案順利進行。",
		icon: <FaBriefcase />,
		background: "rgb(33, 150, 243)",
	},
	{
		date: "Sep 2023 - May 2024",
		title: "志光教育科技股份有限公司",
		subtitle: "數位行銷企劃",
		description:
			"負責數位廣告投放與效益分析、社群經營，並策劃線上活動以提升品牌曝光。",
		icon: <FaBriefcase />,
		background: "rgb(33, 150, 243)",
	},
	{
		date: "Jun 2024 - Nov 2024",
		title: "資展國際股份有限公司（原資策會）",
		subtitle: "前端工程師課程學員",
		description:
			"學習 HTML、CSS、JavaScript、React 框架以及 RESTful API 開發。",
		icon: <FaGraduationCap />,
		background: "rgb(233, 30, 99)",
	},
];

export default function Timeline() {
	return (
		<VerticalTimeline>
			{timelineData.map((item, index) => (
				<VerticalTimelineElement
					key={index}
					className="work"
					date={item.date}
					contentStyle={{
						background: item.background,
						color: "#fff",
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
					background: "rgb(16, 204, 82)",
					color: "#fff",
				}}
				icon={<FaStar />}
			/>
		</VerticalTimeline>
	);
}
