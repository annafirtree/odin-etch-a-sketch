
const MAX_SKETCH_WIDTH = 960;

//set initial state
let currentColor = 'black';
const blackButton = document.querySelector([`button[id='black']`]);
blackButton.classList.add('button-selected');
fill(16);
setListeners();




function fill(squareSize){
    if (isNaN(squareSize)) return "error";
    let numBoxes = squareSize * squareSize;
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${squareSize}, auto)`
    container.style.width = `${MAX_SKETCH_WIDTH}px`;
    for(let i=0; i<numBoxes; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${MAX_SKETCH_WIDTH/squareSize}px`;
        box.style.height = `${MAX_SKETCH_WIDTH/squareSize}px`;
        box.addEventListener('mouseover', () => {
            changeBoxColor(box, currentColor);
        })
        container.appendChild(box);
    }
}

function setListeners(){
    const buttons = Array.from(document.querySelectorAll('button'));
    for (let i=0; i<buttons.length; i++){
        if(buttons[i].id == "reset"){
            buttons[i].addEventListener('click', ()=>{
                reset()
            });
        }else{
            buttons[i].addEventListener('click',()=>{
                changeCurrentColor(buttons[i].id);
            })
        }
    }
    window.addEventListener('keydown', (e)=>{
        switch (e.code){
            case 'KeyR': 
                changeCurrentColor('red');
                break;
            case 'KeyO':
                changeCurrentColor('orange');
                break;
            case 'KeyY':
                changeCurrentColor('yellow');
                break;
            case 'KeyG':
                changeCurrentColor('green');
                break;
            case 'KeyB':
                changeCurrentColor('blue');
                break;
            case 'KeyP':
                changeCurrentColor('purple');
                break;
            case 'KeyN':
                changeCurrentColor('brown');
                break;
            case 'KeyL':
                changeCurrentColor('black');
                break;
            case 'KeyW':
                changeCurrentColor('white');
                break;
            case 'KeyT':
                changeCurrentColor('transparent');
                break;
            default:
                break;
        }
    })
}

function reset(){
    let squareSize = prompt("How many boxes do you want each side of the grid divided into?");
    while(isNaN(squareSize || squareSize === null)){
        if (squareSize === null){
            return;
        }
        squareSize = prompt("Please enter a number");
    }
    const container = document.querySelector('#container');
    const oldBoxes = Array.from(container.childNodes);
    for (let i=oldBoxes.length-1; i>=0; i--){
        oldBoxes[i].remove();
    }
    fill(squareSize);
}

function changeBoxColor(box, color){
    if(color == 'transparent') return;
    box.style.backgroundColor = color;
}
function changeCurrentColor(color){
    const newColorButton = document.querySelector(`button[id=${color}]`);
    const oldColorButton = document.querySelector(`button[id=${currentColor}]`);
    currentColor = color;
    newColorButton.classList.add('button-selected');
    oldColorButton.classList.remove('button-selected');

}
