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

    this.load.image('dude', 'kagato_sprites.gif')
    
this.anims.create({
    key: 'left',
    frames:
this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1

})
}
var platform;

function create ()
{
  
    this.cameras.main.setBackgroundColor('#ffe680');
    

    platforms = this.physics.add.staticGroup();

    platforms.create(90, 468,
'ground').setScale(1.5).refreshBody();
   
     platforms.create(280, 470, 'ground');
     platforms.create(400, 400, 'ground');
     platforms.create(175, 520, 'ground');

    this.add.image(300,580,'ground')

    player = this.physics.add.sprite(100, 403, 'dude',);

player.setBounce(0.2);
player.setCollideWorldBounds(true);

this.anims.create({
    key: 'left',
    frames:
this.anims.generateFrameNumbers('dude', { start:0, end: 1}),
    frameRate:10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [{key: 'dude', frame:4} ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames:
this.anims.generateFrameNumbers('dude', {start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
})
}

function update ()
{

}
