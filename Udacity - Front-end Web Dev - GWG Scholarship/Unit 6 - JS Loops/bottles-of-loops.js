/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var bottleBefore = " bottles ";
var bottleAfter = " bottles ";

while (num > 0) {
    if (num == 2)
    {
      bottleAfter = " bottle ";
    }
    if (num == 1)
    {
      bottleBefore = " bottle ";
      bottleAfter = " bottles ";
    }
    console.log(num + bottleBefore + "of juice on the wall! " + num + bottleBefore + "of juice! Take one down, pass it around... " + (num - 1) + bottleAfter + "of juice on the wall!");
    num--;
}
