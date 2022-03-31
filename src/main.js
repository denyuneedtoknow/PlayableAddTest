import Phaser from 'phaser'
// import Intro from './scenes/Intro'
import GameScene from './scenes/GameScene'


const config = {
	type: Phaser.AUTO,
	width: 600,
	height: 900,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
		}
	},
	// scene: [Intro, GameScene]
	scene: [GameScene]
}

export default new Phaser.Game(config)
