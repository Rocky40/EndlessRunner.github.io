var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'background.png');

    this.load.image('mushroom', 'mushroom-clipart-1.png');
}

function create ()
{
  
    this.cameras.main.setBackgroundColor('#ffe680');
    

    platforms = this.physics.add.staticGroup();

    platforms.create(90, 468,
'ground').setScale(1.5).refreshBody();
   
     platforms.create(137, 468, 'ground').setScale(1.5);
     platforms.create(600, 400, 'ground').setScale(1.5);
     platforms.create(410, 330, 'ground').setScale(1.5);
     platforms.create(385,468, 'ground').setScale(1.5);
     platforms.create(460,348,'ground').setScale(1.5);
     platforms.create(280,468,'ground').setScale(1.5)
     
    this.add.image(300,580,'ground')

    player = this.physics.add.sprite(100, 403, 'mushroom');
    player.setScale(0.2);

player.setBounce(0.2);
player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);
}

function update ()
{
    
if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);
}
else
{
    player.setVelocityX(0);
}
if (cursors.up.isDown &&
 player.body.touching.down)
{
    player.setVelocityY(-330);
}
}
