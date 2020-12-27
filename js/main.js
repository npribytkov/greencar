$('#slider').slick({
    dots: true,
    arrows: false
});

$(document).on("click", ".mobile_menu_container .parent", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).siblings("ul").addClass("loaded").addClass("activity");
});
$(document).on("click", ".mobile_menu_container .back", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).parent().parent().removeClass("loaded");
    $(this).parent().parent().parent().parent().addClass("activity");
});
$(document).on("click", ".mobile_menu", function(e) {
    e.preventDefault();
    $(".mobile_menu_container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
});
$(document).on("click", ".mobile_menu_overlay", function(e) {
    $(".mobile_menu_container").removeClass("loaded");
    $(this).fadeOut(function() {
        $(".mobile_menu_container .loaded").removeClass("loaded");
        $(".mobile_menu_container .activity").removeClass("activity");
    });
});

/*car detail*/
$(document).ready(function () {
    var height = 0,
        maxHeightBlock = 250;

    $('.detail-card .tabs .tab').each(function (){
        height = $(this).height();
        if (height > maxHeightBlock){
            $(this).addClass('big');
            $(this).append('<div class="more-block"><a href="#" class="show-more"> > </a></div>')
        }
    });

    loadSliderCarDetail();
})
/*Change tabs*/
$(document).on('click', '.detail-card .head a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    if (id) {
        $('.detail-card .tabs li').removeClass('active');
        $('.detail-card .tabs .tab').removeClass('active');
        $(this).parent().addClass('active');
        $(id).addClass('active');
    }
});
/*Button show more*/
$(document).on('click', '.show-more', function (e) {
    e.preventDefault();
    $(this).parents('.tab').removeClass('big');
    $(this).parent().remove();
});

function  loadSliderCarDetail(){
    var width = $(document).width(),
        trumbWidth = 260,
        trumbHeight = 170;

    if (width < 1300){
        trumbWidth = 130;
        trumbHeight = 85;
    }

    $('.detail-card .slider-detail').fotorama({
        width: '100%',
        nav: 'thumbs',
        loop: true,
        thumbwidth: trumbWidth,
        thumbheight : trumbHeight,
    });
}