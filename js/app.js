// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.EnemyRun = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.EnemyRun*dt;
    if (this.x <= 500){
        this.x += this.EnemyRun*dt;
    } else {
        this.x = -40;
    }

//this statement eleminates the player when hit by bugs and sends to its default positions
    if (player.x >= this.x - 20 && player.x <= this.x + 20 ){
        if(player.y >= this.y-20 && player.y <= this.y + 20){
            player.reset();
        }
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// this fuction is a class with default positions of player object
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movements){
    this.keys = movements;
}

Player.prototype.update = function(){
    if(this.keys === 'left' && this.x > 0){
        this.x = this.x - 100;
    } else if (this.keys === 'right' && this.x < 400){
        this.x = this.x + 100;
    } else if  (this.keys === 'down' && this.y < 400){
        this.y = this.y + 90;
    } else if (this.keys === 'up' && this.y > 0){
        this.y = this.y - 90;
    }
    this.keys= '';

    if (this.y <= 0){
        player.reset();
        setTimeout(function(){
            alert("You Won the game");
        },100);
    }
};

//this resets the player to default positions;
Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let allEnemies =  [];

//this function create enemies
function createEnemies() {
    var bug1 = new Enemy(-60, 60, 152);
    var bug2 = new Enemy (-40, 140, 155);
    var bug3 = new Enemy (-80, 220, 160);
    var bug4 = new Enemy (-400, 60, 155);
    var bug5 = new Enemy (-200, 140, 159);
    var bug6 = new Enemy (-210, 220, 160);
    allEnemies.push(bug1, bug2, bug3, bug4, bug5, bug6);
}

createEnemies();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
