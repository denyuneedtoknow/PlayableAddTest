import Phaser from 'phaser'
import OptionButon from '../ui/OptionButton'
import eventsCenter from '../ui/eventEmitter'

export default class gameInterface extends Phaser.Scene {
	constructor() {
		super('ui-scene')
		this.btnLeft = 'BottomLeft'
		this.btnRight = 'BottomRight'
		this.choice = {
			clothing: "some", handbag: "", makeup: "", background: ""
		}
	}

	create() {

		const leftButton = this.createButton('dress', this.btnLeft)
		const rightButton = this.createButton('shorts', this.btnRight)



		// leftButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
		// 	const choice = leftButton.choice.texture.key
		// 	leftButton.destroy()
		// 	rightButton.destroy()
		// 	this.choice.clothing = choice
		// 	console.log(choice)

		// })
		// rightButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
		// 	const choice = rightButton.choice.texture.key
		// 	rightButton.destroy()
		// 	leftButton.destroy()
		// 	this.choice.clothing = choice
		// 	console.log(choice);
		// })
		leftButton.setInteractive()
		rightButton.setInteractive()
		this.input.setTopOnly(true).on('gameobjectdown', this.choiceClick.bind(this))
	}

	createButton(option, align) {
		const btn = new OptionButon(this, 0, 0, 'rectangle', option)
		this.add.existing(btn)
		Phaser.Display.Align.In[align](btn, this.add.zone(300, 300, 600, 900))
		return btn
	}
	choiceClick(pointer, object) {
		// console.log(pointer);
		// console.log(object.active);
		eventsCenter.emit('update-cloth', this.choice.clothing)
	}
}
