alert("wlecome to the game");
var password=5;
var secretnumber=prompt("enter the secret no.");
if(password===Number(secretnumber))
{
	console.log("you are correct");
}
else if(password>Number(secretnumber))
{
	console.log("you are bit low");
}
else(password<Number(secretnumber))
{
	console.log("you are bit high");
}