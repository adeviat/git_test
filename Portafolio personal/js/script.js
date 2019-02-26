$(window).on("load", function(){

    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500, 
            easing: 'linear',
            queue: false
        }

    });
})



$(document).ready(function() {

    $('.fixed-action-btn').floatingActionButton();

    var v =  document.getElementsByTagName("video")[0];
    v.play();

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });


    var typed = new Typed(".typed", {
        strings: ["Desarrollador Front End.", "Creador de Contenido Estratégico.", "Productor Multimedia."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

      var skillsTopOffset = $(".skillsSection").offset().top;
      var statsTopOffset = $(".statsSection").offset().top;


      $(window).scroll(function(){

          if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easyInOut',
                barColor: '#273c75',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
    
            });

          }


      });

      $("[data-fancybox]").fancybox();

      $("#filters a").click(function(){
          $("#filters .current").removeClass("current");
          $(this).addClass("current");

          var selector= $(this).attr("data-filter");

            $(".items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 1500, 
                    easing: 'linear',
                    queue: false
                }
    
            });

            return false;
      });


});