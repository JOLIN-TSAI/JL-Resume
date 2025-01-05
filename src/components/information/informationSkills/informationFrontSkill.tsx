import InformationBox from "@/components/information/introductionBox";
import SkillBlock from "./SkillBlock"; // 單個技能區塊
import { frontSkillBlocks } from "./SkillData"; // 引入技能資料
import Title from "./title";

export default function InformationFrontSkill() {
	return (
		<div
			className="d-flex flex-wrap gap-2 justify-content-center"
			style={{ width: "360px", position: "relative" }}>
			<div style={{ position: "absolute", top: "150px", right: "10px" }}>
				<Title content="我的前端技術" />
			</div>
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
