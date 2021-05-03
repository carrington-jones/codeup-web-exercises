// $(document).ready(function(){
//     alert( 'The page has finished loading!' );
// })

// $('#HeadingOne').attr('id','paragraphOne'); This changes elements id using jQuery

// $(".paragraph1, .Heading1, .div1").attr("class", "codeup"); This changes class to "codeup"
// $(".codeup").css("border", "1px solid red"); This gives a border to every element with the class of "codeup"

// $("li").css("font-size", "20px");
// $("h1, p, li").css("color", "blue");
// $("li").css("border", "1px solid red");
//
// var headingAlert = $("#HeadingOne").html();
// alert(headingAlert);

$("#HeadingOne").click(function(){
    $(this).css('background-color', 'red');
});

$("#paragraphOne").dblclick(function(e){
    $(this).css('font-size', '18px');
});

$("#unorderedListOne").hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);