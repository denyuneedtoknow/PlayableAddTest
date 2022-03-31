import Phaser from "phaser";
import OptionButon from './OptionButton'
export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    preload() {
        this.load.image('room', 'assets/room.webp')
        this.load.image('girl_start', 'assets/girl_start.webp')
        this.load.image('rectangle', 'assets/rectangle.webp')
        this.load.image('dress', 'assets/dress.webp')
        this.load.image('shorts', 'assets/shorts.webp')
        this.load.image('girl_dress', 'assets/girl_dress.webp')
        this.load.image('girl_shorts', 'assets/girl_shorts.webp')

    }
    create() {
        const room = this.add.image(0, 0, 'room').setOrigin(0, 0);
        Phaser.Display.Align.In.Center(room, this.add.zone(300, 450, 600, 900));
        this.girl_start = this.add.image(0, 0, 'girl_start');
        Phaser.Display.Align.In.Center(this.girl_start, room);

        const leftButton = new OptionButon(this, 0, 0, 'rectangle', 'dress',)
        const rightButton = new OptionButon(this, 0, 0, 'rectangle', 'shorts',)
        this.add.existing(leftButton)
        this.add.existing(rightButton)
        Phaser.Display.Align.In.BottomLeft(leftButton, this.add.zone(300, 300, 600, 900))
        Phaser.Display.Align.In.BottomRight(rightButton, this.add.zone(300, 300, 600, 900))

        leftButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            const choice = leftButton.choice.texture.key
            console.log(choice);
            this.girl_start.destroy()
            this.girl = this.add.image(0, 0, `girl_${choice}`)
            Phaser.Display.Align.In.Center(this.girl, room)

        })
        rightButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            const choice = rightButton.choice.texture.key
            console.log(choice);
            this.girl_start.destroy()
            this.girl = this.add.image(0, 0, `girl_${choice}`)
            Phaser.Display.Align.In.Center(this.girl, room)
        })
    }
}