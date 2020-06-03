window.addEventListener('DOMContentLoaded',function(){
    function swiper(){
       
           
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
                waitForTransition: true,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            
        });
        swiper.on('slideChangeTransitionStart', function () {
            if(swiper.autoplay.running){
                loader();
            }else{
                $('.loadbar').css({
                    width:'0%'
                });
            }       
            
        });

        function loader(){
            var loadNum = 1,load;
           
            load = setInterval(function(){            
                $('.loadbar').css({
                    width:loadNum+'%'
                });
                if (loadNum != 100) { loadNum++ }
                else { clearInterval(load); loadNum = 1};
            },50)
        }
        loader();
    }

    function workList(){
        var listTag='';
        $.ajax({
            url : '../ajax/work.json',
            type:'get',
            success:function(data){
                for(var i=0;i<data.work.length;i++){
                    
                    listTag = "<div class='swiper-slide'>";
                    listTag += "<h5 data-swiper-parallax='-100'>"+data.work[i].title+"</h5>";
                    listTag += "<a href='sub/work_sub.html#"+i+"' data-swiper-parallax='-300' class='swiper-zoom-container'>";
                    listTag += "<img src='"+data.work[i].img+"' alt='정선희 포트폴리오 정식품 웹사이트 메인 이미지 클릭시 상세페이지로 이동됩니다.'>";
                    listTag += "</a>";
                    listTag += "</div>";
                    $('.swiper-wrapper').append(listTag);
                }
                setTimeout(function(){swiper();},100);
            }
        });
    }workList();


    if(localStorage.logo == 'on'){
        $('.home_logo').addClass('active');
    }

    $('.home_logo').on('click',function(e){
        e.preventDefault();
        if(localStorage.logo == 'on'){
            localStorage.logo = 'off';
        }else{
            localStorage.logo = 'on';
        }
        setTimeout(function(){ location.href = $('.home_logo').attr('href'),500});
        
    })
   
    
//load END
});
