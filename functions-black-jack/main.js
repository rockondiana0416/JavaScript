var name = prompt("What is your name?")
  if (name != null);{
  alert("Hello " + name + "!");
}

var readytogo = prompt("Do you want to play blackjack? Answer Y or N");
if (readytogo == "Y") {
  startGame();
}

function startGame() {
var cards = (Math.floor(Math.random() * 5) + 1); 
  alert("You have " + cards + " cards to play.");
  
  var money = (Math.floor(Math.random() * 100) + 1); 
  alert("You have $" + money + " go shopping with.");

  var ques1 = prompt("The dealer deals your cards and you get and Ace, what do you do? A) Bet all your money B) Play it safe and bet $100 C) fold");
  if (ques1 == "A") {
    alert("Bet it all!");
    }
  else if(ques1 == "B") {
    alert("Good Job!");
    }
  else if(ques1 == "C") {
    alert("No! I hate to see you leave!");
    }
  
  var ques2 = prompt("What number do you want to get to hit blackjack? A) 21 B) 14 C) Rummi");
  if (ques2 == "A") {
    alert("Yes! You know the game!");
    }
  else if(ques2 == "B") {
    alert("Sorry! That's too low. We want to win some money!");
    }
  else if(ques2 == "C") {
  	alert("Oh my! That's the wrong game.");
    }
  
  var ques3 = prompt("You have lossed a couple of hands. What do you want to do? A) Keep playing. Your luck will turn around. B) Cash in your chips. C) Hang out to see if others will win.");
  if (ques3 == "A") {
    alert("Your going to win!");
    }
  else if(ques3 == "B") {
    alert("Oh no! I'm so sad to see you go!");
    }
  else if(ques3 == "C") {
  	alert("Don't wait around for others! You can win!");
    }
    
  var ques4 = prompt("What other games do you like to play at the casino? A) Slots B) Roulet C) You don't like the casino")
  if (ques4 == "A") {
    alert("I like slots too!");
    }
  else if(ques4 == "B") {
    alert("Get ready to spin the ball!");
    }
  else if(ques4 == "C") {
  	alert("It's good to not gamble!");
    }
    
  var ques5 = prompt("I think it's fun to walk around the casino. What else you you like to do? A) Look at the lights. B) Go shopping at all the stores. C) Keep gambleing.")
  if(ques5 == "A") {
    alert("The lights are so mezmorizing!");
    }
  else if(ques5 == "B") {
    alert("You can buy a lot of stuff with all the money you won! ");
    }
  else if(ques5 == "C") {
  	alert("Yeah! Let's win more money!!!!");
    
   
  }
  
}

function sayBye () { 
alert("Thanks for playing with me, " + name + " Bye!!");
}

sayBye();