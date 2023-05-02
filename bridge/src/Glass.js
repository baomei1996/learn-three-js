import { Stuff } from "./Stuff";
import { geo, mat, cm1 } from "./common";
import { Mesh } from "three";

export class Glass extends Stuff {
    constructor(info) {
        super(info);

        this.type = info.type;

        switch (this.type) {
            case "normal":
                this.material = mat.glass1;
                break;
            case "strong":
                this.material = mat.glass2;
                break;
        }

        this.geometry = geo.glass;

        this.mesh = new Mesh(this.geometry, this.material);
        this.mesh.position.set(this.x, this.y, this.z);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        cm1.scene.add(this.mesh);
    }
}