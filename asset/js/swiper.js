window.addEventListener('DOMContentLoaded',function(){
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: '50%',
        mousewheel: true,
        loop: true,
        slidesOffsetAfter: 0,
        watchSlidesProgress: true,
        autoplay: {
            delay: 5000,
            waitForTransition: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        
    });

    
    swiper.on('slideChangeTransitionEnd', function (e) {
        loader();        
    });

    function loader(){
        var loadNum=0,load;
        load = setInterval(function(){
           
            $('.loadbar').css({
                width:loadNum+'%'
            });
            if(loadNum != 100){ loadNum++ }else{ clearInterval(load); loadNum=0};
        },40)
    }loader();
    
//load END
});
