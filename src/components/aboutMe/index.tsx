import Sty from "@/components/aboutMe/index.module.scss";
import { useEffect, useState } from "react";

interface Image {
	id: number;
	title: string;
	src: string;
	alt: string;
	flippedSrc: string;
}

const trip: Image[] = [
	{
		id: 1,
		title: "In Taiwan",
		src: "/aboutMe/Taiwan.jpg",
		flippedSrc: "/aboutMe/TaiwanBack.GIF",
		alt: "參加人生音樂祭的照片",
	},
	{
		id: 2,
		title: "In Korea",
		src: "/aboutMe/Korea.jpg",
		flippedSrc: "/aboutMe/KoreaBack.GIF",
		alt: "去韓國的照片",
	},
	{
		id: 3,
		title: "In Japan",
		src: "/aboutMe/Japan.jpg",
		flippedSrc: "/aboutMe/JapanBack.GIF",
		alt: "去日本玩的照片",
	},
];

const team: Image[] = [
	{
		id: 1,
		title: "In Japan",
		src: "/aboutMe/host.jpg",
		flippedSrc: "",
		alt: "當主持人的照片",
	},
	{
		id: 2,
		title: "系上新生活動主持人合照",
		src: "/aboutMe/team1.jpg",
		flippedSrc: "",
		alt: "系上新生活動主持人合照",
	},
	{
		id: 3,
		title: "麥當勞分店比賽照片",
		src: "/aboutMe/team2.jpg",
		flippedSrc: "",
		alt: "麥當勞分店比賽照片",
	},
	{
		id: 4,
		title: "台北國際旅展巡場組合照",
		src: "/aboutMe/team3.jpg",
		flippedSrc: "",
		alt: "台北國際旅展巡場組合照",
	},
	{
		id: 5,
		title: "系上招生面試合照",
		src: "/aboutMe/team4.jpg",
		flippedSrc: "",
		alt: "系上招生面試合照",
	},
	{
		id: 6,
		title: "籃球系隊賽前合照",
		src: "/aboutMe/team5.jpg",
		flippedSrc: "",
		alt: "籃球系隊賽前合照",
	},
];

export default function Index() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.length);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={`py-5 ${Sty.all}`}>
			<div className={`row ${Sty.content}`}>
				<div className="col-6 d-flex flex-wrap p-0">
					<div className={Sty.tripBox}>
						<img
							className={Sty.FrontFace}
							src={trip[currentImageIndex].src}
							alt={trip[currentImageIndex].alt}
						/>
						<div className={Sty.backFace}>
							<img
								className={Sty.FrontFace}
								src={trip[currentImageIndex].flippedSrc}
								alt={trip[currentImageIndex].alt}
							/>
						</div>
					</div>
				</div>
				<div className="col-6 my-auto">
					<p className="m-0">
						&emsp;&emsp;Hello！您好，我是蔡依琳，今年24歲，畢業於實踐大學觀光管理學系，畢業後累積了數位行銷企劃與工程專案管理的工作經驗。今年6月至11月，我於資展國際股份有限公司(原資策會)專注進修前端技術，學習
						HTML、CSS、JavaScript、React、RESTful API、MySQL 和
						Node.js
						等技能。期間擔任專案組長，帶領六人團隊成功完成專案開發與管理，並大幅提升技術與團隊協作能力。我熱衷嘗試新鮮事物，擁有強烈的學習動力，樂於吸收新知與迎接挑戰，自我要求驅使我不斷精進專業能力。
					</p>
				</div>
			</div>
			<div className={`row ${Sty.content}`}>
				<div className="col-7 col-sm-5 col-md-7 my-auto pe-0 p-md-5">
					<p className="m-0">
						&emsp;&emsp;除了專業技能外，我在校園生活中也積極參與各項活動，展現出主動投入與團隊合作的特質。我曾擔任校園活動主持人，帶領活動氣氛，累積了良好的溝通與臨場應變能力；參與過麥當勞分店比賽及台北國際旅展巡場等活動，深刻體會團隊合作的重要性；同時，我也熱衷於籃球運動，作為系隊的一員，在賽場上不僅學會合作，也培養了不輕言放棄的精神。此外，我參與系上招生面試相關事務，主動協助系所形象推廣，展現了積極開朗的態度與責任感。這些經驗讓我擁有更成熟的態度面對各種挑戰，並能快速融入團隊環境。
					</p>
				</div>
				<div className={`col-5 col-sm-7 col-md-5 d-flex flex-wrap p-0`}>
					{team.map((image, index) => (
						<div key={index} className={Sty.teamBox}>
							<img
								className={Sty.FrontFace}
								src={image.src}
								alt={image.alt}
							/>
							<div className={Sty.backFace}>
								<p>{image.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
