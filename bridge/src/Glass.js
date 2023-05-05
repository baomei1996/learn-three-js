import { Stuff } from "./Stuff";
import { geo, mat, cm1, sounds } from "./common";
import { Mesh } from "three";

export class Glass extends Stuff {
    constructor(info) {
        super(info);

        this.type = info.type;
        this.step = info.step;

        switch (this.type) {
            case "normal":
                this.material = mat.glass1;
                this.mass = 1;
                break;
            case "strong":
                this.material = mat.glass2;
                this.mass = 0;
                break;
        }

        this.geometry = geo.glass;

        this.width = this.geometry.parameters.width;
        this.height = this.geometry.parameters.height;
        this.depth = this.geometry.parameters.depth;

        this.mesh = new Mesh(this.geometry, this.material);
        this.mesh.position.set(this.x, this.y, this.z);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.name = this.name;
        this.mesh.step = this.step;
        this.mesh.type = this.type;
        cm1.scene.add(this.mesh);

        this.setCannonBody();

        this.cannonBody.addEventListener("collide", playSound);

        const sound = sounds[this.type];

        function playSound(e) {
            const strength = e.contact.getImpactVelocityAlongNormal();
            if (strength > 5) {
                sound.currentTime = 0;
                sound.play();
            }
        }
    }
}
