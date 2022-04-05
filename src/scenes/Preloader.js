import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {

    constructor() {
        super("preloader")
    }

    preload() {
        this.load.image('overlay', 'assets/overlay.webp')

        this.load.image('room', 'assets/room.webp')
        this.load.image('girl_surprise', 'assets/girl_surprise.webp')

        this.load.image('guy', 'assets/guy.webp')
        this.load.image('Paul_text', 'assets/Paul_text.webp')
        this.load.image('Paul_text2', 'assets/Paul_text2.webp')
        this.load.image('Lexi_text', 'assets/Lexi_text.webp')

        this.load.image('girl_start', 'assets/girl_start.webp')

        this.load.image('girl_dress__', 'assets/girl_dress__.webp')
        this.load.image('girl_shorts__', 'assets/girl_shorts__.webp')

        this.load.image('girl_dress_blue_hb_', 'assets/girl_dress_blue_hb_.webp')
        this.load.image('girl_dress_yellow_hb_', 'assets/girl_dress_yellow_hb_.webp')
        this.load.image('girl_shorts_blue_hb_', 'assets/girl_shorts_blue_hb_.webp')
        this.load.image('girl_shorts_yellow_hb_', 'assets/girl_shorts_yellow_hb_.webp')

        this.load.image('girl_dress_blue_hb_shades', 'assets/girl_dress_blue_hb_shades.webp')
        this.load.image('girl_dress_yellow_hb_shades', 'assets/girl_dress_yellow_hb_shades.webp')
        this.load.image('girl_dress_blue_hb_chocker', 'assets/girl_dress_blue_hb_chocker.webp')
        this.load.image('girl_dress_yellow_hb_chocker', 'assets/girl_dress_yellow_hb_chocker.webp')
        this.load.image('girl_shorts_blue_hb_shades', 'assets/girl_shorts_blue_hb_shades.webp')
        this.load.image('girl_shorts_yellow_hb_shades', 'assets/girl_shorts_yellow_hb_shades.webp')
        this.load.image('girl_shorts_blue_hb_necklace', 'assets/girl_shorts_blue_hb_necklace.webp')
        this.load.image('girl_shorts_yellow_hb_necklace', 'assets/girl_shorts_yellow_hb_necklace.webp')

        this.load.image('rectangle', 'assets/rectangle.webp')
        this.load.image('dress', 'assets/dress.webp')
        this.load.image('shorts', 'assets/shorts.webp')
        this.load.image('beach', 'assets/beach.webp')
        this.load.image('terrace', 'assets/terrace.webp')
        this.load.image('beach_bg', 'assets/beach_bg.webp')
        this.load.image('terrace_bg', 'assets/terrace_bg.webp')
        this.load.image('blue_hb', 'assets/blue_hb.webp')
        this.load.image('yellow_hb', 'assets/yellow_hb.webp')
        this.load.image('necklace', 'assets/necklace.webp')
        this.load.image('shades', 'assets/shades.webp')
        this.load.image('chocker', 'assets/chocker.webp')
        this.load.image('play_now_btn', 'assets/play_now_btn.webp')
        this.load.image('hand', 'assets/hand.webp')

    }
    create() {
        this.scene.start('clothingScene')
    }
}