
// Referencing "Input" witht the right form box
$(document).ready(function() {
  // Get the input elements and result element
  var num1Input = $('#num1');
  var num2Input = $('#num2');
  var resultInput = $('#result');
  
// ADDITION
  /* the value retrieve with "val" is a string. I need to convert the string into a number 
  ("parsefloat") before I can perform mathematic operations */
  $("#add").click(function() {
    var num1 = parseFloat(num1Input.val());
    var num2 = parseFloat(num2Input.val());
    var result = num1 + num2;
    // val() - Sets or returns the value of form fields
    resultInput.val(result);
  });

// SUBSTRACTION
  $("#sub").click(function() {
    var num1 = parseFloat(num1Input.val());
    var num2 = parseFloat(num2Input.val());
    var result = num1 - num2;
    resultInput.val(result);
  });

// MULTIPLICATION
  $("#mul").click(function() {
    var num1 = parseFloat(num1Input.val());
    var num2 = parseFloat(num2Input.val());
    var result = num1 * num2;
    resultInput.val(result);
  });

// DIVISION
$("#div").click(function() {
    var num1 = parseFloat(num1Input.val());
    var num2 = parseFloat(num2Input.val());
    if (num2 === 0) {
        alert("Error. You cannot divide a number by 0.");
    } else {
        var result = num1 / num2;
        resultInput.val(result);
    }
});

// MODULUS
  $("#mod").click(function() {
    var num1 = parseFloat(num1Input.val());
    var num2 = parseFloat(num2Input.val());
    var result = num1 % num2;
    resultInput.val(result);
  });

// RESET
  $("#clear").click(function(){
    num1Input.val("0");
    num2Input.val("0");
    resultInput.val("0");
  });


});




