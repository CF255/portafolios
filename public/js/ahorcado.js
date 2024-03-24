const words = ['Carne', 'Ipad', 'Silla', 'Tablet', 'Perro' , 'Gato', 'Mesa', 'Plato','Hierro', 'Cuchillo','Planta', 'Carro', 'Pepino', 'Zapato', 'Gorra', 'Globo', 'Vaca' , 'Arbol', 'Piso', 'Hotel', 'Cristal', 'Mota','Mascara' , 'Television', 'Retrato','Ventana','Carcel','Ahorcado', 'Paseo','Espada','Apartamento']

const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLetterElements = document.getElementById('usedLetters');

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.heigth = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

const drawWord = () =>{
    selectedWord.forEach(letter =>{
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    letterElement.classList.add('letter');
    letterElement.classList.add('hidden');
    wordContainer.appendChild(letterElement);
});
};

const selectedRandomWord = () =>{
    let word = words[Math.floor((Math.random()*words.length))].toUpperCase();
    selectedWord =word.split('')
}

let selectedWord;
let usedLetters;
let mistakes;
let hits;

const addLetter = letter =>{
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    usedLetterElements.appendChild(letterElement);
}

const addBodyPart = bodyParts =>{
ctx.fillStyle = '#fff';
ctx.fillRect(...bodyParts)
}

const wrongLetter = () =>{
    addBodyPart(bodyParts[mistakes]);
    mistakes++;
    if(mistakes === bodyParts.length) endGame();
}

const endGame = () =>{
    document.removeEventListener('keydown', letterEvent);
    startButton.style.display = 'block';

}

const corretLetter= letter =>{
    const {children} = wordContainer;
    for(let i =0; i<children.length; i++){
        if(children[i].innerHTML === letter){
            children[i].classList.toggle('hidden');
            hits++
        }
    }
    if(hits === selectedWord.length) endGame();
}

const letterInput = letter =>{
    if(selectedWord.includes(letter)){
        corretLetter(letter);
    }else{
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
}

const letterEvent = event =>{
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)){
        letterInput(newLetter)
    };
};

const drawHandMan = () =>{
    ctx.canvas.width = 120;
    ctx.canvas.heigth = 160;
    ctx.scale(20,20);
    ctx.clearRect(0,0, canvas.width, canvas.heigth);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1,0,1,8);
    ctx.fillRect(2,0,3,1);
    ctx.fillRect(4,1,1,1);
}

const startGame = () =>{
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';
    usedLetterElements.innerHTML = '';
    startButton.style.display = 'none';
    drawHandMan();
    selectedRandomWord();
    drawWord();
    document.addEventListener('keydown',letterEvent);
};

startButton.addEventListener('click',startGame);

