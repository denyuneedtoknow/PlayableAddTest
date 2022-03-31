import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super('hello-world')
        // let stage = null

    }
    preload() {

        this.load.image('room', 'assets/room.webp')
        this.load.image('girl_surprise', 'assets/girl_surprise.webp')
        this.load.image('overlay', 'assets/overlay.webp')
        this.load.image('guy', 'assets/guy.webp')
        this.load.image('Paul_text', 'assets/Paul_text.webp')

    }

    create() {
        const room = this.add.image(0, 0, 'room');
        // const stage = ['GameStage:', ""]
        room.setDataEnabled()

        room.on('setdata', () => {
            console.log(Object.values(room.data.list)[0]);

        })
        room.data.set('gameStage', "guy_intro")

        room.on('changedata', () => {
            console.log(Object.values(room.data.list)[0]);

        });


        this.overlay = this.add.image(0, 0, 'overlay');

        Phaser.Display.Align.In.Center(room, this.add.zone(300, 450, 600, 900));
        Phaser.Display.Align.In.Center(this.overlay, this.add.zone(300, 450, 600, 900))

        this.guyIntro = this.startingGuyIntro(room)


    }
    update() {

    }
    startingGuyIntro(room) {
        this.guy = this.add.image(0, 0, 'guy');

        Phaser.Display.Align.In.Center(this.guy, room);

        this.time.delayedCall(1500, () => {
            this.Paul_text = this.add.image(0, 0, 'Paul_text').setScale(0.4)
            Phaser.Display.Align.In.BottomCenter(this.Paul_text, this.guy)
            this.input.on('pointerup', () => {
                this.Paul_text.destroy();
                this.guy.destroy();
                room.data.set('gameStage', "girl_intro")
            });
        })

    }

}
