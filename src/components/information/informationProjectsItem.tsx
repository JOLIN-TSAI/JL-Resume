import IntroductionBox from "@/components/information/introductionBox";
import Sty from "@/components/information/informationProject.module.scss";
import { RefObject } from "react";

interface HeaderProps {
	scroll: (ref: RefObject<HTMLElement>) => void;
	sectionRefs: RefObject<HTMLElement>[];
}

export default function InformationProjectsItem({
	scroll,
	sectionRefs,
}: HeaderProps) {
	return (
		<>
			<IntroductionBox sizeWidth={360} sizeHeight={360}>
				<div className="d-flex justify-content-center">
					<IntroductionBox sizeWidth={110} sizeHeight={100}>
						<h6>團隊專案:</h6>
						<p className={Sty.number}>1</p>
					</IntroductionBox>
					<IntroductionBox sizeWidth={200} sizeHeight={100}>
						<h6>看更多</h6>
						<div className="d-flex justify-content-center">
							<button className={Sty.btn}>
								<a
									onClick={() => scroll(sectionRefs[3])}
									className="text-white"
									style={{ cursor: "pointer" }}>
									影片
								</a>
							</button>
							<button className={Sty.btn}>
								<a
									href="https://drive.google.com/file/d/1c8Cz_KO0xm74zpnxhXbMVTXf9eB6rYMl/view?usp=sharing"
									className="text-white"
									target="_blank"
									rel="noopener noreferrer">
									企劃書
								</a>
							</button>

							<button className={Sty.btn}>
								<a
									href="https://sweetytime.hkg1.zeabur.app"
									className="text-white"
									target="_blank"
									rel="noopener noreferrer">
									網站
								</a>
							</button>
						</div>
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
