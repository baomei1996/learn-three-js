import { Stuff } from "./Stuff";
import { geo, mat, cm1 } from "./common";
import { AnimationMixer, Mesh, BoxGeometry, MeshBasicMaterial } from "three";

export class Plaryer extends Stuff {
    constructor(info) {
        super(info);

        this.width = 0.5;
        this.height = 0.5;
        this.depth = 0.5;

        cm1.gltfLoader.load("/models/ilbuni.glb", (glb) => {
            this.mesh = glb.scene.children[0];
            this.mesh.position.set(this.x, this.y, this.z);
            this.mesh.rotation.set(
                this.rotationX,
                this.rotationY,
                this.rotationZ
            );
            this.mesh.name = this.name;
            this.mesh.castShadow = true;
            cm1.scene.add(this.mesh);

            this.mesh.animations = glb.animations;
            cm1.mixer = new AnimationMixer(this.mesh);
            this.actions = [];
            this.actions[0] = cm1.mixer.clipAction(this.mesh.animations[0]); // default
            this.actions[1] = cm1.mixer.clipAction(this.mesh.animations[1]); // fall
            this.actions[2] = cm1.mixer.clipAction(this.mesh.animations[2]); // jump

            this.actions[0].play();

            this.setCannonBody();
        });
    }
}
