var randno1 = Math.floor(Math.random()*6)+1;
var randimg1 = "images/dice" + randno1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randimg1);

var randno2 = Math.floor(Math.random()*6)+1;
var randimg2 = "images/dice" + randno2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randimg2);

if(randno1>randno2){
    document.querySelector("h1").innerHTML = " 🚩Player 1 wins!";
}
else if(randno1<randno2){
    document.querySelector("h1").innerHTML = " 🚩Player 2 wins!";
    
}
else{
    document.querySelector("h1").innerHTML = " Draw!";
}
