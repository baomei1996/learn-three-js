import { Scene, BoxGeometry, MeshPhongMaterial } from "three";

// Canvas에 담아줄 정해진 객체
export const cm1 = {
    canvas: document.querySelector("#three-canvas"),
    scene: new Scene(),
};

export const cm2 = {
    backgroundColor: "#321321",
    lightColor: "#ffe9ac",
    floorColor: "#111",
    pillarColor: "#071d28",
};

export const geo = {
    floor: new BoxGeometry(200, 1, 200),
    pillar: new BoxGeometry(5, 10, 5),
};

export const mat = {
    floor: new MeshPhongMaterial({ color: cm2.floorColor }),
    pillar: new MeshPhongMaterial({ color: cm2.pillarColor }),
};
