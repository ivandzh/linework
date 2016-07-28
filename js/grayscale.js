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
/*
var fixed = document.getElementById('page-top');

fixed.addEventListener('touchmove', function(e) {

    e.preventDefault();

}, false);*/

/*
$(document).ready(function() {
    collapseNavbar();

    $('#masonry').masonry({
        columnWidth: 160,
        itemSelector: '.item'
    });*/
/*.imagesLoaded(function() {
        $('.grid').masonry('reload');
    });*//*

});*/

function checkCurrent () {
    /*
     on click of list item with class active for dots, check if slide with class active hass class "active slide"
     */


}

function switchSlide (slider) {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('a[data-toggle="tab"]').removeClass('active-slide');
        $('a[data-toggle="tab"]').addClass('non-active-slide');
        $(this).removeClass('non-active-slide');
        $(this).addClass('active-slide');
    });

        var currentSlider = slider; 
        console.log("Current slider to show is " + currentSlider);

        switch(currentSlider) {
            case 'slider1':
                $("#slider1").show();
                $("#slider1").slick("slickPlay");
                
                $("#slider2").slick("slickPause");
                $("#slider2").hide();
                $("#slider3").slick("slickPause");
                $("#slider3").hide();
                $("#slider4").slick("slickPause");
                $("#slider4").hide();
                $("#slider5").slick("slickPause");
                $("#slider5").hide();
                break;
            case 'slider2': 
                $("#slider2").show();
                $("#slider2").slick("slickPlay");
                
                $("#slider1").slick("slickPause");
                $("#slider1").hide();
                $("#slider3").slick("slickPause");
                $("#slider3").hide();
                $("#slider4").slick("slickPause");
                $("#slider4").hide();
                $("#slider5").slick("slickPause");
                $("#slider5").hide();
                break;
            case 'slider3': 
                $("#slider3").show();
                $("#slider3").slick("slickPlay");
                
                $("#slider1").slick("slickPause");
                $("#slider1").hide();
                $("#slider2").slick("slickPause");
                $("#slider2").hide();
                $("#slider4").slick("slickPause");
                $("#slider4").hide();
                $("#slider5").slick("slickPause");
                $("#slider5").hide();
                break;
            case 'slider4': 
                $("#slider4").show();
                $("#slider4").slick("slickPlay");
                
                $("#slider1").slick("slickPause");
                $("#slider1").hide();
                $("#slider2").slick("slickPause");
                $("#slider2").hide();
                $("#slider3").slick("slickPause");
                $("#slider3").hide();
                $("#slider5").slick("slickPause");
                $("#slider5").hide();
                break;
            case 'slider5': 
                $("#slider5").show();
                $("#slider5").slick("slickPlay");
                
                $("#slider1").slick("slickPause");
                $("#slider1").hide();
                $("#slider2").slick("slickPause");
                $("#slider2").hide();
                $("#slider3").slick("slickPause");
                $("#slider3").hide();
                $("#slider4").slick("slickPause");
                $("#slider4").hide();
                break;
            default:
                break;
        }
    }


$(document).ready(function(){
    collapseNavbar();

    $('#work-content-top').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '50px',
        variableWidth: true,
        focusOnSelect: true
    });
    $('.innerProject').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'
    });
    $('#slider1, #slider2, #slider3, #slider4, #slider5').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });

    $("#slider1").slick("slickPlay");
});



