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
        $(".scrolltop:hidden").stop(true, true).fadeIn();
      } else {
        $(".scrolltop").stop(true, true).fadeOut();
      }
    });
    $(function () {
      $(".scroll").click(function () {
        $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
        return false;
      });
    });

// pricing page
// show the amount of the year and month 
function seePriceCard(id) {
  var elements = document.getElementsByClassName("pricing-all-box");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//  contract page
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

//count home
    var counters = document.querySelectorAll(".count");
    var speed = 200;
    counters.forEach((counter) => {
      var updateCount = () => {
        var target = parseInt(+counter.getAttribute("data-target"));
        var count = parseInt(+counter.innerText);
        var increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
      };
      updateCount();
    });

// Advance blog 
function showBlog(id) {
      var elements = document.getElementsByClassName("advanceBlog");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
      document.getElementById(id).style.display = "block";
    }

// portfolio page
function showPanel(id) {
        var elements = document.getElementsByClassName("content");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.display = "none";
        }
        document.getElementById(id).style.display = "block";
      }

// single job page
function showJob(id) {
      var elements = document.getElementsByClassName("singleJob");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
      document.getElementById(id).style.display = "block";
    }
// pricing page
// show the amount of the year and month 
function seePriceCard(id) {
  var elements = document.getElementsByClassName("pricing-all-box");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// AOS animation function 
AOS.init();