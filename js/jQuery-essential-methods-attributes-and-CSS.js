$("dd").addClass('invisible');

$("#answerReveal").click(function () {
    $("dd").toggleClass('invisible');
});

$("dt").click(function () {
    $(this).toggleClass("highlight");
})

$("#yellowButton").click(function () {
    $("ul").each(function () {
        $(this).children().last().css("background-color", "yellow");
    })
});

$("h3").click(function () {
    // $("h3").each(function(){
    $(this).next().first().css("font-weight", "bold");
    // });
});

$("li").click(function () {
    $(this).parent().children().first().css("color", "blue")

});

//BONUS
//1st Button
$("#leftButton").click(function () {
    var nextImage = $(this).parent().next().children().first();
    var nextImageSrc = nextImage.attr('src');
    var thisSrc = $(this).prev().attr('src');
    $(this).prev().attr('src', nextImageSrc);
    nextImage.attr('src', thisSrc);
});
//2nd Button

//3rd Button
$("#rightButton").click(function () {
    var previousImage = $(this).parent().prev().children().first();
    var previousImageSrc = previousImage.attr('src');
    var thisImage = $(this).prev();
    var thisSrc = thisImage.attr('src');
    previousImage.attr('src', thisSrc);
    thisImage.attr('src', previousImageSrc)
});