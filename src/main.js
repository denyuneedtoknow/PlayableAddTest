import Phaser from 'phaser'
import Intro from './scenes/Intro'
import ClothingScene from './scenes/ClothingScene'
import Preloader from './scenes/Preloader'
import GameInterface from './ui/GameInterface'



const config = {
	type: Phaser.AUTO,
	width: 600,
	height: 900,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [Preloader, Intro, ClothingScene, GameInterface]
}

export default new Phaser.Game(config)
