import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

// ----- 주제: Spot Light

export default function example() {
    // Renderer
    const canvas = document.querySelector("#three-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.shadowMap.enabled = true;
    // 기본값
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.y = 1.5;
    camera.position.z = 4;
    scene.add(camera);

    // Light
    // AmbientLight  => 은은하게 전체적으로 색을 깔아주는 기능을 하는 조명
    const ambientLight = new THREE.AmbientLight("white", 0.5);
    scene.add(ambientLight);

    //Spot Light
    const light = new THREE.SpotLight("white", 1, 10, Math.PI / 6);
    light.position.x = -5;
    light.position.y = 3;
    scene.add(light);

    const lightHelper = new THREE.SpotLightHelper(light);
    scene.add(lightHelper);

    // 그림자 설정
    light.castShadow = true;

    // 그림자 퀄리티 설정
    light.shadow.mapSize.width = 1024; // 기본값 512
    light.shadow.mapSize.height = 1024;
    // light.shadow.radius = 5;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 10;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Mesh
    const planeGoemetry = new THREE.PlaneGeometry(10, 10, 10);
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const sphereGeometry = new THREE.SphereGeometry(0.7, 16, 16);

    const material1 = new THREE.MeshStandardMaterial({
        color: "white",
    });
    const material2 = new THREE.MeshStandardMaterial({
        color: "gold",
    });
    const material3 = new THREE.MeshStandardMaterial({
        color: "gold",
    });

    const plane = new THREE.Mesh(planeGoemetry, material1);
    const box = new THREE.Mesh(boxGeometry, material2);
    const sphere = new THREE.Mesh(sphereGeometry, material3);

    plane.rotation.x = -Math.PI * 0.5;
    box.position.set(1, 1, 0);
    sphere.position.set(-1, 1, 0);

    // 그림자 설정
    plane.receiveShadow = true;
    box.castShadow = true;
    box.receiveShadow = true;
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    scene.add(plane, box, sphere);

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);

    // Dat GUI
    const gui = new dat.GUI();
    gui.add(light.position, "x", -5, 5, 0.1).name("light X");
    gui.add(light.position, "y", -5, 5, 0.1).name("light Y");
    gui.add(light.position, "z", -5, 5, 0.1).name("light Z");

    // 그리기
    const clock = new THREE.Clock();

    function draw() {
        const time = clock.getElapsedTime();

        // light.position.x = Math.cos(time * 5);
        // light.position.z = Math.sin(time * 5);

        renderer.render(scene, camera);
        renderer.setAnimationLoop(draw);
    }

    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener("resize", setSize);

    draw();
}
