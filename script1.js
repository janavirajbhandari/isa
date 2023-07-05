let winMsg='Victory';
let loseMsg='Crushing Defeat';
let tieMsg='Tie';
let moveList=['Rock', 'Paper', 'Scissors'];
let statusDisplay= document.querySelector('#status-head');
let moveDisplays= document.querySelector('.move-display');
let buttons= document.querySelectorAll('button');
console.log(buttons)
statusDisplay.textContent= "Choose!";
buttons[0].textContent='Rock';
buttons[1].textContent='Paper';
buttons[2].textContent='Scissors';

// Alternate way
for (let i=0; i< buttons.length; i++){
    buttons[i].textContent=moveList[i];
    buttons[i].style.display="inline-block";
}
/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

function calcResult(move1, move2) {
    if ( move1=== move2){
        console.log("tie");
        return tieMsg;

    } 
    else if (move1===moveList[0]&& move2===moveList[2] || 
             move1===moveList[2]&&move2===moveList[1] || 
             move1===moveList[1]&&move2===moveList[0]){     
        console.log('Player Wins');
        return winMsg;
             }
    else{
        return loseMsg;
    }
}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * moveList.length);
}

/**
 * Displays start state of game
 */

function startGame(playerChoice) {
    for (let i=0; i< buttons.length; i++){
        
buttons[i].style.display="none";
    }
    
    const computerChoice = moveList [randomMove()];
    moveDisplays.children[0].textContent=`Player: ${playerChoice}`;
    moveDisplays.children[1].textContent=`Computer: ${computerChoice}`;

    const result= calcResult(playerChoice, computerChoice);
    statusDisplay.textContent= result;
    
    if (result===winMsg || result===loseMsg || result===tieMsg){
        buttons[2].textContent='Play Again';
        buttons[2].style.display="inline-block";
        buttons[2].addEventListener("click", resetGame);

    }
}
function resetGame(){
    for (let i=0; i< buttons.length; i++){
        buttons[i].style.display="inline-block";
    }
    
    buttons[2].textContent='Scissors';
    buttons[2].removeEventListener('click', resetGame);
    statusDisplay.textContent="Choose!";
    moveDisplays[0].textContent="";
    moveDisplays[1].textContent="";
}
// function rockClick(){
//     startGame(moveList[0]);
// }
// function paperClick(){
//     startGame(moveList[1]);
// }
// function scissorClick(){
//     startGame(moveList[2]);
// }
// buttons[0].addEventListener("click",rockClick);
// buttons[1].addEventListener("click",paperClick);
// buttons[2].addEventListener("click", scissorClick);

buttons[0].addEventListener("click",()=>startGame(moveList[0]));
buttons[1].addEventListener("click",()=>startGame(moveList[1]));
buttons[2].addEventListener("click",()=> startGame(moveList[2]));
