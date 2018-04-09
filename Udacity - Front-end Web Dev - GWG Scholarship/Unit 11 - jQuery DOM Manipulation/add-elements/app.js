/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var family1, family2, bruce;

family1 = $("#family1");

family1.parent().append('<div id="family2">Family2</div>');
family2 = $("#family2");

family2.append('<div id="bruce">Bruce</div>');
bruce = $("#bruce");

bruce.append('<div id="madison">Madison</div>');
bruce.append('<div id="hunter">Hunter</div>');
