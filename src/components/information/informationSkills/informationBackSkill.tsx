// import React, { useState, useEffect } from 'react';
import SkillBlock from "./SkillBlock";
import { backSkillBlocks } from "./SkillData";
import InformationBox from "@/components/information/introductionBox";

export default function InformationBackSkill() {
	return (
		<>
			<div className="d-flex flex-wrap gap-2" style={{ width: "370px" }}>
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
