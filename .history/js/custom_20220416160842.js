// js code for navbar sticky
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}


// js code for footer starts from here
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// js code for footer ends from here

// preloader js code starts from here
setTimeout(function () {
    $('.loader-bg').fadeToggle();
}, 1500);

// scroll to top of the page
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".scrollToTop").offset().top }, "1000"); return false }) })


// client review start here--------------
 function seeComment(id) {
    var i, x;
    x = document.getElementsByClassName("comment");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
  }
  //  client review end ------------------

