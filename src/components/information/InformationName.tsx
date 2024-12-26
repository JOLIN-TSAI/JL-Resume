import IntroductionBox from "@/components/information/introductionBox";
import Sty from "@/components/information/informationName.module.scss";

export default function InformationName() {
	return (
		<>
			<IntroductionBox size={360}>
				<div className="d-flex flex-column gap-3">
					<div className="d-flex w-100">
						<div className={`${Sty.photoBox} w-50`}>
							<img
								src="/myPhoto.jpg"
								alt="join's Photo"
								className={Sty.photo}
							/>
						</div>
						<div className={`${Sty.Personal} w-50`}>
							<p>蔡依琳</p>
							<p>年齡：24</p>
						</div>
					</div>
					<div className={Sty.other}>
						<p>畢業於： 實踐大學觀光管理學系</p>
						<p>興趣：閱讀、健身、旅遊</p>
						<p>左右銘：</p>
					</div>
				</div>
			</IntroductionBox>
		</>
	);
}
