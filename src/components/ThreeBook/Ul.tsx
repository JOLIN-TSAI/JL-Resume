import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Ul() {
	const canvasRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new THREE.Scene(); //場景
		const camera = new THREE.PerspectiveCamera( //相機
			95, //视角的垂直视野
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer(); //渲染器
		renderer.setSize(window.innerWidth, window.innerHeight);

		if (canvasRef.current) {
			canvasRef.current.innerHTML = ""; // 清理舊的 canvas
			canvasRef.current.appendChild(renderer.domElement);
		}

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;

		function animate() {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}

		renderer.setAnimationLoop(animate);

		return () => {
			// 清理渲染器
			renderer.dispose();
		};
	}, []);

	return <div ref={canvasRef} className="three-canvas-container"></div>;
}
