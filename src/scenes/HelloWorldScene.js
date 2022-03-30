import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super('hello-world')
    }
    preload() {

        this.load.image('room', 'assets/room.webp')
        this.load.image('girl_surprise', 'assets/girl_surprise.webp')
        this.load.image('overlay', 'assets/overlay.webp')

    }

    create() {
        const room = this.add.image(0, 0, 'room');
        const overlay = this.add.image(0, 0, 'overlay');
        const girl = this.add.image(0, 0, 'girl_surprise');
        //  Center the picture in the game
        Phaser.Display.Align.In.Center(room, this.add.zone(300, 450, 600, 900));
        Phaser.Display.Align.In.Center(overlay, this.add.zone(300, 450, 600, 900));

        //  Center the sprite to the picture
        Phaser.Display.Align.In.Center(girl, room);

    }
}
