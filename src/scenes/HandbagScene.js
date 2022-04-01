import Phaser from "phaser";
import OptionButon from '../ui/OptionButton'
import eventsCenter from '../ui/eventEmitter'

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('handbagScene')
        this.btnLeft = 'BottomLeft'
        this.btnRight = 'BottomRight'
        this.choice = {
            clothing: "", handbag: "", makeup: "", background: ""
        }

    }

    preload() {
        this.load.image('room', 'assets/room.webp')
        this.load.image('rectangle', 'assets/rectangle.webp')
    }
    create() {
        const room = this.add.image(0, 0, 'room').setOrigin(0, 0);
        Phaser.Display.Align.In.Center(room, this.add.zone(300, 450, 600, 900));
        eventsCenter.on('choice', this.updateChoice, this)

    }

    createButton(option, align) {
        const btn = new OptionButon(this, 0, 0, 'rectangle', option)
        this.add.existing(btn)
        Phaser.Display.Align.In[align](btn, this.add.zone(300, 300, 600, 900))
        return btn
    }
    updateChoice(choice) {
        this.choice = {
            clothing: `${choice}`, handbag: "", makeup: "", background: ""
        }
        console.log(this.choice);
    }
}