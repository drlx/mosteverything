// This sectin contains some game constants. It is not super interesting

var MAKE_SOUNDS = () => {
    var THEME_MUSIC = new Audio('theme.mp3');
    THEME_MUSIC.play();
    THEME_MUSIC.loop = true;
    var START_SOUND = new Audio('start.mp3');
    START_SOUND.play();
    var ENGINE_NOISE = new Audio('engine0.wav');
    ENGINE_NOISE.play();
    ENGINE_NOISE.loop = true;
    var SPEED_UP_SOUND = new Audio('engine8.wav');

}

MAKE_SOUNDS();

var ENEMY_NUMBER = 1
var RANDOM_ENEMY = () => {
    //    return Math.floor(Math.random()*6)+1
    ENEMY_NUMBER++;
    if (ENEMY_NUMBER >= 6) {
        ENEMY_NUMBER = 1;
    }
    return ENEMY_NUMBER;
};



var GAME_WIDTH = 500;
var GAME_HEIGHT = 750;

var ENEMY_WIDTH = 100;
var ENEMY_HEIGHT = 100;
var MAX_ENEMIES = 3;

var PLAYER_WIDTH = 100;
var PLAYER_HEIGHT = 100;
var PLAYER_SPEED = 0.15;

var ITEM_HEIGHT = 100;
var ITEM_WIDTH = 100;
var MAX_ITEMS = 2;

var ROAD_HEIGHT = 250;
var ROAD_WIDTH = 500;
var MAX_ROAD = 5;
var ROAD_SPEED = 0.25

var SHELL_HEIGHT = 50;
var SHELL_WIDTH = 50;
var MAX_SHELLS = 3;

// These two constants keep us from using "magic numbers" in our code
var LEFT_ARROW_CODE = 37;
var RIGHT_ARROW_CODE = 39;
var UP_ARROW_CODE = 38;
var DOWN_ARROW_CODE = 40;
var SPACE_BAR_CODE = 32;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';
var MOVE_UP = 'up';
var MOVE_DOWN = 'down';
var SHOOT = 'fire';

//Smooth movement

var keys = { left: false, right: false, up: false, down: false };

// Preload game images
var images = {};
['rainbowroad.png', 'enemy1.png', 'enemy2.png', 'enemy3.png',
    'enemy4.png', 'enemy5.png', 'player1.png', 'enemy6.png', 'restart.png',
    'playerleft1.png', 'playerright1.png', 'rainbowstart.png', 'redshell.png','item.png'].forEach(imgName => {
        var img = document.createElement('img');
        img.src = 'images/' + imgName;
        images[imgName] = img;
    });

images['rainbowroad.png'].id = 'road';

class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}

// This section is where you will be doing most of your coding
class Enemy extends Entity {
    constructor(xPos) {
        super();
        this.x = xPos;
        this.y = -ENEMY_HEIGHT - Math.random() * 600;
        this.sprite = images['enemy' + RANDOM_ENEMY() + '.png'];

        // Each enemy should have a different speed
        this.speed = 0.25;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed - (Math.random() * 3 + 1);
        this.x = this.x + Math.random() * 1 - Math.random() * 1;
    }
}

class Item extends Entity {
    constructor(xPos) {
        super();
        this.x = xPos;
        this.y = -ITEM_HEIGHT;
        this.sprite = images['item.png'];

        // Each enemy should have a different speed
        this.speed = 0.25;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;;
    }
}

class Shell extends Entity {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
        this.sprite = images['redshell.png'];

        // Each enemy should have a different speed
        this.speed = 0.5;
    }

    update(timeDiff) {
        this.y = this.y - timeDiff * this.speed;
    }
}

class Road extends Entity {
    constructor(xPos) {
        super();
        this.x = xPos;
        this.y = -ROAD_HEIGHT;
        this.sprite = images['rainbowroad.png'];

        // Each enemy should have a different speed
        this.speed = ROAD_SPEED;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;

    }
}

class RoadSample extends Entity {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
        this.sprite = images['rainbowroad.png'];

        // Each enemy should have a different speed
        this.speed = ROAD_SPEED;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class RoadStart extends RoadSample {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
        this.sprite = images['rainbowstart.png'];
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.sprite = images['player1.png'];
        this.speed = PLAYER_SPEED;
    }

    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH / 10;
        }
        if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH / 10;
        }
        if (direction === MOVE_UP && this.y < GAME_HEIGHT) {
            this.y = this.y - PLAYER_HEIGHT / 10;
            SPEED_UP_SOUND.play();
        }
        if (direction === MOVE_DOWN && this.y + PLAYER_HEIGHT < GAME_HEIGHT) {
            this.y = this.y + PLAYER_HEIGHT / 10;
        }
        if (direction === SHOOT && gameEngine.shells.filter(e => !!e).length < 3) {
            gameEngine.addShell();
        }

    }
    update(timeDiff) {
        if (keys.down === true && this.y + PLAYER_HEIGHT < GAME_HEIGHT) {
            this.y = this.y + timeDiff * this.speed;
        }
        if (keys.up === true && this.y < GAME_HEIGHT) {
            this.y = this.y - timeDiff * this.speed;
        }
        if (keys.left === true && this.x > 0) {
            this.x = this.x - timeDiff * this.speed;
        }
        if (keys.right === true && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + timeDiff * this.speed;
        }
    }
}



/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        // Setup enemies, making sure there are always three
        this.setupShells();
        this.setupEnemies();
        this.setupItems();
        this.setupSampleRoad();


        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        element.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
    The game allows for 5 horizontal slots where an enemy can be present.
    At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
    */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = GAME_WIDTH / ENEMY_WIDTH;

        var enemySpot;
        // Keep looping until we find a free enemy spot at random
        while (this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }

        this.enemies[enemySpot] = new Enemy(enemySpot * ENEMY_WIDTH);
    }

    setupItems() {
        if (!this.items) {
            this.items = [];
        }

        var chance = Math.random();

        while (this.items.filter(e => !!e).length < MAX_ITEMS) {
            this.addItem();
        }
    }

    addItem() {
        var itemSpots = GAME_WIDTH / ITEM_WIDTH;

        var itemSpot;
        // Keep looping until we find a free enemy spot at random
        while (this.items[itemSpot]) {
            itemSpot = Math.floor(Math.random() * itemSpots);
        }
        console.log('hello')
        this.items[itemSpot] = new Item(itemSpot * ITEM_WIDTH);
    }

    setupSampleRoad() {
        if (!this.roadtiles) {
            this.roadtiles = [];
        }
        this.roadtiles[0] = new RoadStart(0, 0);
        this.roadtiles[1] = new RoadSample(0, ROAD_HEIGHT);
        this.roadtiles[2] = new RoadSample(0, ROAD_HEIGHT * 2);
        this.roadtiles[3] = new RoadSample(0, ROAD_HEIGHT * 3);
        this.roadtiles[4] = new RoadSample(0, ROAD_HEIGHT * 4);
        this.setupRoad()
    }

    setupRoad() {
        if (!this.roadtiles) {
            this.roadtiles = [];
        }

        while (this.roadtiles.filter(e => !!e).filter(e => e.y < -5).length == 0) {
            this.addRoad();
        }
    }

    addRoad() {
        var enemySpots = 6;

        var enemySpot;

        while (this.roadtiles[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }

        this.roadtiles[enemySpot] = new Road(0);
    }

    addShell() {
        var shellSpots = MAX_SHELLS;
        var shellSpot;

        while (this.shells[shellSpot]) {
            shellSpot = Math.floor(Math.random() * shellSpots);
        }

        this.shells[shellSpot] = new Shell(this.player.x + 25, this.player.y);
    }
    setupShells() {
        if (!this.shells) {
            this.shells = [];
        }
    }


    // This method kicks off the game
    start() {
        this.score = 0;
        this.lastFrame = Date.now();

        // Listen for keyboard left/right and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                keys.left = true;
                this.player.sprite = images['playerleft1.png'];
                //this.player.move(MOVE_LEFT);
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                //this.player.move(MOVE_RIGHT);
                keys.right = true;
                this.player.sprite = images['playerright1.png'];
            }
            else if (e.keyCode === UP_ARROW_CODE) {
                //this.player.move(MOVE_UP);
                keys.up = true;
            }
            else if (e.keyCode === DOWN_ARROW_CODE) {
                //this.player.move(MOVE_DOWN);
                keys.down = true;
            }
            else if (e.keyCode === SPACE_BAR_CODE) {
                this.player.move(SHOOT);
            }
        });

        document.addEventListener('keyup', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                keys.left = false;
                this.player.sprite = images['player1.png'];
                //this.player.move(MOVE_LEFT);
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                //this.player.move(MOVE_RIGHT);
                this.player.sprite = images['player1.png'];
                keys.right = false;
            }
            else if (e.keyCode === UP_ARROW_CODE) {
                //this.player.move(MOVE_UP);
                keys.up = false;
            }
            else if (e.keyCode === DOWN_ARROW_CODE) {
                //this.player.move(MOVE_DOWN);
                keys.down = false;
            }
        });

        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill
    
    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
    */
    gameLoop() {
        // Check how long it's been since last frame
        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;

        // Call update on all enemies
        this.roadtiles.forEach(roadtile => roadtile.update(timeDiff));
        this.shells.forEach(enemy => enemy.update(timeDiff));
        this.enemies.forEach(enemy => enemy.update(timeDiff));
        this.items.forEach(item => item.update(timeDiff));
        this.player.update(timeDiff);





        // Draw everything!
        // this.ctx.drawImage(images['rainbowroad.png'], 0, 0); // draw the star bg

        this.roadtiles.forEach(roadtile => roadtile.render(this.ctx)); // draw the road
        this.shells.forEach(enemy => enemy.render(this.ctx));
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.items.forEach(item => item.render(this.ctx));
        this.player.render(this.ctx); // draw the player

        // Check if any enemies should die
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.roadtiles.forEach((roadtile, enemyIdx) => {
            if (roadtile.y > GAME_HEIGHT) {
                delete this.roadtiles[enemyIdx];
            }
        });
        this.shells.forEach((shell, enemyIdx) => {
            if (shell.y < 0) {
                delete this.shells[enemyIdx];
            }
        });
        this.items.forEach((item, enemyIdx) => {
            if (item.y > GAME_HEIGHT) {
                delete this.items[enemyIdx];
            }
        });

        this.setupRoad();
        this.setupShells();
        this.setupEnemies();
        this.setupItems();


        this.isEnemyDead();
        this.isItemDead();



        // Check if player is dead
        if (this.isPlayerDead()) {
            // If they are dead, then it's game over!
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score + ' GAME OVER', 5, 30);
            this.ctx.drawImage(images['restart.png'], 0, 350);

            var canvas = document.getElementById('canvas');
            var rect = {
                x: 0,
                y: 350,
                width: 500,
                height: 96
            };
            function getMousePos(canvas, event) {
                var rect = canvas.getBoundingClientRect();
                return {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            }
            function isInside(pos, rect) {
                return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
            }
            canvas.addEventListener('click', function (evt) {
                var mousePos = getMousePos(canvas, evt);

                if (isInside(mousePos, rect)) {
                    location.reload();;
                }
            }, false);

        }
        else {
            // If player is not dead, then draw the score
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score, 5, 30);

            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }
    }



    isEnemyDead() {
        this.enemies.forEach((enemy, i) => {
            this.shells.forEach((shell, j) => {
                if (enemy.x + ENEMY_WIDTH >= shell.x
                    && enemy.x <= shell.x + SHELL_WIDTH
                    && enemy.y + ENEMY_HEIGHT - SHELL_HEIGHT / 2 > shell.y
                    && enemy.y < shell.y - SHELL_HEIGHT / 4) {
                        delete this.shells[j]
                        delete this.enemies[i]
                }
            })
        })
    }

    isItemDead() {
            this.items.forEach((item, j) => {
                if (this.player.x + PLAYER_WIDTH >= item.x
                    && this.player.x <= item.x + ITEM_WIDTH
                    && this.player.y + PLAYER_HEIGHT - ITEM_HEIGHT / 4 > item.y
                    && this.player.y <= item.y + ITEM_HEIGHT) {
                        delete this.items[j];
                }
            })
    }

    isPlayerDead() {
        return this.enemies.some(enemy => {
            return (enemy.x + ENEMY_WIDTH >= this.player.x &&
                enemy.x <= this.player.x + PLAYER_WIDTH)
                && ((enemy.y + ENEMY_HEIGHT - PLAYER_HEIGHT / 10 > this.player.y)
                    && (enemy.y < this.player.y + PLAYER_HEIGHT * 0.9))
        })
    }
}





// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();
