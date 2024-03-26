$(document).ready(function() {
    var card1 = $("#ten");
    var card2 = $("#jack");
    var card3 = $("#queen");
    var card4 = $("#king");

    card1.css({ top: 50, left: 50 });
    card2.css({ top: 100, left: 100 });
    card3.css({ top: 150, left: 150 });
    card4.css({ top: 200, left: 200 });
    
    $("#ten").hover(function() {
        $(this).find("img").attr("src", "images/diamonds_ace.gif");
    }, function() {
        $(this).find("img").attr("src", "images/diamonds_10.gif");
    });
});