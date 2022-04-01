import Phaser from "phaser";
import OptionButon from '../ui/OptionButton'
import eventsCenter from '../ui/eventEmitter'

export default class ClothingScene extends Phaser.Scene {
    constructor() {
        super("clothingScene")
        this.btnLeft = 'BottomLeft'
        this.btnRight = 'BottomRight'
        this.choice = {
            clothing: "none", handbag: "", makeup: "", background: ""
        }

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
        this.girl_start = this.add.image(0, 0, 'girl_start');
        Phaser.Display.Align.In.Center(this.girl_start, this.room);


        this.room.setDataEnabled()
        this.label = this.add.text(10, 10, `${this.room.data.get('clothing')}`)
        console.log(this.room.data.get('clothing'));

        this.scene.run('ui-scene')

        eventsCenter.on('update-cloth', this.updateCloth, this)


    }

    createButton(option, align) {
        const btn = new OptionButon(this, 0, 0, 'rectangle', option)
        this.add.existing(btn)
        Phaser.Display.Align.In[align](btn, this.add.zone(300, 300, 600, 900))
        return btn
    }
    updateCloth(clothing) {
        // console.log(clothing);
        this.choice.clothing = clothing
        // this.label = this.add.text(10, 10, `${this.choice.clothing}`)
        this.label.setText(`${this.choice.clothing}`)
        this.room.data.set('clothing', `${this.choice.clothing}`)


    }
}
