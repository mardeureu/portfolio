$ajax {
    url: "data.json",
    dataType: "json",
    type: "GET",
    .done(function(msg) {
        alert("완료"+msg)
    }),
    success: function(data){
        var project = document.craetElement('p');
        var sitemap = document.craetElement('ul li');
        var breakpoint= document.creatElemnt('ul li');
    },
}