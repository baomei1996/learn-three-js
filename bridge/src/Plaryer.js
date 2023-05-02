import { Stuff } from "./Stuff";
import { geo, mat, cm1 } from "./common";
import { AnimationMixer, Mesh, BoxGeometry, MeshBasicMaterial } from "three";

export class Plaryer extends Stuff {
    constructor(info) {
        super(info);

        cm1.gltfLoader.load("/models/ilbuni.glb", (glb) => {
            this.modelMesh = glb.scene.children[0];
            this.modelMesh.position.set(this.x, this.y, this.z);
            this.modelMesh.rotation.set(
                this.rotationX,
                this.rotationY,
                this.rotationZ
            );
            this.modelMesh.castShadow = true;
            cm1.scene.add(this.modelMesh);

            this.modelMesh.animations = glb.animations;
            cm1.mixer = new AnimationMixer(this.modelMesh);
            this.actions = [];
            this.actions[0] = cm1.mixer.clipAction(
                this.modelMesh.animations[0]
            ); // default
            this.actions[1] = cm1.mixer.clipAction(
                this.modelMesh.animations[1]
            ); // fall
            this.actions[2] = cm1.mixer.clipAction(
                this.modelMesh.animations[2]
            ); // jump

            this.actions[0].play();
        });
    }
}
