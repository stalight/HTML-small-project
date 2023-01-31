//gerenates the global variable
var playerguesses = 0;
//this is the number of chances that the player has to guess
var currentchance = 0;
//this is how many times the player has guessed
var StartingRange = 0;
//The starting range of the number range
var EndingRange = 0;
//The ending range of the number range
var win=0
//Records if there's a win or loss (0 means none, 1 means has)
var comp = 0
//this records the computer's choice

function difficulty(){
    var easy = document.getElementById("Easy");
    var medium = document.getElementById("Medium");
    var hard = document.getElementById("Hard");
    var custom = document.getElementById("Custom");
    //gets the value of the radio button
    if((easy.checked==false)&&(medium.checked==false)&&(hard.checked==false)&&(custom.checked==false)){
        alert("Please Choose a difficulty!");
        //if nothing is checked then tell them to choose a difficulty
    }
    else if(easy.checked==true){
        this.easy();
        //if easy is checked then forward to easy()
    }
    else if(medium.checked==true){
        this.medium();
        //if medium is checked then forward to medium()
    }
    else if(hard.checked==true){
        this.hard();
        //if hard is checked then forward to hard()
    }
    else if(custom.checked==true){
        this.custom();
        //if custom is checked then forward to custom()
    }
    //forwards to different function depending on which radio button the user checked
}

function easy(){
    var computerChoice=(Math.round(Math.random()*25))
    //computer chooses the random number from the range 0~25
    comp=comp*1+computerChoice*1;
    //adds the computer choice to the global variable
    document.getElementById("HOW").innerHTML="The Computer Has Chosen!";
    //tells the user that the computer has chosen
    document.getElementById("range").innerHTML="Range is 0 ~ 25";
    //tell them the range of the number that they can guess from
    EndingRange=EndingRange*1+25
    //records the ending range on global variable
    playerguesses=playerguesses*1+5;
    //records the starting range on global variable
    document.getElementById("difficulty").remove();
    //removes the div where the player can choose the difficulty (only way to replay is to click restart)
    document.getElementById("playfield").style.visibility="visible";
    //make the playfield (where the player can guess) visible
}

function medium(){
    var computerChoice=(Math.round(Math.random()*50))
    //computer chooses the random number from the range 0~50
    comp=comp*1+computerChoice*1;
    //adds the computer choice to the global variable
    document.getElementById("range").innerHTML="Range is 0 ~ 50";
    //tell them the range of the number that they can guess from
    document.getElementById("HOW").innerHTML="The Computer Has Chosen!";
    //tells the user that the computer has chosen
    EndingRange=EndingRange*1+50;
    //records the ending range on global variable
    playerguesses=playerguesses*1+5;
    //records the number of chances the player has on global variable
    document.getElementById("difficulty").remove();
    //removes the div where the player can choose the difficulty (only way to replay is to click restart)
    document.getElementById("playfield").style.visibility="visible";
    //make the playfield (where the player can guess) visible
}

function hard(){
    var computerChoice=(Math.round(Math.random()*100))
    //computer chooses the random number from the range 0~100
    comp=comp*1+computerChoice*1;
    //adds the computer choice to the global variable
    document.getElementById("range").innerHTML="Range is 0 ~ 100";
    //tell them the range of the number that they can guess from
    document.getElementById("HOW").innerHTML="The Computer Has Chosen!";
    //tells the user that the computer has chosen
    EndingRange=EndingRange*1+100;
    //records the ending range on global variable
    playerguesses=playerguesses*1+10;
    //records the number of chances the player has on global variable
    document.getElementById("difficulty").remove();
    //removes the div where the player can choose the difficulty (only way to replay is to click restart)
    document.getElementById("playfield").style.visibility="visible";
    //make the playfield (where the player can guess) visible
}

function custom(){
    var SV=document.getElementById("Starting").value;
    //Gets the custom starting value from number box
    var EV=document.getElementById("Ending").value;
    //Gets the custom ending value from number box
    var chance=document.getElementById("GuessChance").value;
    //Gets the custom guess chance value from number box
    if ((EV*1==0)&&(SV*1==0)&&(chance*1==0)){
        alert("Please insert your custom difficulty!")
    }
    else if (EV*1<SV*1){
        alert("The Starting Value should be Smaller than the Ending Value!")
    //Tells the user that they inputted the value wrongly
    }
    else if((SV*1==0)&&(EV*1==0)||(chance<=0)){
        alert("Please input your range and your Guess Chance (It shouldn't be empty or 0)")
        //Tell them that they have some errors in their inputs
    }
    //if SV and EV are both 0 (meaning the user didn't input any number)
    // it will alert the user to input their number after the button is pressed
    else if(SV*1==EV*1){
        alert("Starting Value and Ending Value cannot be the Same")
        //Tells the user that they inputted the value wrongly
    }
    else{
    var computerChoice=(Math.ceil(Math.random()*(EV*1-SV*1)+SV*1))*1;
    // Generates a random number, multiply by the difference from the range
    //So that the result always ends within the range, and Math.Ceil to round it up and add by 1 so that it will not be below the starting value
    comp=comp*1+computerChoice*1;
    //adds the computer choice to the global variable
    playerguesses=playerguesses*1+chance*1;
    //records the number of chances the player has on global variable
    StartingRange=StartingRange*1+SV*1;
    //records the starting range on global variable
    EndingRange=EndingRange*1+EV*1;
    //records the ending range on global variable
    document.getElementById("HOW").innerHTML="The Computer Has Chosen!";
    //tells the user that the computer has chosen
    document.getElementById("range").innerHTML="Range is "+StartingRange+"~"+EndingRange+"";
    //tell them the range of the number that they can guess from
    document.getElementById("playerguess").style.visibility="visible";
    document.getElementById("HOW").style.visibility="visible";
    //make the playfield (where the player can guess) visible
    document.getElementById("difficulty").remove();
    //removes the div where the player can choose the difficulty (only way to replay is to click restart)
    document.getElementById("playfield").style.visibility="visible";
    //Tells the user that the computer has chosen a number
    //and opens up the method for them to guess
    }
}

function Guess(){
    var playernumber= document.getElementById("Guess").value;

    //gets value set by computer
    //Takes the number that the player has guessed
    if(win*1===1) return;
    else{
        if((playernumber*1>EndingRange)||(playernumber*1<StartingRange)){
        //if player number is greater ending value
        //or if player number is less than starting value
        document.getElementById("HOW").innerHTML="Your Guess is not within Range!";
        //then their number is not within range
    }
    else if(currentchance*1<=playerguesses*1){
        //if playerguesses (the number of time the player guessed is less or equal to 5)
        if(playernumber*1==comp*1){
            currentchance++;
            document.getElementById("HOW").innerHTML="You Win!, You have guessed "+currentchance+" times!<br>Click Restart to play again!";
            document.getElementById("GuessNumber").style.visibility="hidden";
            win++;
        //if computerchoice and player's choice is equal then player wins
        //mark that game is over by increasing win by 1
        }
        else if(playernumber*1>comp*1){
            document.getElementById("HOW").innerHTML="You Guess is larger than the chosen Number!";
            currentchance++;
            this.checkloss();
            this.checkturn();
            //if player number is larger than computer's number, tell them that it's larger
            //adds 1 to playerguesses and activates function checklose()
        }
        else if(playernumber*1<comp*1){
            document.getElementById("HOW").innerHTML="Your Guess is less than the chosen Number!";
            currentchance++;
            this.checkloss();
            this.checkturn();
            //if player number is less than computer's number, tell them that it's smaller
            //adds 1 to playerguesses and activates function checklose()
        }        
    }
}
}
function checkloss(){
    if(currentchance*1===playerguesses*1){
        document.getElementById("HOW").innerHTML="You Lost! The Number was "+comp+"!<br>Click Restart to play again!";
        win++;
    //if the answer is not guessed even after 5 turns, then tell them they lost and the actual answer
    //this is activated after the win condition because the function above will add one
    //after checking for win, if they're in the same question then this function's commands
    //will over write the previous text, so I'm activating this after they added 1 to the playerguesses variable
    }
}
function checkturn(){
    document.getElementById("GuessNumber").innerHTML="Number of Guesses: "+(currentchance*1)+"/"+playerguesses+"";    
    //tells them how many times they have guessed
}
function reset(){
    window.location.reload()
    //the reset button reloads the entire webpage which acts like restarting the game after the player finishes their game.
}