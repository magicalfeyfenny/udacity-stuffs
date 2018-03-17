/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var result = "";

while (x <= 20) {
    result = x % 3 ? (x % 5 ? x : "James" ) : (x % 5 ? "Julia" : "JuliaJames" );
    console.log(result);
    x++;
}
