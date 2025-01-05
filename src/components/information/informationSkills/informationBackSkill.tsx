// import React, { useState, useEffect } from 'react';
import SkillBlock from "./SkillBlock";
import { backSkillBlocks } from "./SkillData";
import InformationBox from "@/components/information/introductionBox";
import Title from "./title";

export default function InformationBackSkill() {
	return (
		<>
			<div
				className="d-flex flex-wrap gap-2 justify-content-center"
				style={{ width: "360px", position: "relative" }}>
				<div
					style={{
						position: "absolute",
						top: "150px",
						right: "10px",
					}}>
					<Title content="後端與其他技術" />
				</div>
				{backSkillBlocks.map((block, index) => (
					<InformationBox
						key={index}
						sizeWidth={block.sizeWidth}
						sizeHeight={block.sizeHeight}>
						<SkillBlock
							title={block.title}
							content={block.content}
							style={block.style}
							titlePosition={block.titlePosition}
						/>
					</InformationBox>
				))}
			</div>
		</>
	);
}
