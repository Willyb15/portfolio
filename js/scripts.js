// Full Screens the Loader Page then Auto Scrolls to top of page
setTimeout(function() {
    $('#loader').hide();
    $(window).scrollTop(0);
}, 3000);

var intFrameHeight = window.innerHeight;
// This is Where the #home Text Fades In
setTimeout(function() {
    $('.willb').css("visibility", "visible").hide().fadeIn(6000);
}, 4000);
setTimeout(function() {
    $('.webdev').css("visibility", "visible").hide().fadeIn(6000);
}, 4500);
setTimeout(function() {
    $(".design").css("visibility", "visible").hide().fadeIn(6000);
}, 7000);
setTimeout(function() {
    $(".vertical-divider").css("visibility", "visible").hide().fadeIn(5000);
}, 7000);
setTimeout(function() {
    $(".code").css("visibility", "visible").hide().fadeIn(6000);
}, 8000);
setTimeout(function() {
    $(".build").css("visibility", "visible").hide().fadeIn(6000);
}, 9000);

// Fixes navbar when scrolled past headerHeight - headerHeight should === #home height 
var headerHeight = 800;
$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#myNav').removeClass('navbar-top');
    $('#myNav').addClass('navbar-fixed-top');
} else {
    $('#myNav').removeClass('navbar-fixed-top');
    $('#myNav').addClass('navbar-top');
}
});
