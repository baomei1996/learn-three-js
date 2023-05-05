import { World, Material } from "cannon-es";
import { Scene, BoxGeometry, MeshPhongMaterial, SphereGeometry } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Canvas에 담아줄 정해진 객체
export const cm1 = {
    scene: new Scene(),
    gltfLoader: new GLTFLoader(),
    mixer: undefined,

    // cannon
    world: new World(),
    defaultMaterial: new Material("default"),
    glassMaterial: new Material("glass"),
    playerMaterial: new Material("player"),
};

export const cm2 = {
    step: 0,
    backgroundColor: "#321321",
    lightColor: "#ffe9ac",
    floorColor: "#111",
    pillarColor: "#071d28",
    barColor: "#441c1d",
    glassColor: "#9fdfff",
    lightOffColor: "#222",
};

export const geo = {
    floor: new BoxGeometry(200, 1, 200),
    pillar: new BoxGeometry(5, 10, 5),
    bar: new BoxGeometry(0.1, 0.3, 1.2 * 21),
    sideLight: new SphereGeometry(0.1, 6, 6),
    glass: new BoxGeometry(1.2, 0.05, 1.2),
};

export const mat = {
    floor: new MeshPhongMaterial({ color: cm2.floorColor }),
    pillar: new MeshPhongMaterial({ color: cm2.pillarColor }),
    bar: new MeshPhongMaterial({ color: cm2.barColor }),
    sideLight: new MeshPhongMaterial({ color: cm2.lightColor }),
    glass1: new MeshPhongMaterial({
        color: cm2.glassColor,
        transparent: true,
        opacity: 0.1,
    }),
    glass2: new MeshPhongMaterial({
        color: cm2.glassColor,
        transparent: true,
        opacity: 0.2,
    }),
};

const normalSound = new Audio();
normalSound.src = "/sounds/Crash.mp3";
const strongSound = new Audio();
strongSound.src = "/sounds/Wood Hit Metal Crash.mp3";

export const sounds = {
    normal: normalSound,
    strong: strongSound,
};
