
var playerturn = 0
//Global Variable to count the number of turn played by human
var win = 0
function activate(){
    document.getElementById("one").value="one";
    document.getElementById("two").value="one";
    document.getElementById("three").value="one";
    document.getElementById("four").value="one";
    document.getElementById("five").value="one";
    document.getElementById("six").value="one";
    document.getElementById("seven").value="one";
    document.getElementById("eight").value="one";
    document.getElementById("nine").value="one";
//sets the value for unplayed parts of the playfield
}
function one(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("one").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("one").value="player1";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function two(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("two").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("two").value="player2";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function three(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("three").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("three").value="player3";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function four(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("four").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("four").value="player4";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function five(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("five").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("five").value="player5";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function six(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("six").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("six").value="player6";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function seven(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("seven").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("seven").value="player7";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function eight(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("eight").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("eight").value="player8";
    //when this button is clicked then value player9 will be generated
    //and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
    //activates the function addone()
    this.checkwin();
    //activates thefunction checkwin() ==> this is for the player's checkwin
}
}
function nine(){
    if (win*1>0) return;
    //if there's already a winner or tie then button doesn't work
    else{
    document.getElementById("nine").innerHTML="<img src=\"pic/X.png\"width=\"190cm\" height=\"190cm\" border-width=\"2cm\" border-color=\"black\">";
    document.getElementById("nine").value="player9";
//when this button is clicked then value player9 will be generated
//and will display an X which represents the player's choice for their tic tac toe turn
    this.addone()
//activates the function addone()
    this.checkwin();
//activates thefunction checkwin() ==> this is for the player's checkwin
}
}

function addone(){
    if (win*1>0) return;
    //if win is more than 0 then stop function
    else{
    playerturn++
    //adds the global variable by 1 after each player turn to show how many turns the player is on
    this.checktie()
    //after adding, moves on to the function checktie()
    }
  }
    

function checktie(){
    if (playerturn*1>=5){
    //if playerturn is 5 then writes it's a tie!
    document.getElementById("result").innerHTML="It's a Tie!"
    document.getElementById("result").style.visibility="visible";
    win++;
    this.checkwin();
    //increases the variable win by 1 to mark that it's a tie and the game need to be restarted
    }
    else{
        this.counter();
    }
}
function counter(){
    var box1=document.getElementById("one").value;
    var box2=document.getElementById("two").value;
    var box3=document.getElementById("three").value;
    var box4=document.getElementById("four").value;
    var box5=document.getElementById("five").value;
    var box6=document.getElementById("six").value;
    var box7=document.getElementById("seven").value;
    var box8=document.getElementById("eight").value;
    var box9=document.getElementById("nine").value;
    //gets the value from each box in order to check win
    if(playerturn*1>=5) return;
    else if(win*1>0) return;
    //if the global variable (player's turn and win) is 5 then function stops
    else{
        //Horizontal Counters so that the computer will block the player everytime the player is about to win
        if((box1==="player1")&&(box2==="player2")&&(box3==="one")){
            document.getElementById("three").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("three").value="computer3";
        }
        else if((box4==="player4")&&(box5==="player5")&&(box6==="one")){
            document.getElementById("six").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("six").value="computer6";
        }
        else if((box7==="player7")&&(box8==="player8")&&(box9==="one")){
            document.getElementById("nine").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("nine").value="computer9";
        }

        //Above 3 counters are as followed for each boxes
        //1.
        //[x][x][o]
        //[ ][ ][ ]
        //[ ][ ][ ]
        //2.
        //[ ][ ][ ]
        //[x][x][o]
        //[ ][ ][ ]
        //3.
        //[ ][ ][ ]
        //[ ][ ][ ]
        //[x][x][o]

        else if((box1==="one")&&(box2==="player2")&&(box3==="player3")){
            document.getElementById("one").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("one").value="computer1";
        }
        else if((box4==="one")&&(box5==="player5")&&(box6==="player6")){
            document.getElementById("four").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("four").value="computer4";
        }
        else if((box7==="one")&&(box8==="player8")&&(box9==="player9")){
            document.getElementById("seven").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("seven").value="computer7";
        }

        //Above 3 counters are as followed for each boxes x=player, o=computer
        //1.
        //[o][x][x]
        //[ ][ ][ ]
        //[ ][ ][ ]
        //2.
        //[ ][ ][ ]
        //[o][x][x]
        //[ ][ ][ ]
        //3.
        //[ ][ ][ ]
        //[ ][ ][ ]
        //[o][x][x]

        else if((box1==="player1")&&(box2==="one")&&(box3==="player3")){
            document.getElementById("two").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("two").value="computer2";
        }
        else if((box4==="player4")&&(box5==="one")&&(box6==="player6")){
            document.getElementById("five").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("five").value="computer5";
        }
        else if((box7==="player7")&&(box8==="one")&&(box9==="player9")){
            document.getElementById("eight").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("eight").value="computer8";
        }

        //Above 3 counters are as followed for each boxes x=player, o=computer
        //1.
        //[x][o][x]
        //[ ][ ][ ]
        //[ ][ ][ ]
        //2.
        //[ ][ ][ ]
        //[x][o][x]
        //[ ][ ][ ]
        //3.
        //[ ][ ][ ]
        //[ ][ ][ ]
        //[x][o][x]

        //Vertical Counters so that the computer will block the player everytime the player is about to win
        else if((box1==="player1")&&(box4==="player4")&&(box7==="one")){
            document.getElementById("seven").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("seven").value="computer7";
        }
        else if((box2==="player2")&&(box5==="player5")&&(box8==="one")){
            document.getElementById("eight").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("eight").value="computer8";
        }
        else if((box3==="player3")&&(box6==="player6")&&(box9==="one")){
            document.getElementById("nine").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("nine").value="computer9";
        }
        //Above 3 counters are as followed for each boxes x=player, o=computer
        //1.
        //[x][ ][ ]
        //[x][ ][ ]
        //[o][ ][ ]
        //2.
        //[ ][x][ ]
        //[ ][x][ ]
        //[ ][o][ ]
        //3.
        //[ ][ ][x]
        //[ ][ ][x]
        //[ ][ ][o]


        else if((box1==="one")&&(box4==="player4")&&(box7==="player7")){
            document.getElementById("one").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("one").value="computer1";
        }
        else if((box2==="one")&&(box5==="player5")&&(box8==="player8")){
            document.getElementById("two").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("two").value="computer2";
        }
        else if((box3==="one")&&(box6==="player6")&&(box9==="player9")){
            document.getElementById("three").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("three").value="computer3";
        }
        //Above 3 counters are as followed for each boxes x=player, o=computer
        //1.
        //[o][ ][ ]
        //[x][ ][ ]
        //[x][ ][ ]
        //2.
        //[ ][o][ ]
        //[ ][x][ ]
        //[ ][x][ ]
        //3.
        //[ ][ ][o]
        //[ ][ ][x]
        //[ ][ ][x]

        else if((box1==="player1")&&(box4==="one")&&(box7==="player7")){
            document.getElementById("four").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("four").value="computer4";
        }
        else if((box2==="player2")&&(box5==="one")&&(box8==="player8")){
            document.getElementById("five").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("five").value="computer5";
        }
        else if((box3==="player3")&&(box6==="one")&&(box9==="player9")){
            document.getElementById("six").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("six").value="computer6";
        }
        //Above 3 counters are as followed for each boxes x=player, o=computer
        //1.
        //[x][ ][ ]
        //[o][ ][ ]
        //[x][ ][ ]
        //2.
        //[ ][x][ ]
        //[ ][o][ ]
        //[ ][x][ ]
        //3.
        //[ ][ ][x]
        //[ ][ ][o]
        //[ ][ ][x]


        //Diagonal Counters so that the computer will block the player everytime the player is about to win
        else if((box1==="player1")&&(box5==="player5")&&(box9==="one")){
            document.getElementById("nine").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("nine").value="computer9";
        }
        else if((box3==="player3")&&(box5==="player5")&&(box7==="one")){
            document.getElementById("seven").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("seven").value="computer7";
        }
        //Above 2 counters are as followed for each boxes x=player, o=computer
        //1.
        //[x][ ][ ]
        //[ ][x][ ]
        //[ ][ ][o]
        //2.
        //[ ][ ][x]
        //[ ][x][ ]
        //[o][ ][ ]

        else if((box1==="one")&&(box5==="player5")&&(box9==="player9")){
            document.getElementById("one").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("one").value="computer1";
        }
        else if((box3==="one")&&(box5==="player5")&&(box7==="player7")){
            document.getElementById("three").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("three").value="computer3";
        }
        //Above 2 counters are as followed for each boxes x=player, o=computer
        //1.
        //[o][ ][ ]
        //[ ][x][ ]
        //[ ][ ][x]
        //2.
        //[ ][ ][o]
        //[ ][x][ ]
        //[x][ ][ ]
        else if((box1==="player1")&&(box5==="one")&&(box9==="player9")){
            document.getElementById("five").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("five").value="computer5";
        }
        else if((box3==="player3")&&(box5==="one")&&(box7==="player7")){
            document.getElementById("five").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("five").value="computer5";
        }
        //Above 2 counters are as followed for each boxes x=player, o=computer
        //1.
        //[x][ ][ ]
        //[ ][o][ ]
        //[ ][ ][x]
        //2.
        //[ ][ ][x]
        //[ ][o][ ]
        //[x][ ][ ]

        else{
            //activates the function computer()
            this.computer()
            //if it doesn't trigger any of the counters then computer will pick a slot of its own
        }
        this.checkwin2();
            //after all of the functions above, it will activate the function "checkwin2()" which is the checkwin function specifically for the computer
    }
}
function computer(){
    if(win*1>0) return;
    else if(playerturn*1>=5) return;
    else{
    do{
        //the "do" statement will make the function below activate at least once
        //if the value is not "one"(the value which means that the box is not played yet by both computer or player)
        //the function will continue looping
        var computerChoice=Math.floor(Math.random()*9+1);
        //generates a random number from 1 to 9
    if (computerChoice*1==1){
        var turn = document.getElementById("one").value;
        }
        else if(computerChoice*1==2){
        var turn = document.getElementById("two").value;
        }
        else if(computerChoice*1==3){
        var turn = document.getElementById("three").value;
        }
        else if(computerChoice*1==4){
        var turn = document.getElementById("four").value;
        }
        else if(computerChoice*1==5){
        var turn = document.getElementById("five").value;
        }
        else if(computerChoice*1==6){
        var turn = document.getElementById("six").value;
        }
        else if(computerChoice*1==7){
        var turn = document.getElementById("seven").value;
        }
        else if(computerChoice*1==8){
        var turn = document.getElementById("eight").value;
        }  
        else if(computerChoice*1==9){
        var turn = document.getElementById("nine").value; 
        }
        //the function above works like this:
        //the computer generates a random number from 1~9,
        //the computer will check the corresponding box of the random number that it generates
        //this is so that I do not have to make multiple "turn" variables such as "turn1", "turn2".etc
        //which would make coding below more complicated.
        //If the value it recieves from the tic tac toe box is not played (Also known as, the value is not "one")
        //it will move on
        //but if it is already played, then it will loop the process again until it generates a box number that is not played.
    }
    while((turn!=="one")){
        //the condition is that if the box that the computer chooses is played, it will loop again (basically to phrase this condition it's: "loop while turn (tile) is not one (played)")
        //the function below are not part of the loop.
        if ((computerChoice*1==1)&&(turn==="one")){
            document.getElementById("one").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("one").value="computer1";
            
            //if computer generates a 1 then box 1 will be replaced with circle and generate the value of computer1 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
            }
        
        else if((computerChoice*1==2)&&(turn==="one")){
            document.getElementById("two").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("two").value="computer2";
            
            //if computer generates a 2 then box 2 will be replaced with circle and generate the value of computer2 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==3)&&(turn==="one")){
            document.getElementById("three").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("three").value="computer3";
            
            //if computer generates a 3 then box 3 will be replaced with circle and generate the value of computer3 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==4)&&(turn==="one")){
            document.getElementById("four").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("four").value="computer4";
            
            //if computer generates a 4 then box 4 will be replaced with circle and generate the value of computer4 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==5)&&(turn==="one")){
            document.getElementById("five").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("five").value="computer5";
            
            //if computer generates a 5 then box 5 will be replaced with circle and generate the value of computer5 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==6)&&(turn==="one")){
            document.getElementById("six").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("six").value="computer6";
            
            //if computer generates a 6 then box 6 will be replaced with circle and generate the value of computer6 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==7)&&(turn==="one")){
            document.getElementById("seven").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("seven").value="computer7";
            
            //if computer generates a 7 then box 7 will be replaced with circle and generate the value of computer7 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==8)&&(turn==="one")){
            document.getElementById("eight").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("eight").value="computer8";
    
            //if computer generates a 8 then box 8 will be replaced with circle and generate the value of computer8 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        
        else if((computerChoice*1==9)&&(turn==="one")){
            document.getElementById("nine").innerHTML="<img src=\"pic/O.png\"width=\"190cm\" height=\"190cm\">";
            document.getElementById("nine").value="computer9";
            
            //if computer generates a 9 then box 9 will be replaced with circle and generate the value of computer9 on that division
            //and changes the the box into a O representing that the computer chosen it for its tic tac toe turn
        }
        this.checkwin2()
        //after all of the functions above, it will activate the function "checkwin2()" which is the checkwin function specifically for the computer
        }
}
}


        function checkwin(){
            //player's win condition
            var box1=document.getElementById("one").value;
            var box2=document.getElementById("two").value;
            var box3=document.getElementById("three").value;
            var box4=document.getElementById("four").value;
            var box5=document.getElementById("five").value;
            var box6=document.getElementById("six").value;
            var box7=document.getElementById("seven").value;
            var box8=document.getElementById("eight").value;
            var box9=document.getElementById("nine").value;
            //gets the value from each box in order to check win
            //win conditions are as followed
            /*
            [1 2 3]
            [4 5 6]
            [7 8 9]
            [1 4 7]
            [2 5 8]
            [3 6 9]
            [1 5 9]
            [7 5 3]
            */ 
           
            /*
            As for what the value represents and how the computer uses it to check if the player has won:
            player1 = box1 played by player
            player2 = box2 played by player
            ...
            player9 = box9 played by player        
            */
            // below, you will see that if each value that it recieves from each box matches the win condition

            if ((box1==="player1")&&(box2==="player2")&&(box3==="player3")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box4==="player4")&&(box5==="player5")&&(box6==="player6")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box7==="player7")&&(box8==="player8")&&(box9==="player9")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box1==="player1")&&(box4==="player4")&&(box7==="player7")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box2==="player2")&&(box5=="player5")&&(box8==="player8")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box3==="player3")&&(box6==="player6")&&(box9==="player9")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box1==="player1")&&(box5==="player5")&&(box9==="player9")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box3==="player3")&&(box5==="player5")&&(box7==="player7")){
                document.getElementById("result").innerHTML="You Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }

            //if the player wins from any of the conditions, it will write the result on the header and make it visible because
            //it's originally hidden as I set it in the css
            //increases the variable win by 1 to mark that there's a winner and the game need to be restarted
        }

        function checkwin2(){
            //computer win condition
            var box1=document.getElementById("one").value;
            var box2=document.getElementById("two").value;
            var box3=document.getElementById("three").value;
            var box4=document.getElementById("four").value;
            var box5=document.getElementById("five").value;
            var box6=document.getElementById("six").value;
            var box7=document.getElementById("seven").value;
            var box8=document.getElementById("eight").value;
            var box9=document.getElementById("nine").value;
            //gets the value from each box in order to check win
            //win conditions are as followed
            /*
            [1 2 3]
            [4 5 6]
            [7 8 9]
            [1 4 7]
            [2 5 8]
            [3 6 9]
            [1 5 9]
            [7 5 3]
            */ 
           
            /*
            As for what the value represents and how the computer uses it to check if the player has won:
            computer1 = box1 played by computer
            computer2 = box2 played by computer
            ...
            computer9 = box9 played by computer        
            */
            // below, you will see that if each value that it recieves from each box matches the win condition
            if((box1==="computer1")&&(box2==="computer2")&&(box3==="computer3")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box4==="computer4")&&(box5==="computer5")&&(box6==="computer6")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box7==="computer7")&&(box8==="computer8")&&(box9==="computer9")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box1==="computer1")&&(box4==="computer4")&&(box7==="computer7")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box2==="computer2")&&(box5==="computer5")&&(box8==="computer8")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box3==="computer3")&&(box6==="computer6")&&(box9==="computer9")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box1==="computer1")&&(box5==="computer5")&&(box9==="computer9")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;
            }
            else if((box7==="computer7")&&(box5==="computer5")&&(box3==="computer3")){
                document.getElementById("result").innerHTML="Computer Win!"
                document.getElementById("result").style.visibility="visible";
                win++;

            }
            //if the computer wins from any of the conditions, it will write the result on the header and make it visible because
            //it's originally hidden as I set it in the css
            //increases the variable win by 1 to mark that there's a winner and the game need to be restarted
        }

    function reset(){
        window.location.reload()
        //the reset button reloads the entire webpage which acts like restarting the game after the player finishes their game.
    }