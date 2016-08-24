$(document).ready(function(){
var numbers;
var fizz;
var buzz;
var fizzbuzz;
var array = new Array();

$(".Run").on("click", function(e){


var i;
for (var i = 1; i < 101; i++){
if ( i%3 === 0 && i%5 === 0 ){
	
array.push("fizzbuzz ");   // pushes to end of array
} 
else if ( i%3 === 0){
	
array.push("fizz ");   // pushes to end of array
}
else if (i%5 === 0){
	
array.push("buzz ");   // pushes to end of array
}
else {

array.push(i + " ");   // pushes to end of array
}
}
var el = $.map(array, function(val, i) {
      return "<span>" + val + "</span>";
    });
$(".answer").html(el.join(""));
})

$(".run").on("click", function(e){
	var i;
	for (var i =1; i < 101; i++){
		if (i%3 ===0 && i%5 === 0){
			$(".answer2").append("fizzbuzz ");
		}
		else if ( i%3 ===0){
			$(".answer2").append("fizz ");
		}
		else if (i%5 === 0){
			$(".answer2").append("buzz ");
		}
		else {
			$(".answer2").append(i+ " ");
		}
	}
})
});