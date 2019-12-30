class Furry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
        this.startMovingFurry = true;
    }
}
class Coin {
    constructor() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}
class Game {
    constructor() {
        this.board = document.getElementById('board').querySelectorAll('div');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
    }
    index(x,y) {
        return x + (y * 10);
    }
    showFurry() {
        this.hideVisibleFurry();
        if(this.furry.x >= 0 && this.furry.x <= 9 && this.furry.y >= 0 && this.furry.y <= 9) {
            this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
        }
        else {
            this.gameOver();
        }
    }
    showCoin() {
        if(document.getElementsByClassName('coin').length === 0){
            this.board[this.index(this.coin.x,this.coin.y)].classList.add('coin');
        }
    }
    startGame() {
        this.startMovingFurry = true;
        this.showFurry();
        this.showCoin();
        let self = this;
        function movingFurry() {
            if(self.startMovingFurry) {
                self.moveFurry();
            }
        }
        this.idSetInterval = setInterval(movingFurry, 250);
    }
    moveFurry() {
        if(this.furry.direction === "right") { 
            this.furry.x = this.furry.x + 1; 
        } 
        else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1; 
        }
        else if (this.furry.direction === "top") {
            this.furry.y = this.furry.y - 1; 
        }
        else if (this.furry.direction === "bottom") {
            this.furry.y = this.furry.y + 1; 
        }
        else if (this.furry.direction === "stop") {
            return;
        }
        this.showFurry();
        this.checkCoinCollision();
    }
    hideVisibleFurry() {
        if(document.getElementsByClassName('furry').length > 0){
            document.getElementsByClassName('furry')[0].classList.remove('furry');
        }
    }
    pressedKey() {
        this.startGame();
        let self = this;
        document.addEventListener('keydown', function(event){
            self.turnFurry(event);
        })
    }
    turnFurry(event) {
        switch (event.which) {
            case 37: 
                this.furry.direction = 'left';
                break; 
            case 38: 
                this.furry.direction = 'top';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40: 
                this.furry.direction = 'bottom';
                break;
        }
    }
    checkCoinCollision() {
        if(this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
            document.querySelector('.coin').classList.remove('coin');
            this.score += 1;
            document.querySelector('strong').innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }
    gameOver() {
        document.getElementById('score').classList.add('invisible');
        document.getElementById('board').classList.add('invisible');
        document.getElementById('over').classList.remove('invisible');
        document.getElementsByClassName('score')[0].innerText = `Twój wynik to: ${this.score}`;
        this.furry.x = 0;
        this.furry.y = 0;
        this.furry.direction = 'right';
        this.startMovingFurry = false;
        document.querySelector('.coin').classList.remove('coin');
        this.score = 0;
        document.querySelector('strong').innerText = this.score;
    }
}
let newGame = new Game();
newGame.pressedKey();

document.getElementById('play-again').addEventListener('click', function(){
    document.getElementById('score').classList.remove('invisible');
    document.getElementById('board').classList.remove('invisible');
    document.getElementById('over').classList.add('invisible');
    newGame = new Game();
    newGame.pressedKey();
})