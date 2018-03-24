/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var countdown = 60;
var message = "";

while( countdown >= 0 )
{
  switch ( countdown )
  {
    case 50:
      message = "Orbiter transfers from ground to internal power";
      break;
    case 31:
      message = "Ground launch sequencer is go for auto sequence start";
      break;
    case 16:
      message = "Activate launch pad sound suppression system";
      break;
    case 10:
      message = "Activate main engine hydrogen burnoff system";
      break;
    case 6:
      message = "Main engine start";
      break;
    case 0:
      message = "Solid rocket booster ignition and liftoff!";
      break;
    default:
      message = "T-" + countdown + " seconds";
      break;
  }
  console.log(message);
  countdown--;
}
