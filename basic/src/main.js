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
 * - 시야각 (filed of view)
 * - 종횡비 (aspect)
 * - near
 * - far
 */
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.y = 2;
camera.position.z = 5;
camera.position.x = 1;
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
