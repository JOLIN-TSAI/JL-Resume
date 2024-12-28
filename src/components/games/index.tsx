import GamesBox from "@/components/games/gameBox";

export default function GameBox() {
	const games = [
		{
			name: "翻牌卡記憶遊戲",
			url: "codepen.io/JOLIN-TSAI-the-bold/pen/ByBQQMR",
			img: "/games/memory.png",
		},
		{
			name: "貪食蛇遊戲",
			url: "codepen.io/JOLIN-TSAI-the-bold/pen/jOgJjey",
			img: "/games/Snake.png",
		},
		{
			name: "TodoList",
			url: "codepen.io/JOLIN-TSAI-the-bold/pen/KKOJjvW",
			img: "/games/TodoList.png",
		},
		{
			name: "終極密碼",
			url: "codepen.io/JOLIN-TSAI-the-bold/pen/KKOXMVB",
			img: "/games/ultimatePassword.png",
		},
	];
	return (
		<>
			<h2 style={{ margin: "0 auto" }}>趣味遊戲sideProject</h2>
			<div className="d-flex gap-2 p-3">
				{games.map((game, index) => {
					return (
						<GamesBox
							key={index}
							name={game.name}
							url={game.url}
							img={game.img}
						/>
					);
				})}
			</div>
		</>
	);
}
