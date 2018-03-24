/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;
var print = "";

// your code goes here
if (!checkBalance) {
  print = "Thank you. Have a nice day!";
}
else if (balance > 0 && isActive) {
  print = "Your balance is $" + balance.toFixed(2) + ".";
}
else if (!isActive) {
  print = "Your account is no longer active.";
}
else if (balance === 0) {
  print = "Your account is empty.";
}
else {
  print = "Your balance is negative. Please contact bank.";
}

console.log(print);
