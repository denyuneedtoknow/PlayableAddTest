import Phaser from "phaser";
import OptionButon from '../ui/OptionButton'
import eventsCenter from '../ui/eventEmitter'

export default class ClothingScene extends Phaser.Scene {

    constructor() {
        super("clothingScene")
        this.btnLeft = 'BottomLeft'
        this.btnRight = 'BottomRight'
        this.choice = ['clothing', 'handbag', 'makeup', 'background']

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



        this.room = this.add.image(0, 0, 'room').setOrigin(0, 0);
        Phaser.Display.Align.In.Center(this.room, this.add.zone(300, 450, 600, 900));
        this.girl = this.add.image(0, 0, 'girl_start');
        Phaser.Display.Align.In.Center(this.girl, this.room);
        const text = this.add.text(400, 150, '', { font: '20px Courier', color: 'red' });
        this.room.setDataEnabled()

        this.room.data.set('clothing', 'start');
        this.room.data.set('handbag', 'start');
        this.room.data.set('makeup', 'start');
        this.room.data.set('background', 'start');

        text.setText([
            'clothing: ' + this.room.data.get('clothing'),
            'handbag: ' + this.room.data.get('handbag'),
            'makeup: ' + this.room.data.get('makeup'),
            'background: ' + this.room.data.get('background'),

        ]);

        this.room.on('changedata', (gameObject, key) => {
            text.setText([
                'clothing: ' + this.room.data.get('clothing'),
                'handbag: ' + this.room.data.get('handbag'),
                'makeup: ' + this.room.data.get('makeup'),
                'background: ' + this.room.data.get('background')])
            this.girl.destroy()
            this.girl = this.add.image(0, 0, `girl_${this.room.data.get(`${key}`)}`);
            Phaser.Display.Align.In.Center(this.girl, this.room);

        });


        this.scene.run('ui-scene')

        eventsCenter.on('update-cloth', this.updateCloth, this)

    }

    // createButton(option, align) {
    //     const btn = new OptionButon(this, 0, 0, 'rectangle', option)
    //     this.add.existing(btn)
    //     Phaser.Display.Align.In[align](btn, this.add.zone(300, 300, 600, 900))
    //     return btn
    // }


    updateCloth(choosedOption,) {
        console.log(choosedOption.stage);
        console.log(choosedOption.option);
        this.room.data.set(`${choosedOption.stage}`, `${choosedOption.option}`)
    }
}
