import Phaser from 'phaser'

export default class Final extends Phaser.Scene {
    constructor() {
        super('final')

    }
    preload() {

    }

    create() {
        this.guy = this.add.image(0, 0, 'guy').setOrigin(-0.1, 0);

    }
}