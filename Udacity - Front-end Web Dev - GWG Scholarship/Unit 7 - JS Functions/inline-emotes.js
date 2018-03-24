/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(num) {
  var message = "";
  for (var x = num; x > 0; x--)
  {
    message += "ha";
  }
  message += "!";
  return message;
});
