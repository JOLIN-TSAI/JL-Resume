import Sty from "@/components/project/project.module.scss";
export default function Project() {
	const shops = [
		{
			id: "1",
			title: "網站前台",
			url: "/project/sweetyTime/frontDesk.png",
		},
		{
			id: "2",
			title: "詳細頁",
			url: "/project/sweetyTime/detailPage.png",
		},
		{
			id: "3",
			title: "admin後台商家管理",
			url: "/project/sweetyTime/adminBackstage-CD.png",
		},
		{
			id: "4",
			title: "admin後台商家RU功能",
			url: "/project/sweetyTime/adminBackstage-RU.png",
		},
		{
			id: "5",
			title: "商家後台訂單管理",
			url: "/project/sweetyTime/shopBackstage-list.png",
		},
		{
			id: "6",
			title: "商家後台訂單內容",
			url: "/project/sweetyTime/shopBackstage-detail.png",
		},
	];
	return (
		<>
			<div>
				<h2>SweetyTime甜覓時光</h2>

				<h4>品牌簡介</h4>
				<p>
					甜覓食光SweetyTime 是一個專注於甜點的綜合平台，
					致力於為消費者提供一站式的甜點購物體驗。
					我們匯集眾多優質甜點店家，讓消費者能輕鬆探索與選擇心儀的甜品，無論購物還是學習甜點製作，都能在這裡享受甜蜜時光。填補了現今電商平台中對甜點領域關注的空白。
				</p>
				<h4>
					個人使用技術：<span></span>
				</h4>
			</div>
			<div className={Sty.project}>
				{shops.map((shop, index) => (
					<div key={index} className={Sty.items}>
						<div className={Sty.decorate}>{shop.id}</div>
						<h3>{shop.title}</h3>
						<div className={Sty.imageBox}>
							<img src={shop.url} alt="" className={Sty.image} />
						</div>
					</div>
				))}
			</div>
		</>
	);
}
