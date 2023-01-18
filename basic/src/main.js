import * as THREE from "three";

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
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * Scene
 */
const scene = new THREE.Scene();
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
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

renderer.render(scene, camera);
