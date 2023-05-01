import { Scene, BoxGeometry, MeshPhongMaterial, SphereGeometry } from "three";

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
    barColor: "#441c1d",
    glassColor: "#9fdfff",
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
