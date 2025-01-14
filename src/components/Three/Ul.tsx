import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Ul() {
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

		camera.position.z = 5; //與對象的遠近

		function animate() {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}
		renderer.setAnimationLoop(animate); //設置動畫循環

		return () => {
			renderer.dispose();
		};
	}, []);

	return <div ref={canvasRef} className="three-canvas-container"></div>;
}

export function Line() {
	const canvasRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		if (canvasRef.current) {
			canvasRef.current.innerHTML = "";
			canvasRef.current.appendChild(renderer.domElement);
		}

		const camera = new THREE.PerspectiveCamera(
			95,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 100); //位置距離場景中心X,Y,Z
		camera.lookAt(0, 0, 0);

		const material = new THREE.LineBasicMaterial({ color: "0x0000ff" });
		const points = []; //將點放進空陣列中
		points.push(new THREE.Vector3(-10, 0, 0)); //點1的位置XYZ
		points.push(new THREE.Vector3(0, 10, 0)); //點2的位置XYZ
		points.push(new THREE.Vector3(10, 0, 0)); //點3的位置XYZ
		points.push(new THREE.Vector3(20, 10, 0));
		points.push(new THREE.Vector3(30, 0, 0));

		const geometry = new THREE.BufferGeometry().setFromPoints(points);
		const line = new THREE.Line(geometry, material);
		scene.add(line);
		renderer.render(scene, camera);
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			renderer.dispose();
		};
	}, []);
	return <div ref={canvasRef} className="three-canvas-container"></div>;
}
