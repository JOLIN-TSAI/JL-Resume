import Sty from "@/components/games/gameBox.module.scss";
interface Props {
	name: string;
	url: string;
	img: string;
}
export default function GameBox({ name, url, img }: Props) {
	return (
		<>
			<div className={Sty.all}>
				<div className={Sty.content}>
					<a
						href={`http://${url}`}
						target="_blank"
						rel="noopener noreferrer">
						<img src={img} alt={name} />
					</a>
				</div>
				<h3>{name}</h3>
			</div>
		</>
	);
}
