var name = prompt("What is your name?");
  if (name != null) {
  alert("Hello " + name + "!");
}

function Character() {
  this.funnyName = Math.floor(Math.random() * Math.floor());
  this.age = Math.floor(Math.random() * Math.floor());
  this.cartoon = Math.floor(Math.random() * Math.floor()); 
  this.special = Math.floor(Math.random() * Math.floor());
}

Character.prototype.roll = function() {
  this.funnyName = funnyNameList[Math.floor(Math.random() * funnyNameList.length)];
  this.age = [Math.floor(Math.random() * 5) * 10];
  this.cartoon = cartoonList[Math.floor(Math.random() * cartoonList.length)]; 
  this.special = specialToolsList[Math.floor(Math.random() * specialToolsList.length)];
}

var funnyNameList = ["Bun Bun the Bunny", "Slydog the Fox", "Rolly the Snowman", "Ms. Chuckles the Chicken"];
var cartoonList = ["Animator", "Adventurer", "Lucky", "Cheater"];
var specialToolsList = ["A Portable Hole", "A Tardis Time Transporter", "A Frying Pan", "Snowballs"]; 



function startGame() {
var readytogo = prompt("Do you want to play a game? Answer Y or N");
if (readytogo == "Y") {
  
 var yourCharacter = new Character();
    yourCharacter.roll();


  document.write("<h1>Your name is:   " + yourCharacter.funnyName + "<br><h1>"); 
  document.write("<h1>You are " + yourCharacter.age + " years old<br></h1>");
  document.write("<h1>Your character for the game is:   " + yourCharacter.cartoon + "<br></h1>");
  document.write("<h1>You have a special item to defend yourself against the other Toon characters. <br>You have:   " + yourCharacter.special + "<br></h1>");

}
 else {
      alert("Come back again to play!")
      
    }
}
startGame();