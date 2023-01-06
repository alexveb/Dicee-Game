// Function Generate Number between 1 to 6

function prediction(n) {
    var RandomNumber = Math.random();
    

    for(var i = 0; i < n; i++){
        var result = (RandomNumber * n) + 1;
        result = Math.floor(result);
        }
        return result;

}

prediction(6);

var result1 = prediction(6);

//checking results to display right image

if (result1 === 1){
    document.querySelector("img.img1").srcset = "images/dice1.png";
} else if (result1 === 2){
    document.querySelector("img.img1").srcset = "images/dice2.png";
} else if (result1 === 3){
    document.querySelector("img.img1").srcset = "images/dice3.png";
} else if (result1 === 4){
    document.querySelector("img.img1").srcset= "images/dice4.png";
} else if (result1 === 5){
    document.querySelector("img.img1").srcset = "images/dice5.png";
} else {
    document.querySelector("img.img1").srcset = "images/dice6.png";
}

prediction(6);

var result2 = prediction(6);

//checking results to display right image

if (result2 === 1){
    document.querySelector("img.img2").srcset = "images/dice1.png";
} else if (result2 === 2){
    document.querySelector("img.img2").srcset = "images/dice2.png";
} else if (result2 === 3){
    document.querySelector("img.img2").srcset = "images/dice3.png";
} else if (result2 === 4){
    document.querySelector("img.img2").srcset= "images/dice4.png";
} else if (result2 === 5){
    document.querySelector("img.img2").srcset = "images/dice5.png";
} else {
    document.querySelector("img.img2").srcset = "images/dice6.png";
}

//check if player 1 wins or player 2 wins or we have a Draw

if (result1 > result2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (result1 < result2){
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").textContent = "Draw";
}