import Phaser from 'phaser'
import OptionButon from '../ui/OptionButton'
import eventsCenter from '../ui/eventEmitter'

export default class gameInterface extends Phaser.Scene {
	constructor() {
		super('ui-scene')
		this.btnLeft = 'BottomLeft'
		this.btnRight = 'BottomRight'
		this.stage = ['clothing', 'handbag', 'makeup', 'background']
		this.choice = [["dress", "shorts"], ["yellow_hb", "blue_hb"], ["neclace", "shades"], ["beach", "terrace"]]
	}

	create() {
		this.cycling()
		// const leftButton = this.createButton('dress', this.stage[0], this.btnLeft)
		// const rightButton = this.createButton('shorts', this.stage[0], this.btnRight)

		// leftButton.setInteractive()
		// rightButton.setInteractive()
		// this.input.setTopOnly(true).on('gameobjectdown', this.choiceClick.bind(this))
	}

	createButton(option, stage, align) {
		const btn = new OptionButon(this, 0, 0, 'rectangle', option, stage)
		this.add.existing(btn)
		Phaser.Display.Align.In[align](btn, this.add.zone(300, 300, 600, 900))
		// console.log(btn);
		return btn
	}
	choiceClick(pointer, object) {

		const choosedOption = {
			stage: `${object.stage}`,
			option: `${object.choice.texture.key}`
		}
		// console.log(choosedOption);
		eventsCenter.emit('update-cloth', choosedOption)

	}
	cycling() {
		for (let i = 0; i < this.stage.length; i++) {
			console.log(this.stage[i])
			for (let j = 0; j < this.choice[i].length; j++) {
				console.log(this.choice[i][j]);
				const leftButton = this.createButton(this.choice[i][0], this.stage[i], this.btnLeft)
				const rightButton = this.createButton(this.choice[i][1], this.stage[i], this.btnRight)
				leftButton.setInteractive()
				rightButton.setInteractive()
				this.input.setTopOnly(true).on('gameobjectdown', this.choiceClick.bind(this))
				console.log(leftButton);
				console.log(rightButton);
			}
		}
	}

}
