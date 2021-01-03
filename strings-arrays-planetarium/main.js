function printArray() {
  document.write("<p>This is your new array: </p>");
    for (i=0; i < splitWords.length; i++) {
      document.write(splitWords[i]);
      document.write("<br>");
  }
}
//Check to see if the string input meets the 25+ character limit. If it does not, send a message and ask for another string.
do {
var planets = prompt("Please enter 5 names of planets with spaces between that are at least 25 letters.");
}
while (planets.length < 25);

var planetsCnt = planets.length;
  alert("You have " + planetsCnt + " letters in your array!");

//Output the original string as it was entered onto the web page document.
document.write("<p>These are the words that you entered: "  + planets + " </p>");

//Output the original string in all lower case letters.
document.write("<p>These are the words you entered in lower case: " + planets.toLowerCase() + "</p>");

//Output the original string in all upper case letters.
document.write("<p>These are the words you entered in upper case: " + planets.toUpperCase() + "</p>");

//Output a message indicating the total characters within the string.
document.write("<p>The number of characters you entered is: " + "<br>" + planetsCnt + "</p>");

//Output the characters between index 5 and index 10.
document.write("<p>These are the letters of index 5 and 10: " + "<br>" + planets.slice(5, 10) + "</p>");

//Output 5 characters starting from position 15.
document.write("<p>These are the letters of index 15 and 20: " + "<br>" + planets.slice(15, 20) + "</p>");

//combine a string with another string
var galaxyWords =   " star moon planets galaxy asteroid"; 
  var galaxyArray = planets.concat(galaxyWords);  
  document.write("<p>Your strings combined are: " + "<br>" + galaxyArray + "</p>");

//split words into an array
var splitWords = galaxyArray.split(" ");
  document.write("<p>These are your words split into an array:" + "<br>" + splitWords + "</p>");

//Output the list of array values. This counts 1 extra word???
  document.write("<p>Amount of words: " + "<br>" + splitWords.length + "</p>");
  
//Output the total number of items in the array. 
//Remove the first item in the array. Output the new array values.
splitWords.shift();
//Make this a function by adding my function and adding it to all lists  
document.write("<p>This is your new array: </p>");
    for (i=0; i < splitWords.length; i++) {
      document.write(splitWords[i]);
      document.write("<br>");
  }

//Add the word "banana" to the end of the array. 

    splitWords.push("bananna");
    document.write("<p>This is your array with bananna added: <br>" + splitWords + "</p> ");

//Reverse the elements in the array. Output the new array values.
    document.write("<p>This is your array in reverse " + splitWords.reverse() + "</p> ");

//Replace the item in the 2nd position/key with the word stardust. I could not figure this out. I tried so many ways. 
splitWords[2] = 'stardust';
printArray();

//Sort the array in alphabetical order. 
splitWords.sort();
printArray();