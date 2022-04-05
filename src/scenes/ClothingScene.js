import Phaser from "phaser";
import v from '../ui/variables'
import eventsCenter from '../ui/eventEmitter'

export default class ClothingScene extends Phaser.Scene {

    constructor() {
        super("clothingScene")
        this.btnLeft = 'BottomLeft'
        this.btnRight = 'BottomRight'
        this.stage = v.CLOTHING_STAGE
    }

    preload() {

    }
    create() {

        this.room = this.add.image(0, 0, 'room').setOrigin(0, 0);
        Phaser.Display.Align.In.Center(this.room, this.add.zone(300, 450, 600, 900));
        this.girl = this.add.image(0, 0, 'girl_start');
        Phaser.Display.Align.In.Center(this.girl, this.room);

        this.room.setDataEnabled()

        this.room.data.set(v.CLOTHING_STAGE, 'start');
        this.room.data.set(v.HANDBAG_STAGE, '');
        this.room.data.set(v.MAKEUP_STAGE, '');
        this.room.data.set(v.BACKGROUND_STAGE, '');

        this.room.on(`changedata`, () => {

            this.girl.destroy()
            this.girl = this.add.image(0, 0, `girl_${this.room.data.get(v.CLOTHING_STAGE)}_${this.room.data.get(v.HANDBAG_STAGE)}_${this.room.data.get(v.MAKEUP_STAGE)}`);

            Phaser.Display.Align.In.Center(this.girl, this.room);

        });

        this.room.on('changedata-background', (gameObject, key) => {

            const finalClothing = this.room.data.get(v.CLOTHING_STAGE)
            const finalHandbag = this.room.data.get(v.HANDBAG_STAGE)
            const finalMakeup = this.room.data.get(v.MAKEUP_STAGE)

            this.room.destroy()
            this.room = this.add.image(0, 0, `${key}_bg`).setOrigin(0, 0);
            Phaser.Display.Align.In.Center(this.room, this.add.zone(300, 450, 600, 900));
            this.room.setDataEnabled()
            // this.guy = this.add.image(360, 490, 'guy').setScale(0.9)
            this.appearGuy()
            this.girl = this.add.image(170, 480, `girl_${finalClothing}_${finalHandbag}_${finalMakeup}`)
            // this.Paul_text = this.add.image(300, 450, 'Paul_text2').setScale(0.6)
            // this.play_now_btn = this.add.image(300, 750, 'play_now_btn').setScale(1)

        });

        this.scene.run('ui-scene')

        eventsCenter.on('update-cloth', this.updateCloth, this)

    }

    updateCloth(choosedOption,) {

        this.room.data.set(choosedOption.stage, choosedOption.option)
        this.stage = choosedOption.stage
    }
    appearGuy = () => {
        this.guy = this.add.image(800, 490, 'guy').setScale(0.9)
        this.tweens.add({
            targets: this.guy,
            x: 360,
            duration: 1000,
            ease: 'Sine.easeInOut',
            // loop: 3,
            // yoyo: true
        });
        this.time.delayedCall(1000, () => {
            this.Paul_text = this.add.image(300, 450, 'Paul_text2').setScale(0.6)

        })
        this.time.delayedCall(1500, () => {
            this.play_now_btn = this.add.image(300, 750, 'play_now_btn')
        })
    }
}
