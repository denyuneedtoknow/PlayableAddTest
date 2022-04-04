import Phaser from 'phaser'

export default class Intro extends Phaser.Scene {
    constructor() {
        super('intro')

    }
    preload() {

    }

    create() {

        const room = this.add.image(0, 0, 'room');
        Phaser.Display.Align.In.Center(room, this.add.zone(300, 450, 600, 900));
        this.overlay = this.add.image(0, 0, 'overlay');
        Phaser.Display.Align.In.Center(this.overlay, this.add.zone(300, 450, 600, 900))

        this.Intro = this.startingGuyIntro(room)
        this.time.delayedCall(2000, () => {
            this.startingGirlIntro(room)
        })

    }
    update() {

    }
    startingGuyIntro(room) {
        this.guy = this.add.image(0, 0, 'guy');
        Phaser.Display.Align.In.Center(this.guy, room);
        this.time.delayedCall(500, () => {
            this.Paul_text = this.add.image(0, 0, 'Paul_text').setScale(0.4)
            Phaser.Display.Align.In.BottomCenter(this.Paul_text, this.guy)
            this.time.delayedCall(1500, () => {
                this.characterHide(this.guy, this.Paul_text)
            })
        })

    }
    startingGirlIntro(room) {
        this.girl_surprise = this.add.image(0, 0, 'girl_surprise');
        Phaser.Display.Align.In.Center(this.girl_surprise, room);
        this.time.delayedCall(500, () => {
            this.Lexi_text = this.add.image(0, 0, 'Lexi_text').setScale(1)
            Phaser.Display.Align.In.Center(this.Lexi_text, this.girl_surprise)
            this.time.delayedCall(1500, () => {
                this.characterHide(this.girl_surprise, this.Lexi_text)
                this.scene.start('clothingScene')
            })
        })
    }
    characterHide(character, line) {
        character.destroy()
        line.destroy()
    }
}
