/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(x) {
  var ha = "";
  for (x;x>0;x--)
  {
    ha += "ha";
  }
  return ha + "!";
}; /* finish the function expression */

console.log(laugh(10));
