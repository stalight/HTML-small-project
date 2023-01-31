
function Tail(){
    document.getElementById("playerchoice").innerHTML="Tail";
    document.getElementById("playerchoice").value="tail";
    //If player clicks the button then it makes their choice written as Tail and generates the value of tail in that text box
    document.getElementById("computerchoice").innerHTML="Head";
    document.getElementById("computerchoice").value="head";
    //and similarly the computer will choose the latter, so head is written in the innerhtml and value of head is generated
    document.getElementById("Selected").style.visibility="visible";
    //makes the div visible
}

function Head(){
    document.getElementById("playerchoice").innerHTML="Head";
    document.getElementById("playerchoice").value="head";
    //If player clicks the button then it makes their choice written as head and generates the value of head in that text box
    document.getElementById("computerchoice").innerHTML="Tail";
    document.getElementById("computerchoice").value="tail";
    //and similarly the computer will choose the latter, so tail is written in the innerhtml and value of tail is generated
    document.getElementById("Selected").style.visibility="visible";
    //makes the div visible
}

function Flip(){
    var coin=Math.floor(Math.random()*2+1);
    //generates a random number (1 or 2)
    var playerchoice = document.getElementById("playerchoice").value;
    //gets the value of playerchoice
    if((computerscore*1>=10)||(playerscore*1>=10)) return;
        //if either one's score is beyond the win condition the entire function stops and nothing will happen
        //so the only thing that the player can do is to press restart and play again.
    else if(playerchoice==undefined){
        alert("Choose Your Side!")
        //if playerchoice is undefined, that means the player hasn't played anything yet, so the program will tell them to choose a side
    }
    else{
        if(coin*1==1){
            document.getElementById("coin").innerHTML="<img src=\"pic/head.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
            document.getElementById("coin").value="head";
            //if 1 is generated then generate the head image
        }
        else if(coin*1==2){
            document.getElementById("coin").innerHTML="<img src=\"pic/TAILS.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
            document.getElementById("coin").value="tail";
            //if 2 is generated then generate the head image
        }
    this.checkwin1();
    //moves on to the next function
    }   
}

var playerscore = 0
var computerscore = 0
//global variable created
function checkwin1(){
    var playerchoice = document.getElementById("playerchoice").value;
    var computerchoice = document.getElementById("computerchoice").value;
    var coin=document.getElementById("coin").value;
    //gains the value from the html
    if(coin===playerchoice){
        document.getElementById("winner").innerHTML="You have Guessed Correctly!";
        playerscore++;
        //if playerchoice value and coin value is the same (example: head == head) then player wins the guess
        //and their score is automatically +1
    }
    else if(coin===computerchoice){
        document.getElementById("winner").innerHTML="Computer's Win This Time!";
        computerscore++;
        //if computerscore value and coin value is the same (example: head == head) then computer wins the guess
        //and their score is automatically +1
    }
    document.getElementById("playerscore").innerHTML=playerscore;
    document.getElementById("computerscore").innerHTML=computerscore;
    //overwrites their score with the current score
    this.checkwin2();
    //moves on to the next function
}

function checkwin2(){
    if(playerscore*1==10){
    //if playerscore is 10 then they win
    document.getElementById("winner").innerHTML="You Win! You are the first to reach the score of 10!<br>Click Restart to play again!";
    }
    else if(computerscore*1==10){
        document.getElementById("winner").innerHTML="You Lose! Unfortunately, computer reached the score of 10 first!<br>Click Restart to play again!";
    //if computer is 10 then they win
    }
}
function reset(){
    window.location.reload()
    //the reset button reloads the entire webpage which acts like restarting the game after the player finishes their game.
}