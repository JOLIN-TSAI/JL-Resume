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
				borderRadius: "15%",
				border: "1px solid gray",
			}}>
			{children}
		</div>
	);
}
