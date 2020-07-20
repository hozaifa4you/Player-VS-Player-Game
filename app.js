const playerOneScor = document.querySelector("#playerOneScor");
const playerTowScor = document.querySelector("#playerTowScor");
const winingLimite = document.querySelector("#winingLimite");
const inputBox = document.querySelector("#inputBox");
const pOneBtn = document.querySelector("#pOneBtn");
const pTowBtn = document.querySelector("#pTowBtn");
const resetBtn = document.getElementById("resetBtn");

let p1ScrorIncr = 0;
let p2ScrorIncr = 0;
let pScorLimite = 5;

//input Box function
inputBox.addEventListener("change", () => {
    pScorLimite = Number(inputBox.value);
    winingLimite.innerHTML = pScorLimite;
    //reset();
    inputBox.value = "";
    playerOneScor.innerHTML = p1ScrorIncr = 0;
    playerTowScor.innerHTML = p1ScrorIncr = 0;

    pOneBtn.removeAttribute("disabled");
    pTowBtn.removeAttribute("disabled");
    playerOneScor.style.color = "";
    playerTowScor.style.color = "";

});

//Player One Function
pOneBtn.addEventListener("click", () => {
    p1ScrorIncr++;
    if (p1ScrorIncr === pScorLimite) {
        pOneBtn.setAttribute("disabled", "disabled");
        pTowBtn.setAttribute("disabled", "disabled");
        playerOneScor.style.color = "#00ff00";
    }
    playerOneScor.innerHTML = p1ScrorIncr;
});

//Player Tow function
pTowBtn.addEventListener("click", () => {
    p2ScrorIncr++;
    if (p2ScrorIncr === pScorLimite) {
        pTowBtn.setAttribute("disabled", "disabled");
        pOneBtn.setAttribute("disabled", "disabled");
        playerTowScor.style.color = "#00ff00";
    }
    playerTowScor.innerHTML = p2ScrorIncr;
});

//Reset Button function
function reset() {
    p1ScrorIncr = 0;
    playerOneScor.innerHTML = p1ScrorIncr;
    pOneBtn.removeAttribute("disabled");
    pTowBtn.removeAttribute("disabled");
    p2ScrorIncr = 0;
    playerTowScor.innerHTML = p2ScrorIncr;
    playerOneScor.style.color = "";
    playerTowScor.style.color = "";

}
resetBtn.addEventListener("click", reset);