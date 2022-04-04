import Phaser from 'phaser'
// import Intro from './scenes/Intro'
import ClothingScene from './scenes/ClothingScene'
import Preloader from './scenes/Preloader'
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
	scene: [Preloader, ClothingScene, gameInterface,]
}

export default new Phaser.Game(config)
