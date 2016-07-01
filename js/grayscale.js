/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        if ($(window).width() >= 767){
            $(".navbar-fixed-top").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function(event) {
                    $("#right-menu").addClass("navanim")
                });
        }
        else
        {
            $("#bars").addClass("makeBlack")
        }
        $(".icon").addClass("iconBlack");

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function(event) {
                $("#right-menu").removeClass("navanim");
            });
        $(".icon").removeClass("iconBlack");

    }
}
 /*MAKE DELAY WITH JAVASCRIPT*/

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

function showDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function hideDrop() {
    if(document.getElementById("myDropdown").classList.contains("show"))
    {
        document.getElementById("myDropdown").classList.remove("show")
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.special')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

//Close the dropdown menu if user hovers away from menu
/*$('#myDropdown').mouseleave(function() {
    if(document.getElementById("myDropdown").classList.contains("show"))
    {
        document.getElementById("myDropdown").classList.remove("show")
    }
});*/

$('#myButton').mouseleave(function() {
    if(document.getElementById("myDropdown").classList.contains("show"))
    {
        document.getElementById("myDropdown").classList.remove("show")
    }
});

/*PREVENTING scrolling on iOS*/
var fixed = document.getElementById('page-top');

fixed.addEventListener('touchmove', function(e) {

    e.preventDefault();

}, false);