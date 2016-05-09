// Full Screens the Loader Page then Auto Scrolls to top of page
setTimeout(function() {
    $('#loader').hide();
    $(window).scrollTop(0);
}, 3000);
var intFrameHeight = window.innerHeight;

// This is Where the #home Text Fades In
setTimeout(function() {
    $('.willb').css("visibility", "visible").hide().fadeIn(6000);
}, 3500);
setTimeout(function() {
    $('.webdev').css("visibility", "visible").hide().fadeIn(6000);
}, 4000);
setTimeout(function() {
    $(".design").css("visibility", "visible").hide().fadeIn(6000);
}, 6000);
setTimeout(function() {
    $(".vertical-divider").css("visibility", "visible").hide().fadeIn(5000);
}, 5500);
setTimeout(function() {
    $(".code").css("visibility", "visible").hide().fadeIn(6000);
}, 7000);
setTimeout(function() {
    $(".build").css("visibility", "visible").hide().fadeIn(6000);
}, 8000);
setTimeout(function() {
    $(".icon").css("visibility", "visible").hide().fadeIn(6000);
}, 3500);

setTimeout(function() {
setInterval(function(){
$('.overlay').addClass('wow pulse animated');
}, 15000);
}, 1000);
setTimeout(function() {
setInterval(function(){
$('.overlay').removeClass('wow pulse animated');
}, 15300);
}, 1000);
setInterval(function(){
$('.logo-img').addClass('wow tada animated');
}, 8000);
setInterval(function(){
$('.logo-img').removeClass('wow tada animated');
}, 9000);

// setInterval(function(){
// $('.revolving-row').addClass('wow zoomOutDown animated');
// }, 13000);
// setInterval(function(){
// $('.revolving-row').removeClass('wow zoomOutDown animated');
// }, 14000);

// .addClass('wow zoomInUp animated');
// }, 13000);

// .removeClass('wow zoomOutDown animated').removeClass('wow zoomInUp animated');
// Fixes n
// Fixes navbar when scrolled past headerHeight - headerHeight should === #home height 
var initialHeight = (window.innerHeight);
$(window).bind('scroll', function() {
    console.log(initialHeight);
    if ($(window).scrollTop() > innerHeight) {
        $('#myNav').removeClass('navbar-top');
        $('#myNav').addClass('navbar-fixed-top');
        $('#myNav').fadeIn(2000).css('display', "visible");
    } else {
        $('#myNav').fadeOut(2000).hide(2000);
        // $('#myNav').removeClass('navbar-fixed-top');
        // $('#myNav').addClass('navbar-top');

    }
});


// Makes The Project section zoom in when scrolled past 2700
// $(window).bind('scroll', function() {
//         if ($(window).scrollTop() > innerHeight + 2000) {
//             $('.portfolio-item').addClass('wow zoomInDown animated');
//         }
//     });

// Makes The Project section zoom in when scrolled past 2700
// $(window).bind('scroll', function() {
//     if ($(window).scrollTop() > 3500-initialHeight) {
//         // $('#porfolio-item').addClass('');
//         $('.portfolio-item').css("visibility", "visible").addClass('wow zoomInDown animated');

//     } 
// });

//Displays Caption on Projects when Mouse hovers 
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);