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
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
