$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        // animateOut: 'slideOutUp',
        // animateIn: 'slideInUp',
        navText: [ '', ' ' ],
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            674:{
                items:3
            },
            1100:{
                items:5
            }
        }
    });
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );
});

// ====== БУРГЕР ======

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}
