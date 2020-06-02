window.addEventListener('DomContentLoaded', function(){
    window.onscroll = function() {progressScroll()};
    function progressScroll() {
        var winScroll = docuemnt.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        var bar = document.querySelector('bar');
        bar.style.width = scrolled + "%";
    }

});