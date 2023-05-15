import { Scene, PerspectiveCamera, Color } from "three";

export class CreateScene {
    constructor(info) {
        this.renderer = info.renderer;
        this.elem = document.querySelector(info.placeholder);
        const rect = this.elem.getBoundingClientRect();

        const gbColor = info.bgColor || "white";
        const fov = info.fov || 75;
        const near = info.near || 0.1;
        const far = info.far || 200;
        const aspect = rect.width / rect.height;
        const cameraPostion = info.cameraPosition || { x: 0, y: 0, z: 3 };

        // scene
        this.scene = new Scene();
        this.scene.background = new Color(gbColor);

        //camera
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.x = cameraPostion.x;
        this.camera.position.y = cameraPostion.y;
        this.camera.position.z = cameraPostion.z;

        this.scene.add(this.camera);
    }
}
