var randonNumber1 = Math.floor(Math.random()*6)+1;
var randomimage1 = ("images/" + "dice" + randonNumber1 + ".png");
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);

var randonNumber2 = Math.floor(Math.random()*6)+1;
var randomimage2 = ("images/" + "dice" + randonNumber2 + ".png");
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if (randonNumber1>randonNumber2)
{
  document.querySelector("h1").innerHTML= "Rinkal Mathur wins!";
}
else if (randonNumber2>randonNumber1)
{
  document.querySelector("h1").innerHTML= "Shivani wins!";
}
else
{
  document.querySelector("h1").innerHTML= "It's a DRAW!";
}
