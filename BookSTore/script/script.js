
   
$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
})

$("#filters a").click(function() {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector= $(this).attr("data-filter");


    $(".items").isotope({
        filter: selector,
    });
    
    return false;
});