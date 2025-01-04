import IntroductionBox from "@/components/information/introductionBox";
import Sty from "@/components/information/informationExperience.module.scss";
import { FaArrowCircleRight, FaRegCircle, FaCircle } from "react-icons/fa";
import { useState } from "react";

export default function InformationExperience() {
	const [changeContent, setChangeContent] = useState(0);
	const experience = [
		{
			name: "志光教育科技股份有限公司",
			title: "數位行銷企劃",
			responsibility: [
				"社群媒體經營與互動提升。",
				"品牌行銷活動策劃。",
				"數據分析與成效追蹤。",
				"線上課程專案管理。",
				"直播活動企劃與主持。",
				"SEO內容優化與流量提升。",
				"數位廣告投放與效益提升。",
			],
		},
		{
			name: "mygreat承勁實業有限公司",
			title: "工程專案秘書 ",
			responsibility: [
				"負責案件的空間與環境丈量及查核。",
				"審查業務設計師的色樣配置圖。",
				"主持行前會議並安排施工放樣。",
				"制作工程進度報告，維護完成項目。",
				"密切聯繫業主，快速解答疑問與處理臨時變更。",
			],
		},
		{
			name: "誠品股份有限公司",
			title: "文具禮品人員",
			responsibility: [
				"商品介紹與銷售推廣。",
				"供應商協調與溝通。",
				"庫存管理與商品調配。",
				"收銀操作與資金管理。",
				"促銷活動執行與宣傳。",
				"門市陳列規劃與展示維護。",
				"顧客關係維護與服務管理。",
			],
		},
	];
	const handleNext = () => {
		setChangeContent((prevIndex) => (prevIndex + 1) % experience.length);
	};
	return (
		<>
			<IntroductionBox sizeWidth={360} sizeHeight={360}>
				<div className={Sty.all}>
					<div className={Sty.top}>
						<h3>工作經歷</h3>
						<FaArrowCircleRight
							className={`my-auto ${Sty.iconBtn}`}
							onClick={handleNext}
						/>
					</div>
					<div className={Sty.content}>
						<div>
							<h4>{experience[changeContent].name}</h4>
							<h4>{experience[changeContent].title}</h4>
						</div>
						<ul>
							{experience[changeContent].responsibility.map(
								(task, taskIndex) => (
									<li key={taskIndex}>{task}</li>
								)
							)}
						</ul>
					</div>
					<div className={Sty.indicatorsCircle}>
						{experience.map((_, index) => (
							<span key={index}>
								{changeContent === index ? (
									<FaCircle />
								) : (
									<FaRegCircle />
								)}
							</span>
						))}
					</div>
				</div>
			</IntroductionBox>
		</>
	);
}
