import * as THREE from "three";

/**
 * 주제: Fog(안개)
 */

export default function example() {
    const canvas = document.getElementById("three-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    /**
     * Scene
     */
    const scene = new THREE.Scene();

    // (빛의 컬러, 빛의 강도)
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.z = 2;
    light.position.x = 1;
    scene.add(light);
    /**
     * Camera
     */
    const camera = new THREE.OrthographicCamera(
        -(window.innerWidth / window.innerHeight),
        window.innerWidth / window.innerHeight,
        1,
        -1,
        0.1,
        100
    );

    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 2;

    camera.lookAt(0, 0, 0);
    camera.zoom = 0.5;
    camera.updateProjectionMatrix();
    scene.add(camera);

    /**
     * Mesh
     * MeshBasicMaterial - 빛에 반응을 하지 않음
     */
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0xff0000,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function draw() {
        renderer.render(scene, camera);
    }

    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        // updateProjectionMatrix 카메라에 투영에 관련되 값에 변화가 있을 경우 실행해야 함
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    window.addEventListener("resize", setSize);

    draw();
}
