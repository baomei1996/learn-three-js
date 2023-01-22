import * as THREE from "three";

export default function example() {
    /**
     * body에 append 하는 방식
     */

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    /**
     * canvas element를 찾아 넣는 방식
     */

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
     * (1) PerspectiveCamera
     * - 시야각 (filed of view)
     * - 종횡비 (aspect)
     * - near
     * - far
     * (2) OrthographicCamera
     * - left
     * - right
     * - top
     * - bottom
     */
    // const camera = new THREE.PerspectiveCamera(
    //     75,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    // );

    // camera.position.y = 2;
    // camera.position.z = 5;
    // camera.position.x = 1;
    // scene.add(camera);

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
        // 각도는 radian 을 이용
        // 360도는 2파이

        // mesh.rotation.y += 0.1;
        mesh.rotation.y += THREE.MathUtils.degToRad(1);
        renderer.render(scene, camera);

        // requestAnimationFrame(draw);
        renderer.setAnimationLoop(draw);
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
