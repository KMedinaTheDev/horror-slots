//Morning Challenge - Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update
alert("You Are Here!");
//what can the user do?

//what does the user expect?
 // 3 reels with 5 options that move
 var totalBet=0;
 var startingCred= 100;
 //var newCred=0;
 var winnings=0;
 var slot1;
 var slot2;
 var slot3;
 var betType = "none";


 function checkCredits(){
   if (startingCred < 0) {
     alert("You Don't Have Enough Credits! The Credits will now Reset!");
     totalBet=0;
     startingCred=100;
     //newCred=0;
     $("#totalBet").text("Total Bet: " +totalBet);
     $("#credits").text(startingCred);
   }
   else{
     runSlots();
   }
 }

 function runSlots(){

   var images=["alien.gif","fairy017.gif", "vampire.gif", "wwolf.gif","zombies.gif"];

   slot1 = Math.round(Math.random()*4);
   slot2 = Math.round(Math.random()*4);
   slot3 = Math.round(Math.random()*4);
   $("#slotOne").attr("src", images[slot1])
   $("#slotTwo").attr("src", images[slot2])
   $("#slotThree").attr("src", images[slot3])

   if(betType == "min"){
     min();
   }
   else {
     max();
   }
   playerWins();

}
  // playerWins();

//what does the user see?

 //-3 reels, 3 sections
 //5 items per reel


 //total
  //-if player bet min $1 and wins the total should go up by 1
  function min(){
      startingCred -= 1;
      //newCred=startingCred;
      totalBet += 1;
      $("#totalBet").text("Total Bet: " +totalBet);
      $("#credits").text("Credits: "+startingCred);

      // $.playSound("../soundeffects/wickedwitchlaugh.mp3");
        //if player bets min $1 and loses the total will go down by 1
  };

  //if player bets max $5 and wins the total goes up by 5
  function max(){
    startingCred -= 5;
    //=startingCred;
      totalBet += 5;
      $("#totalBet").text("Total Bet: " +totalBet);
      $("#credits").text("Credits: "+startingCred);

        //if player bets max $5 and loses the total goes down by 5
  };

//only use this function when the playerWins
  function clearTotalBet(){
    totalBet=0;
  }
//
  function playerWins(){
      if(slot1 == slot2 && slot2 == slot3){
      $("#winLose").text("You've Won $ "+ totalBet*2);
      winnings+=totalBet*2;
      $("#trackWinnings").text("$$$: "+winnings);
      // $.playSound("http://www.freesfx.co.uk/rx2/mp3s/4/16437_1460642686.mp3");
      }
      else{

        $("#winLose").text("You Lost,Try Again!");
        // $.playSound("https://www.freesoundeffects.com/free-track/wickedmalelaugh1-466398/");

      }
      clearTotalBet();
  }

$(document).ready(function(){
  //user clicks bet and reels will spin:
  $(".minBet").on("click", function(){
    betType = "min";
    checkCredits();
  });
  $(".maxBet").on("click", function(){
    betType = "max";
    checkCredits();
  });
});
