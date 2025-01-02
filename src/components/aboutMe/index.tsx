import Sty from "@/components/aboutMe/index.module.scss";

interface Image {
	id: number;
	title: string;
	src: string;
	alt: string;
}

const trip: Image[] = [
	{
		id: 1,
		title: "In Taiwan",
		src: "/aboutMe/Taiwan.jpg",
		alt: "參加人生音樂祭的照片",
	},
	{
		id: 2,
		title: "In Korea",
		src: "/aboutMe/Korea.jpg",
		alt: "去韓國的照片",
	},
	{
		id: 3,
		title: "In Japan",
		src: "/aboutMe/Japan.jpg",
		alt: "去日本玩的照片",
	},
];

const team: Image[] = [
	{
		id: 1,
		title: "In Japan",
		src: "/aboutMe/host.jpg",
		alt: "當主持人的照片",
	},
	{
		id: 2,
		title: "系上新生活動主持人合照",
		src: "/aboutMe/team1.jpg",
		alt: "系上新生活動主持人合照",
	},
	{
		id: 3,
		title: "麥當勞分店比賽照片",
		src: "/aboutMe/team2.jpg",
		alt: "麥當勞分店比賽照片",
	},
	{
		id: 4,
		title: "台北國際旅展巡場組合照",
		src: "/aboutMe/team3.jpg",
		alt: "台北國際旅展巡場組合照",
	},
	{
		id: 5,
		title: "系上招生面試合照",
		src: "/aboutMe/team4.jpg",
		alt: "系上招生面試合照",
	},
	{
		id: 6,
		title: "籃球系隊賽前合照",
		src: "/aboutMe/team5.jpg",
		alt: "籃球系隊賽前合照",
	},
];

const filteredTrip = trip.filter((_, index) => index !== 1);

function ImageCard({ image }: { image: Image }) {
	return (
		<div className={`${Sty.ImageBox}`}>
			<img className={Sty.FrontFace} src={image.src} alt={image.alt} />
			<div className={Sty.backFace}>
				<p>{image.title}</p>
			</div>
		</div>
	);
}

export default function Index() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className={`col-6 ${Sty.tripCard}`}>
					<ImageCard image={trip[1]} />

					<div className="d-flex justify-content-between">
						{filteredTrip.map((image) => (
							<ImageCard key={image.id} image={image} />
						))}
					</div>
				</div>
				<div className="col-6 my-auto">
					<p className="m-0">
						Hello！你好，我是蔡依琳，今年24歲，從實踐大學觀光管理學系畢業兩年了，曾任職於建設公司擔任工程專案秘書、教育補習屆的數位行銷企劃。而過去半年間(Jun
						2024 - Nov
						2024)，我在資展國際股份有限公司(原資策會)，全心專注於前端的進修中，
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-7 my-auto">
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
				<div className={`col-sm-5 d-flex flex-wrap`}>
					{team.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			</div>
		</div>
	);
}
