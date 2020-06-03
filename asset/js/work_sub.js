window.addEventListener('DOMContentLoaded', function(){
    // window.onscroll = function() {progressScroll()};
    // function progressScroll() {
    //     var winScroll = docuemnt.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     var bar = document.querySelector('bar');
    //     bar.style.width = scrolled + "%";
    // }

    //ajax
    function detail(){
        var listTag='';
        $.ajax({
            url : '../../ajax/worksub.json',
            type:'get',
            success:function(data){
                var dIdx = location.hash.slice(1);

                function pageContents(){
                   
                    var getData='', selector=data.worksub[dIdx];

                    title = selector.title;
                    project =  selector.project;
                    sitemap =  dataLoop(selector.sitemap,0,1);
                    breakpoints = dataLoop(selector.breakpoints,0,1);
                    pofolmain = "<img src='"+selector.gallery[0]+"' alt='"+selector.galleryalt[0]+"'>";
                    problems = dataLoop(selector.problemsdt,selector.problemsdd,2);
                    suggestion = dataLoop(selector.suggestiondt,selector.suggestiondd,2);
                    development =  selector.development;
                    link = selector.link;

                    gallery = function(){
                        getData="";
                        for(var i=1;i<selector.gallery.length;i++){
                            getData += "<img src='"+selector.gallery[i]+"' alt='"+selector.galleryalt[i]+"'>";
                        }
                        return getData;
                    };

                    $('h3').html(title);
                    $('.project').html(project);
                    $('.sitemap').html(sitemap);
                    $('.breakpoints').html(breakpoints);
                    $('.pofolmain').html(pofolmain);
                    $('.problems dl').html(problems);
                    $('.suggestion dl').html(suggestion);
                    $('.gallery').html(gallery);
                    $('.development').html(development);
                    $('.portfoliolink').attr('href',link);

                    $(window).scrollTop(0);
                }pageContents();

                function dataLoop(k,m,n){
                    getData='';
                    if (n == 1) {
                        for (var i=0; i<k.length; i++) {
                            getData += "<li>"+k[i]+"</li>";
                        }
                    } else {
                        for (var i=0; i<k.length; i++) {
                            getData += "<dt>"+k[i]+"</dt><dd>"+m[i]+"</dd>";
                        }
                    }
                    return getData;
                }
                //event
                $('.sub_btn a').on('click',function(e){
                    e.preventDefault();
                    if($(this).index()){
                        dIdx != data.worksub.length-1 ? dIdx++:'';
                    }else{
                        dIdx != 0 ? dIdx--:'';
                    }
                    pageContents();
                })
            }
        });
    }detail();

});