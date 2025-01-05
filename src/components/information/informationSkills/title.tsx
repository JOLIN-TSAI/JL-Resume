// import React, { useState, useEffect } from 'react'

export default function Title({ content }: { content: string }) {
	return (
		<>
			<div
				style={{
					width: "150px",
					height: "40px",
					background: "red",
					clipPath:
						"polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
					textAlign: "end",
					padding: "8px 10px 0 0",
				}}>
				{content}
			</div>
		</>
	);
}
