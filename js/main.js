/* -------- Start DIV -------- */

const startDiv = document.createElement("DIV");
startDiv.setAttribute("class", "screen screen-start");
startDiv.setAttribute("id", "start");
document.querySelector("body").appendChild(startDiv);

const startHeader = document.createElement("HEADER");
startDiv.appendChild(startHeader);

const startH1 = document.createElement("H1");
startH1.innerHTML = "Tic Tac Toe";
startHeader.appendChild(startH1);

const vsCpuButton  = document.createElement("BUTTON");
vsCpuButton.innerHTML = "vs CPU";
vsCpuButton.setAttribute("class", "button");
vsCpuButton.setAttribute("style", "margin-right: 15px;");
startHeader.appendChild(vsCpuButton);

const twoPlayersButton = document.createElement("BUTTON");
twoPlayersButton.innerHTML = "2 players";
twoPlayersButton.setAttribute("class", "button");
startHeader.appendChild(twoPlayersButton);


/* -------- Winning Screen -------- */

let winDiv = document.createElement("DIV");
winDiv.setAttribute("class", "screen screen-win");
winDiv.style.display = "none";
document.querySelector("body").appendChild(winDiv);

let winHeader = document.createElement("HEADER");
winDiv.appendChild(winHeader);

let winH1 = document.createElement("H1");
winH1.innerHTML = "Winner";
winHeader.appendChild(winH1);

let resetButton = document.createElement("BUTTON");
resetButton.setAttribute("class", "button");
resetButton.setAttribute("id", "reset");
resetButton.innerHTML = "Play Again?";
winHeader.appendChild(resetButton);


/* -------- Functionality -------- */

const boxes = document.querySelectorAll(".box");
//const playerBoxes = document.querySelectorAll(".players");
const player1box = document.querySelector("#player1");
const player2box = document.querySelector("#player2");
let player1name;
let player2name;
let player1turn = false;
let player2turn = false;

//let boxIndex;

let boardState = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];

vsCpuButton.addEventListener("click", () => {
    player1name = prompt("What's your name?");

    setPlayersTag(player1name, "CPU");

    changePlayerTurn(1);

    startDiv.setAttribute("style", "display: none;");

    for(let i = 0; i < boxes.length; i++){
        //boxIndex = boxes.findIndex(box);
        let box = boxes[i];

        box.addEventListener("click", () => {
            if(boardState[i]==="none"){
                if(player1turn){
                    box.classList.add("box-filled-1");
                    boardState[i] = 1;
                    if(comprovation(i)){
                        winner(1);
                    }
                    changePlayerTurn(2);
                } else if(player2turn){
                    box.classList.add("box-filled-2");
                    boardState[i] = 2;
                    if(comprovation(i)){
                        winner("CPU");
                    }
                    changePlayerTurn(1);
                } else {
                    alert("Something went wrong!");
                }
            }
        });
    }
});

//document.querySelector("#reset")
resetButton.addEventListener("click", () => {
    boardState = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
    for(let i = 0; i < boxes.length; i++){
        boxes[i].removeAttribute("class");
        boxes[i].setAttribute("class", "box");

        changePlayerTurn(1);
    }
    winDiv.style.display = "none";
});

function setPlayersTag(player1, player2){
    let player1tag = document.createElement("P");
    player1tag.innerHTML = player1;
    player1tag.style.margin = "0";
    player1box.appendChild(player1tag);

    let player2tag = document.createElement("P");
    player2tag.innerHTML = player2;
    player2tag.style.margin = "0";
    player2box.appendChild(player2tag);
}

function changePlayerTurn(player) {
    if(player === 1) {
        player2box.classList.remove("active");
        player1box.classList.add("active");
        player2turn = false;
        player1turn = true;
    } else {
        player1box.classList.remove("active");
        player2box.classList.add("active");
        player1turn = false;
        player2turn = true;
    }
}

function comprovation(iterator) {
    switch(iterator){
        case 0:
            if((boardState[1] === boardState[2] && boardState[0] === boardState[1]) || (boardState[3] === boardState[6] && boardState[0] === boardState[3]) || (boardState[4] === boardState[8] && boardState[0] === boardState[4])){
                return true;
            } else {
                return false;
            }
            break;
        case 1:
            if((boardState[1] === boardState[2] && boardState[0] === boardState[1]) || (boardState[1] === boardState[4] && boardState[1] === boardState[7])){
                return true;
            } else {
                return false;
            }
            break;
        case 2:
            if((boardState[1] === boardState[2] && boardState[0] === boardState[1]) || (boardState[5] === boardState[2] && boardState[2] === boardState[8]) || (boardState[4] === boardState[2] && boardState[4] === boardState[6])){
                return true;
            } else {
                return false;
            }
            break;
        case 3:
            if((boardState[3] === boardState[4] && boardState[5] === boardState[3]) || (boardState[3] === boardState[0] && boardState[6] === boardState[3])){
                return true;
            } else {
                return false;
            }
            break;
        case 4:
            if((boardState[3] === boardState[4] && boardState[5] === boardState[3]) || (boardState[1] === boardState[4] && boardState[7] === boardState[1]) || (boardState[0] === boardState[4] && boardState[8] === boardState[0])){
                return true;
            } else {
                return false;
            }
            break;
        case 5:
            if((boardState[3] === boardState[4] && boardState[5] === boardState[3]) || (boardState[2] === boardState[8] && boardState[5] === boardState[8])){
                return true;
            } else {
                return false;
            }
            break;
        case 6:
            if((boardState[6] === boardState[7] && boardState[8] === boardState[6]) || (boardState[6] === boardState[4] && boardState[2] === boardState[6]) || (boardState[6] === boardState[3] && boardState[0] === boardState[6])){
                return true;
            } else {
                return false;
            }
            break;
        case 7:
            if((boardState[6] === boardState[7] && boardState[8] === boardState[6]) || (boardState[1] === boardState[7] && boardState[1] === boardState[4])){
                return true;
            } else {
                return false;
            }
            break;
        case 8:
            if((boardState[6] === boardState[7] && boardState[8] === boardState[6]) || (boardState[0] === boardState[4] && boardState[8] === boardState[0]) || (boardState[2] === boardState[5] && boardState[8] === boardState[2])){
                return true;
            } else {
                if(boardState.indexOf("none") === -1){
                    winner("tie");
                }
                return false;
            }
            break;
    }
}

function winner(player) {
    if(player === "CPU"){
        winH1.innerHTML = "CPU wins!";
        winDiv.setAttribute("class", "screen screen-win screen-win-two");
    } else if(player === 1) {
        winH1.innerHTML = player1name + " wins!";
        winDiv.setAttribute("class", "screen screen-win screen-win-one");
    } else if(player === 2){
        winH1.innerHTML = player2name + " wins!";
        winDiv.setAttribute("class", "screen screen-win screen-win-two");
    } else if(player === "tie") {
        winH1.innerHTML = "It's a tie!";
        winDiv.setAttribute("class", "screen screen-win screen-win-tie");
    }
    winDiv.removeAttribute("style");
}

