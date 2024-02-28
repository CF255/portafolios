const board = document.getElementById('board');
const scoreboard = document.getElementById('scoreboard');
const startbutton = document.getElementById('start');
const gameoversign = document.getElementById('gameover');

const boardsize = 10;
const gamespeed = 150;
const squaretypes = {
    
    emptysquare: 0,
    snakesquare: 1,
    foodsquare: 2
    
};

const directions ={
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1
};


let snake;
let score;
let direction;
let boardsquares;
let emptysquares;
let moveinterval;

const drawsnake = ()=>{
    snake.forEach(square => drawsquare(square, 'snakesquare'));
}

const drawsquare = (square, type)=>{
    const [row, column] = square.split('');
    boardsquares[row][column] = squaretypes[type];
    const squareelement = document.getElementById(square);
    squareelement.setAttribute('class', `square ${type}`);

    if(type === 'emptysquare'){
        emptysquares.push(square);
    }else{
        if(emptysquares.indexOf(square) !== -1){
            emptysquares.splice(emptysquares.indexOf(square), 1)
        }
    }
}

const movesnake = () =>{
    const newsquare = String(
        Number(snake[snake.length - 1]) + directions[direction])
        .padStart(2, '0');
    const [row, column] = newsquare.split('');

    if( newsquare < 0 || 
        newsquare > boardsize * boardsize ||
        (direction === 'ArrowRight' && column == 0) ||
        (direction === 'ArrowLeft' && column == 9 ||
        boardsquares[row][column] === squaretypes.snakesquare) ){
        gameover();
    }else{
        snake.push(newsquare);
        if(boardsquares[row][column] === squaretypes.foodsquare){
            addfood()

        }else{
            const emptysquare = snake.shift();
            drawsquare(emptysquare, 'emptysquare');

        }
        drawsnake();

    }

}

const addfood = () =>{
    score++;
    updatescore();
    createrandomfood();
}


const gameover = () =>{
    gameoversign.style.display = 'block';
    clearInterval(moveinterval)
    startbutton.disabled = false;
}

const setdirection = newdirection =>{
    direction = newdirection;
}

const directionevent = key =>{
    switch (key.code){
        case 'ArrowUp':
            direction != 'ArrowDown' && setdirection(key.code)
            break;
        case 'ArrowDown':
            direction != 'ArrowUp' && setdirection(key.code)
            break;
        case 'ArrowLeft':
            direction != 'ArrowRight' && setdirection(key.code)
            break;
        case 'ArrowRight':
            direction != 'ArrowLeft' && setdirection(key.code)
            break;
    }
}

const createrandomfood = () =>{
    const randomemptysquare = emptysquares[Math.floor(Math.random() * emptysquares.length)];
    drawsquare(randomemptysquare, 'foodsquare');
}

const updatescore = ()=>{
    scoreboard.innerText = score;
}

const createboard = () =>{
    boardsquares.forEach( (row, rowindex)=>{
        row.forEach((column, columnindex)=>{
            const squearevalue = `${rowindex}${columnindex}`;
            const squareelement = document.createElement('div');
            squareelement.setAttribute('class', 'square emptysquare');
            squareelement.setAttribute('id', squearevalue);
            board.appendChild(squareelement);
            emptysquares.push(squearevalue);
        });
    });
}

const setgame = () =>{
    snake =['00', '01', '02', '03'];
    score = snake.length;
    direction = 'ArrowRight';
    boardsquares = Array.from(Array(boardsize), ()=> new Array(boardsize).fill(squaretypes.emptysquare));
    console.log(boardsquares);
    board.innerHTML = '';
    emptysquares = [];
    createboard();
}


const startgame = ()=>{
    setgame();
    gameoversign.style.display = 'none';
    startbutton.disabled = true;
    drawsnake();
    updatescore();
    createrandomfood();
    document.addEventListener('keydown', directionevent);
    moveinterval = setInterval ( () => movesnake(), gamespeed);
}

startbutton.addEventListener('click', startgame);




