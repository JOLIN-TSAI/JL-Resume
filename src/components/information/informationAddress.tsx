import IntroductionBox from "@/components/information/introductionBox";

export default function InformationExperience() {
	return (
		<>
			<IntroductionBox size={360}>
				<div className="w-100 h-100 m-auto">
					<h3 className="ps-3">目前居住地：</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57864.805086818604!2d121.35550244162064!3d24.981409779477644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681dab28ac1213%3A0xe8fe6da38f79b65f!2z5paw5YyX5biC5qi55p6X5Y2A!5e0!3m2!1szh-TW!2stw!4v1735294808968!5m2!1szh-TW!2stw"
						width="600"
						height="450"
						style={{
							border: "0",
							width: "100%",
							height: "86%",
							overflow: "hidden",
							borderRadius: "15%",
						}}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</IntroductionBox>
		</>
	);
}
