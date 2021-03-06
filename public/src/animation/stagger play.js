var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create ()
{
    var config = {
        key: 'flash',
        frames: this.anims.generateFrameNumbers('diamonds', { start: 0, end: 4 }),
        framerate: 6,
        yoyo: true,
        repeat: -1
    };

    this.anims.create(config);

    layer = this.add.layer();

    layer.createMultiple({ key: 'diamonds', frame: 0, repeat: 279 });

    layer.gridAlign({ width: 20, height: 20, cellWidth: 38, x: 22, y: 32 });

    this.anims.staggerPlay('flash', layer.getChildren(), 0.025);
}
