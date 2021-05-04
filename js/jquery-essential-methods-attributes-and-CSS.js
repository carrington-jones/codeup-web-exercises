$("dd").addClass('invisible');

$("#answerReveal").click(function(){
$("dd").toggleClass('invisible');
});

$("dt").click(function(){
    $(this).toggleClass("highlight");
})