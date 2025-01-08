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
						Hello！您好，我是蔡依琳，今年24歲，從實踐大學觀光管理學系畢業兩年，曾任職於建設公司擔任工程專案秘書、教育補習屆的數位行銷企劃。而過去半年間(Jun
						2024 - Nov
						2024)，我在資展國際股份有限公司(原資策會)，專注於前端工程師相關技術進修，一開始
					</p>
				</div>
			</div>
			<div className={`row ${Sty.content}`}>
				<div className="col-7 col-sm-5 col-md-7 my-auto">
					<p className="m-0">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolores molestias id earum mollitia, in a, corrupti
						laboriosam rerum vel, quisquam vero! Quod minima ratione
						officiis. Porro doloremque quo fuga cumque. Quaerat
						debitis, repellendus provident beatae, id hic doloremque
						cumque voluptatem quam error omnis saepe harum incidunt
						officia ducimus dicta nulla aliquam exercitationem
						accusamus rerum, qui voluptate et unde delectus. Quidem.
						Eligendi optio autem quam officiis deleniti a vel
						suscipit. Neque illo placeat id, reprehenderit commodi
						voluptates? Asperiores dolore impedit quibusdam nihil
						ipsum! Quas sunt aliquam quae magnam blanditiis
						voluptatum recusandae!
					</p>
				</div>
				<div className={`col-5 col-sm-7 col-md-5 d-flex flex-wrap`}>
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
