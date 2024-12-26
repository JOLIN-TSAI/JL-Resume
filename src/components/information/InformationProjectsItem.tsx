import IntroductionBox from "@/components/information/introductionBox";

export default function InformationProjectsItem() {
	return (
		<>
			<IntroductionBox size={360}>
				<div className="d-flex mt-4">
					<IntroductionBox size={120}>
						<p>大型專案數量:</p>
					</IntroductionBox>
					<IntroductionBox size={120}>
						<p>小專案數量:</p>
					</IntroductionBox>
					<IntroductionBox size={120}>
						<p>入坑時數:</p>
					</IntroductionBox>
				</div>
				<h3>項目</h3>
			</IntroductionBox>
		</>
	);
}
