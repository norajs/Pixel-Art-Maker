// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//makeGrid() function

$('#button').on('click', function makeGrid() {
    $("#pixelCanvas tr").remove(); 
    var N, M;
    N = $('#inputHeight').val();
    M = $('#inputWeight').val();
    for (var i = 0; i < N; i++) { 
        $('#pixelCanvas').append('<tr id= row' + i + '>');
        
        for (var j = 0; j < M; j++) {
            $('#row' + i).append( '<td id= col' + i + j + '></td>'); 
        }  
    }
    event.preventDefault();
});

//remove grid

$('#clear').on('click', function() {
    $("#pixelCanvas tr").remove(); 
    
});


//convert hex color into rgb

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}




//set value of color used

var actualColor = $("#colorPicker").val();


//watch out for changes of actualColor

$('#colorPicker').on("input", function(event) {
    actualColor = $("#colorPicker").val();
  
});

$('#colorPicker').on("change", function(event) {
    actualColor = $("#colorPicker").val();

});


//color in square

$('table').on('click', 'td', function() {
   console.log('backgrounColor' + $(this).css('backgroundColor'));
    if ($(this).css('backgroundColor') == hexToRGB(actualColor)) {
        $(this).css('backgroundColor', '#D5B8E1');  
    } 
    else {
        $(this).css('backgroundColor', actualColor);   
    }
});





    
    






