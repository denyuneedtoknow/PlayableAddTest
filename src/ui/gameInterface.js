import Phaser from 'phaser'
import OptionButon from '../ui/OptionButton'
import eventsCenter from '../ui/eventEmitter'

const CLOTHING_STAGE = 'clothing'

export default class gameInterface extends Phaser.Scene {
	constructor() {
		super('ui-scene')
		this.btnLeft = 'BottomLeft'
		this.btnRight = 'BottomRight'
		this.stages = new Map([
			[CLOTHING_STAGE, new Map([
				['leftButton', 'dress'],
				['rightButton', 'shorts'],
				['nextStage', 'handbag']
			])],
			['handbag', new Map([
				['leftButton', 'yellow_hb'],
				['rightButton', 'blue_hb'],
				['nextStage', 'makeup']
			])],
			['makeup', new Map([
				['leftButton', 'necklace'],
				['rightButton', 'shades'],
				['nextStage', 'background']
			])],
			['background', new Map([
				['leftButton', 'beach'],
				['rightButton', 'terrace'],
				['nextStage', '']
			])],
		])
		this.currentStage = CLOTHING_STAGE
		this.leftButton = null
		this.rightButton = null
	}

	create() {
		this.input.on('gameobjectdown', this.choiceClick)
		this.createUI()

	}
	update() {
		if (this.stages.get(this.currentStage).get('nextStage') === '') {
			this.scene.stop('ui-scene')
		}
	}

	createUI = (stage = this.currentStage) => {
		const stageKey = stage
		const stageValue = this.stages.get(stageKey)
		this.leftButton = this.createButton(stageValue.get('leftButton'), stageKey, this.btnLeft)
		this.rightButton = this.createButton(stageValue.get('rightButton'), stageKey, this.btnRight)
		this.leftButton.setInteractive()
		this.rightButton.setInteractive()
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

		eventsCenter.emit('update-cloth', choosedOption)

		this.leftButton?.destroy()
		this.rightButton?.destroy()

		if (this.stages.get(object.stage).get('nextStage') !== '') {
			const nextStage = this.stages.get(object.stage).get('nextStage')
			this.createUI(nextStage)
		}
	}


}
