$(document).ready(function() {
    var numbers;
    var fizz;
    var buzz;
    var fizzbuzz;
    var array = new Array();

    $(".Run").on("click", function(e) {


        var i;
        for (var i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {

                array.push("fizzbuzz "); // pushes to end of array
            } else if (i % 3 === 0) {

                array.push("fizz "); // pushes to end of array
            } else if (i % 5 === 0) {

                array.push("buzz "); // pushes to end of array
            } else {

                array.push(i + " "); // pushes to end of array
            }
        }
        var el = $.map(array, function(val, i) {
            return "<span>" + val + "</span>";
        });
        $(".answer").html(el.join(""));
    })

    $(".run").on("click", function(e) {
        var i;
        for (var i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                $(".answer2").append("fizzbuzz ");
            } else if (i % 3 === 0) {
                $(".answer2").append("fizz ");
            } else if (i % 5 === 0) {
                $(".answer2").append("buzz ");
            } else {
                $(".answer2").append(i + " ");
            }
        }
    })

    $(".clicked").on("click", function(e) {
        // prevent submitting to server.
        e.preventDefault();

        // parses string to int, passes to userInput. Makes sure users entry is  a number.
        var userInput = parseInt($("#userInputText").val(), 10); // Maybe take out the .val() because its not need with parser.

        // Clears out textbox
        $('#userInputText').html('');

        //call function- pass in user input.
        named(userInput);

    })


    function named(int) {

        // start at 1. if i is less than or equal to int, loop through.
        for (var i = 1; i <= int; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                $('.some').append("fizzbuzz ");
            } else if (i % 3 === 0) {
                $(".some").append("fizz ");
            } else if (i % 5 === 0) {
                $(".some").append("buzz ");
            } else {
                $(".some").append(i + " ");
            }
        }
    }
});
