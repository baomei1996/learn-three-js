import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// ----- 주제: 로딩 매니저(여러개의 텍스트 이미지 로드하기)
export default function example() {
    // 텍스처 이미지 로드
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onStart = () => {
        console.log("로드시작");
    };
    loadingManager.onProgress = (img) => {
        console.log(img, "로드");
    };
    loadingManager.onLoad = () => {
        console.log("로드완료");
    };
    loadingManager.onError = () => {
        console.log("로드에러");
    };

    // 텍스처
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const baseColortex = textureLoader.load(
        "./textures/brick/Terracotta_Tiles_002_Base_Color.jpg"
    );
    const heightColortex = textureLoader.load(
        "./textures/brick/Terracotta_Tiles_002_Height.png"
    );
    const normalColortex = textureLoader.load(
        "./textures/brick/Terracotta_Tiles_002_Normal.jpg"
    );
    const roughnessColortex = textureLoader.load(
        "./textures/brick/Terracotta_Tiles_002_Roughness.jpg"
    );
    // Renderer
    const canvas = document.querySelector("#three-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

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
    const ambientLight = new THREE.AmbientLight("white", 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 1);
    directionalLight.position.x = 1;
    directionalLight.position.z = 2;
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Mesh

    // MeshStandartMaterial은 roughness로 반사광을 조절할 수 있다.
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material1 = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: roughnessColortex,
    });

    const mesh = new THREE.Mesh(geometry, material1);
    mesh.position.x = -1.5;

    scene.add(mesh);

    // 그리기
    const clock = new THREE.Clock();

    function draw() {
        const delta = clock.getDelta();

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
