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
        const text = this.add.text(400, 150, '', { font: '20px Courier', color: 'red' });
        this.room.setDataEnabled()

        this.room.data.set(v.CLOTHING_STAGE, 'start');
        this.room.data.set(v.HANDBAG_STAGE, '');
        this.room.data.set(v.MAKEUP_STAGE, '');
        this.room.data.set(v.BACKGROUND_STAGE, '');

        text.setText([
            'clothing: ' + this.room.data.get(v.CLOTHING_STAGE),
            'handbag: ' + this.room.data.get(v.HANDBAG_STAGE),
            'makeup: ' + this.room.data.get(v.MAKEUP_STAGE),
            'background: ' + this.room.data.get(v.BACKGROUND_STAGE),

        ]);

        this.room.on(`changedata`, () => {
            text.setText([
                'clothing: ' + this.room.data.get(v.CLOTHING_STAGE),
                'handbag: ' + this.room.data.get(v.HANDBAG_STAGE),
                'makeup: ' + this.room.data.get(v.MAKEUP_STAGE),
                'background: ' + this.room.data.get(v.BACKGROUND_STAGE)])
            this.girl.destroy()
            this.girl = this.add.image(0, 0, `girl_${this.room.data.get(v.CLOTHING_STAGE)}_${this.room.data.get(v.HANDBAG_STAGE)}_${this.room.data.get(v.MAKEUP_STAGE)}`);

            Phaser.Display.Align.In.Center(this.girl, this.room);


        });

        this.room.on('changedata-background', (gameObject, key) => {
            // text.setText([
            //     'clothing: ' + this.room.data.get(v.CLOTHING_STAGE),
            //     'handbag: ' + this.room.data.get(v.HANDBAG_STAGE),
            //     'makeup: ' + this.room.data.get(v.MAKEUP_STAGE),
            //     'background: ' + this.room.data.get(v.BACKGROUND_STAGE)])
            const finalClothing = this.room.data.get(v.CLOTHING_STAGE)
            const finalHandbag = this.room.data.get(v.HANDBAG_STAGE)
            const finalMakeup = this.room.data.get(v.MAKEUP_STAGE)

            this.room.destroy()
            this.room = this.add.image(0, 0, `${key}_bg`).setOrigin(0, 0);
            Phaser.Display.Align.In.Center(this.room, this.add.zone(300, 450, 600, 900));
            this.room.setDataEnabled()
            // this.scene.run('final')
            this.guy = this.add.image(340, 480, 'guy')
            this.girl = this.add.image(170, 480, `girl_${finalClothing}_${finalHandbag}_${finalMakeup}`)
            // Phaser.Display.Align.In.Center(this.girl, this.room);
            // Phaser.Display.Align.In.Center(this.guy, this.room);

        });


        this.scene.run('ui-scene')

        eventsCenter.on('update-cloth', this.updateCloth, this)

    }

    updateCloth(choosedOption,) {


        this.room.data.set(choosedOption.stage, choosedOption.option)
        this.stage = choosedOption.stage
    }
}
