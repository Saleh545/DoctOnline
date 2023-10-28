$('.home-slider').owlCarousel({
    loop:true,
    margin:32,
    
   smartSpeed:1500,
   autoWidth:false,
   dots:false,
   nav:true,
   navText:["<img src='left.svg'>","<img src='left.svg'>"],
   
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})