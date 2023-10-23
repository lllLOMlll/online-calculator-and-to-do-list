
$(document).ready(function() {
    var itemInput = $('#toDoItem');

    // ADD
    $("#add").click(function() {
        var item = itemInput.val();
        if (item !== "") {
            $("#itemList").append("<li>" + item + "     " +  "<i class='fas fa-trash-alt'></i></li>");
            // Reset the value of the Add item box
            itemInput.val('');
        }
    });

    // DELETE
    // .on() function is a method provided by the jQuery library. It is used to attach an event handler to one or more selected elements.
    // #itemList select all the line
    // source : https://codepen.io/beeeees/pen/AJBjKR
    $("#itemList").on("click", ".fa-trash-alt", function(){
        // Hide the parent list item of the trash icon that was clicked
        $(this).parent().remove();
    });


  
    
});

