
// Check off specific Todos by checking

/** selector */

// $('li').click(function(){
//     $(this).css('color', 'gray');
//     $(this).css('text-decoration', 'line-through');
// });



// $('li').click(function(){
//     //if li is gray; 
//     if($(this).css('color') === 'rgb(128, 128, 128)'){
//         //return it black
//         $(this).css({
//             color: 'black',
//             textDecoration: 'none'
//         });
//     } 
//     else{  //else    
//         //return it gray
//         $(this).css({
//             color: 'gray',
//             textDecoration: 'line-through'
//         });
//     }
// });

/**toggle() function */

// $('li').click(function(){
//     $(this).toggleClass('completed');
// });


// Check off specific Todos by checking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});



//Click on x to delete todo
// $('span').click(function(event){
//     $(this).parent().remove();
//     event.stopPropagation();
// });

$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// $("input[type='text']").keypress( (event)=> {
//     if(event.which === 13){
//         console.log('You hit enter!');
//     }
// });

 

$("input[type='text']").keypress( function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val('');
        //create a new li and add to ul
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
    }
});
 
$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
});






