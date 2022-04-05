import Phaser from 'phaser'
import OptionButon from './OptionButton'
import eventsCenter from './eventEmitter'
import v from './variables'


export default class GameInterface extends Phaser.Scene {
	constructor() {
		super('ui-scene')
		this.btnLeft = 'BottomLeft'
		this.btnRight = 'BottomRight'
		this.dressChoice = ''
		this.stages = new Map([
			[v.CLOTHING_STAGE, new Map([
				['leftButton', v.DRESS],
				['rightButton', v.SHORTS],
				['nextStage', v.HANDBAG_STAGE]
			])],
			[v.HANDBAG_STAGE, new Map([
				['leftButton', v.YELLOW_HANDBAG],
				['rightButton', v.BLUE_HANDBAG],
				['nextStage', v.MAKEUP_STAGE]
			])],
			[v.MAKEUP_STAGE, new Map([
				['leftButton', v.NECKLACE],
				['rightButton', v.SHADES],
				['nextStage', v.BACKGROUND_STAGE]
			])],
			[v.BACKGROUND_STAGE, new Map([
				['leftButton', v.BEACH],
				['rightButton', v.TERRACE],
				['nextStage', '']
			])],
		])
		this.currentStage = v.CLOTHING_STAGE
		this.leftButton = null
		this.rightButton = null
	}

	create() {
		this.input.on('gameobjectdown', this.choiceClick)
		this.createUI()
		this.createHand()
		this.createProgressBar()

	}
	update() {

		if (this.stages.get(this.currentStage).get('nextStage') === '') {
			this.scene.stop('ui-scene')
		}
	}
	createHand = () => {
		this.hand = this.physics.add.sprite(200, 700, 'hand')
		this.tweens.add({
			targets: this.hand,
			x: 500,
			duration: 1000,
			ease: 'Sine.easeInOut',
			loop: 3,
			yoyo: true
		});

		this.time.delayedCall(4000, () => {
			this.hand.destroy()
		})
	}

	createUI = (stage = this.currentStage) => {

		const stageKey = stage
		const stageValue = this.stages.get(stageKey)

		if (this.dressChoice === v.DRESS && stageKey === v.MAKEUP_STAGE) {

			this.leftButton = this.createButton(v.CHOCKER, stageKey, this.btnLeft)
		} else {
			this.leftButton = this.createButton(stageValue.get('leftButton'), stageKey, this.btnLeft)
		}

		this.rightButton = this.createButton(stageValue.get('rightButton'), stageKey, this.btnRight)
		this.leftButton.setInteractive()
		this.rightButton.setInteractive()

	}
	createProgressBar = () => {
		this.progressBar = this.add.image(300, 40, `progress_bar_0`)
	}
	updateProgressBar = (stage) => {
		this.progressBar = this.add.image(300, 40, `progress_bar_${stage}`)
	}


	createButton(option, stage, align) {

		const btn = new OptionButon(this, 0, 0, 'rectangle', option, stage)
		this.add.existing(btn)
		Phaser.Display.Align.In[align](btn, this.add.zone(300, 300, 600, 900))
		return btn
	}
	choiceClick = (pointer, object) => {

		const choosedOption = {
			stage: `${object.stage}`,
			option: `${object.choice.texture.key}`
		}
		if (object.choice.texture.key === v.DRESS) {
			this.dressChoice = v.DRESS
		}
		eventsCenter.emit('update-cloth', choosedOption)
		this.hand?.destroy()
		this.leftButton?.destroy()
		this.rightButton?.destroy()
		this.progressBar.destroy()
		if (this.stages.get(object.stage).get('nextStage') !== '') {
			const nextStage = this.stages.get(object.stage).get('nextStage')
			this.createUI(nextStage)
			this.updateProgressBar(object.stage)
		}
	}


}
