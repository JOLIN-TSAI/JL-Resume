import IntroductionBox from "@/components/information/introductionBox";
import { FaArrowCircleRight } from "react-icons/fa";
import Sty from "@/components/information/informationExperience.module.scss";

export default function InformationExperience() {
	const experience = [
		{
			name: "志光教育科技股份有限公司",
			title: "數位行銷企劃",
			responsibility: [
				"社群媒體經營與互動提升",
				"品牌行銷活動策劃",
				"數據分析與成效追蹤",
				"線上課程專案管理",
				"直播活動企劃與主持",
				"SEO內容優化與流量提升",
				"數位廣告投放與效益提升",
			],
		},
	];
	return (
		<>
			<IntroductionBox size={360}>
				<div className={Sty.all}>
					<div className={Sty.top}>
						<h3>工作經歷</h3>
						<FaArrowCircleRight
							className="my-auto"
							style={{ fontSize: "25px" }}
						/>
					</div>
					<div className={Sty.content}>
						{experience.map((item, index) => (
							<div key={index}>
								<h4>{item.name}</h4>
								<h4>{item.title}</h4>
								<ul>
									{item.responsibility.map(
										(task, taskIndex) => (
											<li key={taskIndex}>{task}</li>
										)
									)}
								</ul>
							</div>
						))}
					</div>
				</div>
			</IntroductionBox>
		</>
	);
}
