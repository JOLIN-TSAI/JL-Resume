import React, { useRef } from "react";
import GamesBox from "@/components/games/gameBox";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function GameBox() {
	const containerRef = useRef<HTMLDivElement>(null);

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

	// 容器樣式
	const containerStyle: React.CSSProperties = {
		display: "flex",
		justifyContent: "center",
		overflow: "auto",
		gap: "16px",
		padding: "16px",
		scrollSnapType: "x mandatory",
		scrollbarWidth: "none",
		msOverflowStyle: "none",
	};

	// 卡片樣式
	const cardStyle: React.CSSProperties = {
		scrollSnapAlign: "start",
		width: "300px",
		height: "300px",
		backgroundColor: "#f9f9f9",
	};

	return (
		<div
			style={{
				position: "relative",
				overflow: "hidden",
				backgroundColor: "black",
				padding: "15px 0",
			}}>
			<h2
				style={{
					margin: "0 auto",
					textAlign: "center",
					color: "white",
				}}>
				趣味遊戲 Side Project
			</h2>
			<div ref={containerRef} style={containerStyle}>
				{games.map((game, index) => (
					<div key={index} style={cardStyle}>
						<GamesBox
							name={game.name}
							url={game.url}
							img={game.img}
						/>
					</div>
				))}
			</div>

			{/* 左右箭頭（裝飾用） */}
			<div
				style={{
					position: "absolute",
					left: "10%",
					top: "50%",
					cursor: "not-allowed",
				}}>
				<FaArrowLeft size={30} color="#ccc" />
			</div>
			<div
				style={{
					position: "absolute",
					right: "10%",
					top: "50%",
					cursor: "not-allowed",
				}}>
				<FaArrowRight size={30} color="#ccc" />
			</div>
		</div>
	);
}
