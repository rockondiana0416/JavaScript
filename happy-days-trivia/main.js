var readytogo = prompt("Do you know all about Happy Days? Answer Y or N");
if (readytogo === "Y") {
  startGame();
}

function startGame() {
  var score = 0;
  var ans1 = prompt("Q1: What item did The Fonz carry around in his back pocket? A) a comb B) hair gel C) a photo of himself.");
  if (ans1 == "A") {
    alert("Heeeeyy!!! Your pretty cool!");
    score++;
    alert("Your score is " + score);
  }
  else {
    alert("Sorry. Your a Potsie!!");
  }
  var ans2 = prompt("Q2: Who is the actor that played Richie Cunningham? A) Ron Goodman B) Ron Jeremy C) Ron Howard");
  if (ans2 == "C") {
    alert("Heeeeyy!!! Your pretty cool!");
    score++;
    alert("Your score is " + score);
  }
  else {
    alert("Sorry. Your a Potsie!!");
  }
  var ans3 = prompt("Q3: Who did Joanie fall in love with? A) Potsie B) Chuck C) Chachie");
  if (ans3 == "C") {
    alert("Heeeeyy!!! Your pretty cool!");
    score++;
    alert("Your score is " + score);
  }
  else {
    alert("Sorry. Your a Potsie!!");
  }
  var ans4 = prompt("Q4: What was Richie and Joanie's Dad's name? A) Frank B) Howard C) Jack");
  if (ans4 == "B") {
    alert("Heeeeyy!!! Your pretty cool!");
    score++;
    alert("Your score is " + score);
  }
  else {
    alert("Sorry. Your a Potsie!!")
  }
  var ans5 = prompt("Q5: What was the family's last name? A) Cunningham B) Bunker C) Roper");
  if (ans5 == "A") {
    alert("Heeeeyy!!! Your pretty cool!");
    score++;
    alert("Your score is " + score);
  }
  else {
    alert("Sorry. Your a Potsie!!");
  }
}

