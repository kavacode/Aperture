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
});

// ====== БУРГЕР ======

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}
