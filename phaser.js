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
   
     platforms.create(400, 468, 'ground').setScale(1.5);
     platforms.create(800, 230, 'ground').setScale(1.5);
     platforms.create(510, 730, 'ground').setScale(1.5);
     platforms.create(585, 468, 'ground').setScale(1.5);
     platforms.create(460, 360,'ground').setScale(1.5);
     platforms.create(280, 668,'ground').setScale(1.5);
     platforms.create(200, 700,'ground').setScale(3);
     
    this.add.image(270,380,'ground')

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
