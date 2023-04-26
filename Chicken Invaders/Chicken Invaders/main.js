const canvas = document.getElementById("canvas");
const Score = document.getElementById("score");
const ctx = canvas.getContext("2d");



const cImage = new Image();
cImage.src = "./images/Celeiro2.jpeg";

let n = 0, i = 0, score = 0;

let Sprites = ['./images/Miguel1-1.png', './images/Miguel2-1.png'];

// let cImage = new Image();
// cImage.src = './imagens/Celeiro.jpg'

// Player Images
const image0 = new Image();
image0.src = Sprites[0];
const image1 = new Image();
image1.src = Sprites[1];

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor() {
        this.speed = { x: 0, y: 0 };
        // const image = new Image();
        // image.src = './images/Miguel1-1.png';

        this.rotation = 0;
        this.opacity = 1;
        if (n == 0) {
            this.skin = image0;
            this.width = image0.width * 0.025;
            this.height = image0.height * 0.025;
            this.position = { x: canvas.width / 2 - this.width / 2, y: canvas.height - this.height - 20 };
            n = 1;
        }
    }

    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(player.position.x + player.width / 2, player.position.y + player.height / 2);
        ctx.rotate(this.rotation);

        ctx.translate(-player.position.x - player.width / 2, -player.position.y - player.height / 2);

        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);

        ctx.restore();
    }

    Update() {
        this.draw();
        this.position.x += this.speed.x;
    }
}

class PlayerParticle {
    constructor({ position, speed }) {
        this.position = position;
        this.speed = speed;

        const image = new Image();
        image.src = './images/hearth.png';
        this.skin = image;
        this.opacity = 1;

        this.width = image.width * 0.030;
        this.height = image.height * 0.030;
    }



    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
        ctx.restore();
    }

    Update() {
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        this.opacity -= 0.004;
    }
}

class Projectile {
    constructor({ position, speed }) {
        this.position = position;
        this.speed = speed;

        const image = new Image();
        image.src = './images/hearth.png';
        this.skin = image;

        this.width = image.width * 0.015;
        this.height = image.height * 0.015;
    }

    draw() {
        ctx.beginPath()
        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
    }

    Update() {
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}

class Particle {
    constructor({ position, speed }) {
        this.position = position;
        this.speed = speed;

        const image = new Image();
        image.src = './images/Pena.png';
        this.skin = image;
        this.opacity = 1;

        this.width = image.width * 0.030;
        this.height = image.height * 0.030;
    }



    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
        ctx.restore();
    }

    Update() {
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        this.opacity -= 0.004;
    }
}



class InvaderProjectile {
    constructor({ position, speed }) {
        this.position = position;
        this.speed = speed;

        const image = new Image();
        image.src = './images/Ovo.png';
        this.skin = image;

        this.width = image.width * 0.050;
        this.height = image.height * 0.050;
    }

    draw() {
        ctx.beginPath()
        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
    }

    Update() {
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}

class InvaderDrop {
    constructor({ position, speed }) {
        this.position = position;
        this.speed = speed;

        const image = new Image();
        image.src = './images/Perna_de_frango.png';
        this.skin = image;

        this.width = image.width * 0.090;
        this.height = image.height * 0.090;
    }

    draw() {
        ctx.beginPath()
        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);
        ctx.closePath();
    }

    Update() {
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}

class Invader {
    constructor({ position }) {
        this.speed = { x: 0, y: 0 };

        this.img = []

        this.SpriteInvader = ['./images/ChickenSprites1.1.png', './images/ChickenSprites1.2.png', './images/ChickenSprites1.3.png', './images/ChickenSprites1.4.png', './images/ChickenSprites1.5.png', './images/ChickenSprites1.6.png', './images/ChickenSprites1.7.png', './images/ChickenSprites1.8.png'];
        let img = new Image();
        img.src = this.SpriteInvader[0];
        this.skin = img;


        this.width = img.width * 0.25;
        this.height = img.height * 0.25;
        this.position = { x: position.x, y: position.y };
    }


    draw() {
        ctx.drawImage(this.skin, this.position.x, this.position.y, this.width, this.height);
    }

    Update({ speed }) {
        this.draw();
        this.position.x += speed.x;
        this.position.y += speed.y;
    }

    shoot(invaderProjectiles) {
        invaderProjectiles.push(new InvaderProjectile({ position: { x: this.position.x + this.width / 2, y: this.position.y + this.height }, speed: { x: 0, y: 5 } }));
    }

    drop(invaderDrops) {
        invaderDrops.push(new InvaderDrop({ position: { x: this.position.x + this.width / 2, y: this.position.y + this.height }, speed: { x: 0, y: 5 } }));
    }
}

class Group {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.speed = { x: 3, y: 0 };

        this.invaders = [];

        const rows = Math.floor(Math.random() * 4 + 2);
        const columns = Math.floor(Math.random() * 5 + 5);

        this.width = columns * 42;

        for (let i = 0; i < columns; i++) {
            for (let f = 0; f < rows; f++) {
                this.invaders.push(new Invader({ position: { x: i * 42, y: f * 42 } }));

            }
        }
    }

    Update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        this.speed.y = 0;

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.speed.x = -this.speed.x;
            this.speed.y = 30;
        }
    }

}

const player = new Player();
const projectiles = [];
const groups = [new Group()];
const invaderProjectiles = [];
const invaderDrops = [];
const Particles = [];
const playerParticles = [];

const Keys = { ArrowRight: { KeyPressed: false }, ArrowLeft: { KeyPressed: false }, Space: { KeyPressed: false } }

let frames = 0;

let randomInterval = Math.floor((Math.random() * 500) + 500);

let game = {
    over: false,
    active: true
}

function animate() {
    if (!game.active) {
        return;
    }

    requestAnimationFrame(animate);
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cImage, 0, 0, canvas.width, canvas.height)
    player.Update();
    playerParticles.forEach((playerParticle, index) => {
        if (playerParticle.opacity <= 0) {
            setTimeout(() => {
                playerParticles.splice(index, 1);
            }, 0)
        } else {
            playerParticle.Update();
        }
    })
    Particles.forEach((particle, index) => {
        if (particle.opacity <= 0) {
            setTimeout(() => {
                Particles.splice(index, 1);
            }, 0)
        } else {
            particle.Update();
        }
    })
    invaderProjectiles.forEach((invaderProjectile, index) => {
        if (invaderProjectile.position.y + invaderProjectile.height >= canvas.height) {
            setTimeout(() => {
                invaderProjectiles.splice(index, 1);
            }, 0);
        } else {
            invaderProjectile.Update();
        }

        if (invaderProjectile.position.y + invaderProjectile.height >= player.position.y && invaderProjectile.position.x + invaderProjectile.width >= player.position.x && invaderProjectile.position.x + invaderProjectile.width <= player.position.x + player.width) {

            setTimeout(() => {
                invaderProjectiles.splice(index, 1);
                player.opacity = 0;
                game.over = true;
                for (let i = 0; i < 15; i++) {
                    playerParticles.push(new PlayerParticle({ position: { x: player.position.x + player.width / 2, y: player.position.y + player.height / 2 }, speed: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 } }))
                }
            }, 0)

            setTimeout(() => {
                game.active = false;
            }, 4000)

            setTimeout(() => {
                window.location.href ="GameOver.html"
            }, 4000)
        }
    })

    invaderDrops.forEach((invaderDrop, index) => {
        if ((invaderDrop.position.y + invaderDrop.height >= canvas.height) || (invaderDrop.position.y + invaderDrop.height >= player.position.y && invaderDrop.position.x + invaderDrop.width >= player.position.x && invaderDrop.position.x + invaderDrop.width <= player.position.x + player.width)) {
            setTimeout(() => {
                invaderDrops.splice(index, 1);
                if (invaderDrop.position.y + invaderDrop.height >= player.position.y && invaderDrop.position.x + invaderDrop.width >= player.position.x && invaderDrop.position.x + invaderDrop.width <= player.position.x + player.width) {
                    score += 100;
                    Score.innerHTML = score;
                }
            }, 0);
        } else {
            invaderDrop.Update();
        }

    })

    projectiles.forEach((projectile, index) => {
        if (projectile.position.y <= 0) {
            projectiles.splice(index, 1)
        } else {
            projectile.Update();
        }
    })


    groups.forEach((group, groupIndex) => {
        group.Update();

        if (frames % 100 == 0 && group.invaders.length > 0) {
            group.invaders[Math.floor(Math.random() * group.invaders.length)].shoot(invaderProjectiles);
        }

        group.invaders.forEach((invader, i) => {
            invader.Update({ speed: group.speed })


            projectiles.forEach((projectile, p) => {
                if (projectile.position.y - projectile.height / 3 <= invader.position.y + invader.height && projectile.position.x + projectile.width / 3 >= invader.position.x && projectile.position.x - projectile.width / 3 <= invader.position.x && projectile.position.y + projectile.height / 3 >= invader.position.y) {
                    setTimeout(() => {
                        const invaderFound = group.invaders.find((invader2) => {
                            return invader2 == invader;
                        });

                        const projectileFound = projectiles.find(projectile2 => projectile2 == projectile);

                        if (invaderFound && projectileFound) {
                            score += 50;
                            Score.innerHTML = score;

                            for (let i = 0; i < 15; i++) {
                                Particles.push(new Particle({ position: { x: invader.position.x + invader.width / 2, y: invader.position.y + invader.height / 2 }, speed: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 } }))
                            }
                            group.invaders.splice(i, 1);
                            projectiles.splice(p, 1);
                            group.invaders[i].drop(invaderDrops);
                        }

                        if (group.invaders.length > 0) {
                            const firstInvader = group.invaders[0];
                            const lastInvader = group.invaders[group.invaders.length - 1];

                            group.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width;
                            group.position.x = firstInvader.position.x;
                        } else {
                            groups.splice(groupIndex, 1);
                        }
                    }, 0)
                }
            })
        });
    });

    if (Keys.ArrowLeft.KeyPressed && player.position.x > 0) {
        player.speed.x = -5;
        player.rotation = -0.15;
    } else if (Keys.ArrowRight.KeyPressed && player.position.x < canvas.width - player.width) {
        player.speed.x = 5;
        player.rotation = 0.15;
    } else if (Keys.Space.KeyPressed) {
        player.skin = image1;
        player.width = image1.width * 0.025;
        player.height = image1.height * 0.025;
    }
    else {
        player.skin = image0;
        player.width = image0.width * 0.025;
        player.height = image0.height * 0.025;
        player.speed.x = 0;
        player.rotation = 0;
    }

    if (frames % randomInterval == 0 && frames != 0) {
        groups.push(new Group())
        randomInterval = Math.floor((Math.random() * 500) + 3000);
    }
    frames++;
}

animate();

addEventListener('keydown', ({ key }) => {
    if (game.over) {
        return;
    }

    switch (key) {
        case 'ArrowLeft':
            Keys.ArrowLeft.KeyPressed = true;
            break;
        case 'ArrowRight':
            Keys.ArrowRight.KeyPressed = true;
            break;
        case ' ':
            projectiles.push(new Projectile({
                position: { x: player.position.x + player.width / 3, y: player.position.y },
                speed: { x: 0, y: -15 }
            }))
            Keys.Space.KeyPressed = true;
            break;
    }
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'ArrowLeft':
            Keys.ArrowLeft.KeyPressed = false;
            break;
        case 'ArrowRight':
            Keys.ArrowRight.KeyPressed = false;
            break;
        case ' ':
            Keys.Space.KeyPressed = false;
            break;
    }
})

n = 2;

