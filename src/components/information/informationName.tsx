import IntroductionBox from "@/components/information/introductionBox";
import Sty from "@/components/information/informationName.module.scss";

export default function InformationName() {
	return (
		<>
			<IntroductionBox sizeWidth={360} sizeHeight={360}>
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
							<h5>您好～</h5>
							<h4>我是蔡依琳</h4>
							<p>今年24歲</p>
						</div>
					</div>
					<div className={Sty.other}>
						<p>畢業：實踐大學觀光管理學系</p>
						<p>興趣：閱讀、健身、旅遊</p>
						<p>累積：團隊專案1、趣味遊戲5</p>
						<p>相關經歷：前端工程師就業養成班57期</p>
					</div>
				</div>
			</IntroductionBox>
		</>
	);
}
