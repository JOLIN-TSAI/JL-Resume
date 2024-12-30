import { IoLogoGithub } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
export default function Index() {
	const contactIcons = [
		{
			icon: <MdOutlineEmail />,
			link: "mailto:lonely507487@gmail.com",
		},
		{
			icon: <IoLogoGithub />,
			link: "https://github.com/JOLIN-TSAI",
		},
		{
			icon: <FaCodepen />,
			link: "https://codepen.io/JOLIN-TSAI-the-bold",
		},
	];

	return (
		<footer
			style={{
				width: "100%",
				height: "80px",
				backgroundColor: "#47525d",
			}}>
			<div
				className="d-flex m-auto flex-column"
				style={{ width: "15%", height: "100%" }}>
				<div className="d-flex">
					{contactIcons.map((item, index) => (
						<div key={index} className="m-auto">
							<a
								href={item.link}
								style={{
									fontSize: "28px",
									color: "white",
								}}>
								{item.icon}
							</a>
						</div>
					))}
				</div>
				<div className="m-auto">© 2024 Jolin Tsai </div>
			</div>
		</footer>
	);
}
