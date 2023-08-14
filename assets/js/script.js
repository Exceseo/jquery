$(function(){
    $(".slickme").slick({
        autoplay: "true",
        autoplaySpeed: "4000",
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',

    });
  

        var $grid = $('.grid').isotope();

        $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });



            $('.chart').easyPieChart({
                size: 150,
                lineWidth: 9,
                barColor:'#33d9b2',
                trackColor:'#2c2c54',
                scaleColor:'transparent',
                easing: 'easeOutBounce',
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                animate: {
                    duration: 4000,
                    enabled: true
                  },
                easing: function (x, t, b, c, d) { // easing function
                    t = t / (d/2);
                    if (t < 1) {
                      return c / 2 * t * t + b;
                    }
                    return -c/2 * ((--t)*(t-2) - 1) + b;
                },
            });

        
});
