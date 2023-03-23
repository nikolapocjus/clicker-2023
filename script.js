let score = 0;
let red = 0;
let green = 0;
let blue = 0;

function OnButtonClick(){
    score += 1;
    document.getElementById("score").innerHTML = score;
    red = getRandomInt(256);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let score = 0;
let red = 0;
let green = 0;
let blue = 0;

function OnButtonClick(){
    score += 1;
    document.getElementById("score").innerHTML = score;
    red = getRandomInt(256);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}