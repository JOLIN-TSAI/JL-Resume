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
				height: "100%",
				backgroundColor: "#47525d",
			}}>
			<div className="d-flex flex-column w-100 h-100 overflow-hidden py-2">
				<div className="d-flex mx-auto gap-3 gap-xl-5">
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
				<div className="d-flex justify-content-center align-content-center">
					<p className="m-0">歡迎聯繫我 lonely507487@gmail.com</p>
				</div>
				<div className="d-flex justify-content-center align-content-center">
					<p className="m-0">© 2025 Jolin Tsai</p>
				</div>
			</div>
		</footer>
	);
}
