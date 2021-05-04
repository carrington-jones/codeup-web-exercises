$("dd").addClass('invisible');

$("#answerReveal").click(function(){
$("dd").toggleClass('invisible');
});

$("dt").click(function(){
    $(this).toggleClass("highlight");
})

$("#yellowButton").click(function(){
    $("ul").each(function(){
        $(this).children().last().css("background-color", "yellow");
    })
});

$("h3").click(function() {
    // $("h3").each(function(){
        $("h3").next().children().css("font-weight", "bold");
    // });
});

$("li").click(function(){
    $("li").each(function(){
        $(this).parent().children().first().css("color", "blue")
    })
});