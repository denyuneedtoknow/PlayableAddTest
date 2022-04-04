import Phaser from "phaser";

import eventsCenter from '../ui/eventEmitter'

export default class ClothingScene extends Phaser.Scene {

    constructor() {
        super("clothingScene")
        this.btnLeft = 'BottomLeft'
        this.btnRight = 'BottomRight'
        this.stage = 'clothing'
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

        this.room.data.set('clothing', 'start');
        this.room.data.set('handbag', '');
        this.room.data.set('makeup', '');
        this.room.data.set('background', '');

        text.setText([
            'clothing: ' + this.room.data.get('clothing'),
            'handbag: ' + this.room.data.get('handbag'),
            'makeup: ' + this.room.data.get('makeup'),
            'background: ' + this.room.data.get('background'),

        ]);

        this.room.on(`changedata`, () => {
            text.setText([
                'clothing: ' + this.room.data.get('clothing'),
                'handbag: ' + this.room.data.get('handbag'),
                'makeup: ' + this.room.data.get('makeup'),
                'background: ' + this.room.data.get('background')])
            this.girl.destroy()
            this.girl = this.add.image(0, 0, `girl_${this.room.data.get('clothing')}_${this.room.data.get('handbag')}_${this.room.data.get('makeup')}`);

            Phaser.Display.Align.In.Center(this.girl, this.room);

            console.log(this.stage);
        });

        this.room.on('changedata-background', (gameObject, key) => {
            text.setText([
                'clothing: ' + this.room.data.get('clothing'),
                'handbag: ' + this.room.data.get('handbag'),
                'makeup: ' + this.room.data.get('makeup'),
                'background: ' + this.room.data.get('background')])
            this.room.destroy()
            this.room = this.add.image(0, 0, `${key}_bg`).setOrigin(0, 0);
            Phaser.Display.Align.In.Center(this.room, this.add.zone(300, 450, 600, 900));
            this.room.setDataEnabled()

        });


        this.scene.run('ui-scene')

        eventsCenter.on('update-cloth', this.updateCloth, this)

    }

    updateCloth(choosedOption,) {


        this.room.data.set(choosedOption.stage, choosedOption.option)
        this.stage = choosedOption.stage
    }
}
