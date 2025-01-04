import IntroductionBox from "@/components/information/introductionBox";
import Sty from "@/components/information/informationProject.module.scss";

export default function InformationProjectsItem() {
	return (
		<>
			<IntroductionBox sizeWidth={360} sizeHeight={360}>
				<div className="d-flex">
					<IntroductionBox sizeWidth={110} sizeHeight={100}>
						<h6>團隊專案:</h6>
						<p className={Sty.number}>1</p>
					</IntroductionBox>
					<IntroductionBox sizeWidth={110} sizeHeight={100}>
						<h6>趣味遊戲:</h6>
						<p className={Sty.number}>4</p>
					</IntroductionBox>
					<IntroductionBox sizeWidth={110} sizeHeight={100}>
						<h6>入坑時數</h6>
						<p className={Sty.number}>？</p>
					</IntroductionBox>
				</div>
				<hr />
				<div>
					<div className={Sty.projectInfo}>
						<h5>大型團隊協作專案:</h5>
						<p>SweetyTime甜覓時光</p>
					</div>
					<div className={Sty.projectInfo}>
						<h5>專案種類:</h5>
						<p>甜點電商平台</p>
					</div>
					<div className={Sty.projectInfo}>
						<h5>負責區域:</h5>
						<p>前後台商家列表、CRUD、訂單管理與篩選</p>
					</div>
				</div>
			</IntroductionBox>
		</>
	);
}
