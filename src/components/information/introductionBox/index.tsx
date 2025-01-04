import React from "react";

interface Props {
	children: React.ReactNode;
	sizeWidth: number;
	sizeHeight: number;
}

export default function IntroductionBox({
	children,
	sizeWidth,
	sizeHeight,
}: Props) {
	return (
		<div
			style={{
				width: sizeWidth,
				height: sizeHeight,
				padding: "15px",
				borderRadius: "15%",
				border: "1px solid gray",
				boxShadow: " 2px 2px 10px yellow",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			{children}
		</div>
	);
}
