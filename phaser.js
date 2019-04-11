var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky','assets/sky.png');
    this.load.image('ground','assets/platform.png');
    this.load.spritesheet('dude','assets/dude.png', 
    { frameWidth:32, frameHeight: 48}
    );
}
var platform;

function create ()
{
    this.add.image(400,300, 'sky');

    platforms = 
this.physics.add.staticGroup();

    platforms.create(400, 568,
'ground').setScale(2).refreshBody();

        platform.create(600,400, 'ground');
        platform.create(50, 250, 'ground');
        platform.create(750, 220, 'ground');

    this.add.image(400,300,'ground')
}

function update ()
{
}

