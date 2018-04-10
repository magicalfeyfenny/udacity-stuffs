//select color input
let colorSelect = $('#colorPicker').val();

// When size is submitted by the user, call makeGrid()
$('#submission').on('click',function(event) {
    event.preventDefault();

    //select size input
    let canvasHeight = $('#inputHeight').val();
    let canvasWidth = $('#inputWeight').val();

    //erase original table from DOM
    $('#pixelCanvas').empty();

    //recreate a blank canvas of specified size
    makeGrid(canvasWidth, canvasHeight);
});

//When the canvas is clicked, or moused over and the left button is held, change cell colors
$('#pixelCanvas').on('mousedown mouseover','td',function(event) {
    colorSelect = $('#colorPicker').val();
    if (event.buttons == 1) {
        $(this).css('background-color',colorSelect);
    }
});

/**
* @description: creates a blank table with the specified width and height
*/
function makeGrid(width, height) {
// Your code goes here!
    //create table of size in DOM with cells each having color=#fff
    for(let y = 1; y <= height; y++) {
        $('#pixelCanvas').append($('<tr></tr>'));
        for(let x = 1; x <= width; x++) {
            $('tr').last().append($('<td></td>'));
            $('td').last().css('background-color','#fff');
        }
    }
    return;
}
