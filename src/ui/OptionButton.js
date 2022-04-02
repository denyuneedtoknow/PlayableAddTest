import Phaser from "phaser";

export default class OptionButon extends Phaser.GameObjects.Container {
    constructor(scene, x, y, texture, option,) {
        super(scene, x, y)
        this.image = scene.add.image(0, 0, texture)
        this.choice = scene.add.image(0, 0, option)
        this.scene.add.container(0, 0, [this.image, this.choice])
        this.add(this.image)
        this.add(this.choice)
        this.setSize(this.image.height, this.image.width)
    }

}