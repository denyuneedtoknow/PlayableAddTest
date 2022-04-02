import Phaser from 'phaser'
// import Intro from './scenes/Intro'
import ClothingScene from './scenes/ClothingScene'
import Gem from './scenes/Gem'
import gameInterface from './ui/gameInterface'


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
	scene: [ClothingScene, gameInterface, Gem]
}

export default new Phaser.Game(config)
