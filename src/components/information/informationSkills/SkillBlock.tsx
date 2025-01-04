import React from "react";

interface SkillBlockProps {
	title: string;
	content: string[];
	style?: React.CSSProperties;
	titlePosition?: React.CSSProperties;
}

const SkillBlock: React.FC<SkillBlockProps> = ({
	title,
	content,
	style,
	titlePosition,
}) => {
	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				margin: "auto 0",
				...style,
			}}>
			<h4
				style={{
					position: "absolute",
					top: "0",
					...titlePosition,
				}}>
				{title}
			</h4>
			<ul
				className="d-flex flex-column justify-content-end align-items-start"
				style={{
					height: "100%",
				}}>
				{content.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillBlock;
