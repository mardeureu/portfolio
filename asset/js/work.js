
window.addEventListener('DOMContentLoaded',function(){
    function move() {
        var i = 0;
        if (i == 0) {
            i = 1;
            var elemt = document.querySelector('.progressbar');
            var width = 1;
            var id =  setInterval(frame, 10);
            function frame() {
               if (width >= 100) {
                clearInterval(id);
                i = 0;
               } else {
                   width++;
                   elemt;
                   elemt.style.width = width + "%";
               }
           }
        }
    }

    $('.m_click').stop().fadeOut();
    var mX, mY;
    var bln = true;
    $('.work').on({
        mouseenter:function(e){
            $('.m_click').stop().fadeIn();
        },
        mousemove:function(e){
            mX = e.pageX;
            mY = e.pageY;   
            $('.m_click').css({
                left: mX,
                top: mY,
            });
        },

    });
    $(':not(.work)').on('mouseenter',function(){
        $('.m_click').stop().fadeOut();
        console.log('a');
    });
});
