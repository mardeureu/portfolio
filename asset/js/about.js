$(document).ready(function(){
    //accodion
    $('.hardskills h6').click(function(){
        $('.hardskills p').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });
    $('.softskills h6').click(function(){
        $('.softskills p').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

});

