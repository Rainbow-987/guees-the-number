

playername = localStorage.getItem("player_name");



// random value generated

var guess = 0;

var y =Math.floor(Math.random()*10+1);
function submit(){

        // counting the number of guesses
        var x =document.getElementById("guessField").value;
        // made for correct Guess
        if(x == y)
        {
            alert("Congratulations!!! "+playername+" you guessed it right in " +guess+" GUESS");
            guess= 1;   
        }

        else if (x>y)
        {
            guess++;
            alert("oops sorry!! Try a smaller number");
        }
        else
        {
            guess++;
            alert("oops sorry!! Try a greater number")
        }
  
} 


function playAgain(){
    y = Math.floor(Math.random()*10+1);
}
// function for number guessed by user     
