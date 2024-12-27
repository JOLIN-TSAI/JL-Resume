import React from "react";

interface Props {
	children: React.ReactNode;
	size: number;
}

export default function IntroductionBox({ children, size }: Props) {
	return (
		<div
			style={{
				width: size,
				height: size,
				padding: "15px",
				borderRadius: "15%",
				border: "1px solid gray",
				boxShadow: " 2px 2px 10px yellow",
			}}>
			{children}
		</div>
	);
}
