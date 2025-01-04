import InformationBox from "@/components/information/introductionBox";
import SkillBlock from "./SkillBlock"; // 單個技能區塊
import { frontSkillBlocks } from "./SkillData"; // 引入技能資料

export default function InformationFrontSkill() {
	return (
		<div className="d-flex flex-wrap gap-2" style={{ width: "370px" }}>
			{frontSkillBlocks.map((block, index) => (
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
	);
}
