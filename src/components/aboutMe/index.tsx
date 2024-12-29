import Sty from "@/components/aboutMe/index.module.scss";

const trip = [
	{
		id: 1,
		title: "",
		src: "/aboutMe/Taiwan.jpg",
		alt: "參加人生音樂祭的照片",
	},
	{
		id: 2,
		title: "",
		src: "/aboutMe/Korea.jpg",
		alt: "去韓國的照片",
	},
	{
		id: 3,
		title: "",
		src: "/aboutMe/Japan.jpg",
		alt: "去日本玩的照片",
	},
];

const TeamImage = [
	{
		title: "",
		src: "/aboutMe/host.jpg",
		alt: "當主持人的照片",
	},
	{
		title: "",
		src: "/aboutMe/team1.jpg",
		alt: "系上新生活動主持照片",
	},
	{
		title: "",
		src: "/aboutMe/team3.jpg",
		alt: "麥當勞分店比賽照片",
	},
	{
		title: "",
		src: "/aboutMe/team4.jpg",
		alt: "台北國際旅展巡場組照片",
	},
	{
		title: "",
		src: "/aboutMe/team5.jpg",
		alt: "系上招生面試合照",
	},
	{
		title: "",
		src: "/aboutMe/team6.jpg",
		alt: "大學籃球社比賽合照",
	},
];

export default function Index() {
	return (
		<>
			<div className="container-fluid">
				<div className={`row ${Sty.tripAll}`}>
					<div
						className={`col-6 gap-1 ${Sty.tripImageBox} ${Sty.all}`}>
						{trip.map((image, index) => (
							<div
								key={index}
								className={Sty.ImageBox}
								style={{
									position:
										image.id === 2
											? "absolute"
											: "relative",
									left: image.id === 2 ? "19%" : "auto",
								}}>
								<img src={image.src} alt={image.alt} />
							</div>
						))}
					</div>
					<div className="col-6 my-auto">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Et optio quos, voluptates ratione voluptate
						soluta! Molestiae asperiores incidunt sint sunt sit,
						enim commodi sed nobis! Enim consequuntur cupiditate
						officiis nemo. Ullam debitis porro qui nisi libero vitae
						assumenda dolores quo consectetur iusto, voluptatum
						architecto eum, non minima repellat temporibus! Quidem
						adipisci fuga corrupti deleniti id, iusto laborum
						deserunt minima sequi! Error cupiditate ab ipsum
						consequatur saepe qui, porro quasi itaque delectus
						assumenda dolore nesciunt suscipit possimus numquam quis
						veritatis velit totam esse enim necessitatibus cumque
						tenetur doloremque? Cum, adipisci voluptatum?
					</div>
				</div>
			</div>
			<div className="container-fluid" style={{}}>
				<div className="row m-auto">
					<h3>社團</h3>
					<div className="col-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consectetur asperiores dolore dolores tempora. Non velit
						voluptates delectus reiciendis, ex alias inventore est?
						Dolorem dolorum tempora reprehenderit, odit voluptates
						molestias rerum. Eligendi vero velit expedita alias
						repellat veniam error, ipsa facilis quia aut voluptatem
						atque sunt architecto obcaecati sit tempora et
						consectetur tenetur commodi eum incidunt qui aperiam
						enim eveniet. Reprehenderit?
					</div>
					<div
						className={`col-5 gap-2 justify-content-center ${Sty.all}`}>
						{TeamImage.map((image, index) => (
							<div key={index} className={Sty.ImageBox}>
								<img src={image.src} alt={image.alt} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
