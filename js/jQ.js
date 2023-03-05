$(document).ready(function(){
    $(".content .film .item").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable:false,
        speed:600,
    });
    $("#showTrends").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 12000,
        arrows:false,
        draggable:false,
        speed:1000,
    });
});
