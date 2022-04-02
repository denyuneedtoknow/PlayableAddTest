import Phaser from "phaser";
export default class Gem extends Phaser.Scene {
    constructor() {
        super('gem');
    }

    preload() {
        this.load.image('gem', 'assets/necklace.webp');
    }

    create() {
        const text = this.add.text(350, 250, '', { font: '16px Courier', color: '#000' });
        const gem = this.add.image(300, 300, 'gem');

        //  Store some data about this Gem:
        gem.setDataEnabled();

        gem.data.set('name', 'Red Gem Stone');
        gem.data.set('level', 2);
        gem.data.set('owner', 'Link');
        gem.data.set('gold', 50);

        text.setText([
            'Name: ' + gem.data.get('name'),
            'Level: ' + gem.data.get('level'),
            'Value: ' + gem.data.get('gold') + ' gold',
            'Owner: ' + gem.data.get('owner')
        ]);

        //  Whenever the 'gold' property is updated we call this function AFTER the change has happened:
        gem.on('changedata-gold', function (gameObject, value) {
            if (value > 500) {
                gameObject.data.values.gold = 500;
            }
            else {
                text.setText([
                    'Name: ' + gem.data.get('name'),
                    'Level: ' + gem.data.get('level'),
                    'Value: ' + gem.data.get('gold') + ' gold',
                    'Owner: ' + gem.data.get('owner')
                ]);
            }
        });

        //  Change the 'value' property when the mouse is clicked
        this.input.on('pointerdown', function () {
            gem.data.values.gold += 100;
        });
    }
}