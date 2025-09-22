$(function() {
    "use strict";
    
    
    $(window).on("load", function() {
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
        
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
        $(".hero-bg").addClass("hero-bg-show");
    });
    
    $(".to-top-arrow").on("click", function() {
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
        return false
    })
    
    $('a[href*="#"]').not('[href="#"]').not('[href="#collapseOne"]').not('[href="#collapseTwo"]').not('[href="#collapseThree"]').not('[href="#collapseFour"]').not('[href="#collapseFive"]').not(
        '[href="#collapseSix"]').on("click", function() {
        console.log("click");
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
            if (target.length) {
                if ($(window).width() < 768) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 50
                    }, 1000);
                } else {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                }
                return false;
            }
        }
    });
    
    $(".navbar-collapse ul li a.nav-close").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    
    $(".dropdown-toggle").on("click", function(e) {
        if ($(document).width() > 768) {
            e.preventDefault();
            var url = $(this).attr('href');
            if (url !== '#') {
                window.location.href = url;
            }
        }
    });
    
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $(".border-top").addClass("top-position-primary");
            $(".navbar-bg-switch").addClass("navbar-bg-switch-color");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".main-navigation").addClass("main-navigation-home-call");
            $(".navbar-bg-switch").addClass("main-navigation-bg");
            $(".to-top-arrow").addClass("show");
            $(".blog-side-launcher").addClass("blog-side-launcher-color");
        } else {
            $(".border-top").removeClass("top-position-primary");
            $(".navbar-bg-switch").removeClass("navbar-bg-switch-color");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
            $(".to-top-arrow").removeClass("show");
            $(".blog-side-launcher").removeClass("blog-side-launcher-color");
        }
    });
    
    if (typeof $.fn.appear !== 'undefined' && typeof $.fn.countTo !== 'undefined') {
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
    } else {
    console.log("Appear.js or CountTo.js not loaded - facts counter disabled");
    }
    
    $(".google-maps").on("click", function() {
        $('.google-maps iframe').css("pointer-events", "auto");
    });
    $(".google-maps").on("mouseleave", function() {
        $('.google-maps iframe').css("pointer-events", "none");
    });
    
   if (typeof $.fn.owlCarousel !== 'undefined') {
    $(".owl-carousel-testimonials").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });
    
    $(".owl-carousel-rooms").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-rooms',
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 20
            },
            980: {
                items: 2,
                margin: 30
            },
            1240: {
                items: 3,
                margin: 40
            }
        }
    });
    
    $(".owl-carousel-facilities").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-facilities',
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 20
            },
            980: {
                items: 2,
                margin: 30
            },
            1240: {
                items: 3,
                margin: 40
            }
        }
    });
    
    $(".owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 2,
                margin: 20
            },
            768: {
                items: 2,
                margin: 30
            },
            880: {
                items: 2,
                margin: 30
            },
            1240: {
                items: 3,
                margin: 40
            }
        }
    });
    
    $("#owl-carousel-all").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-all',
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 20
            },
            980: {
                items: 2,
                margin: 30
            },
            1240: {
                items: 2,
                margin: 40
            }
        }
    });
    
    $(".owl-carousel-menu").owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-menu'
    });
    
} else {
    console.log("Owl Carousel not loaded - carousels will not function");
    $('.owl-carousel').css('overflow-x', 'auto').css('white-space', 'nowrap');
    $('.owl-carousel > div').css('display', 'inline-block');
}
    
    var swiper1 = new Swiper(".swiper-container-wrapper .swiper-container.swiper1", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: true,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: false
    });
    var swiper2 = new Swiper(".swiper-container-wrapper .swiper-container.swiper2", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: false,
        pagination: false,
        navigation: false
    });
    var swiper3 = new Swiper(".swiper-container-wrapper .swiper-container.swiper3", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: false,
        slidesPerView: 2,
        slidesPerColumn: 2
    });
    
    if (typeof $.fn.magnificPopup !== 'undefined') {
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: ".popup-photo-gallery-open",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
    
} else {
    console.log("Magnific Popup not loaded - image lightboxes disabled");
    $('.popup-photo').on('click', function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), '_blank');
    });
}
    
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    $("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");
    $("<div class='vertical-effect'></div>").duplicate(3).appendTo(".vertical-lines-wrapper");
    
    const buttons = document.querySelectorAll(".item-button");
    const menus = document.querySelectorAll(".menu");
    function handleClick(e) {
        e.preventDefault();
        const targetMenu = document.querySelector(`#${this.dataset.target}`);
        menus.forEach(menu => {
            menu.classList.remove("menu-visible");
            targetMenu.classList.add("menu-visible");
        });
    }
    buttons.forEach(button => button.addEventListener("click", handleClick));
    
    if (typeof $.fn.datepicker !== 'undefined') {
    $(".datepicker").datepicker({
        orientation: "auto"
    });
    } else {
    console.log("jQuery UI Datepicker not loaded - date inputs will be basic text fields");
}
    
    if (typeof $.fn.select2 !== 'undefined') {
    $(".select2").select2({
        minimumResultsForSearch: Infinity
    });
    } else {
    console.log("Select2 not loaded - dropdowns will be basic select elements");
}
    
    $(".blog-side-launcher").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".blog-side-launch, .blog-side-text").on("click", function() {
        $(".panel-from-left-blog, .panel-overlay-from-right-blog").removeClass("open");
    });
    
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function(e) {
        e.preventDefault();
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
        } else {
            $(".contact-modal").addClass("open");
        }
    });
    
    $("form#form-2").on("submit", function(e) {
    e.preventDefault();
    $("form#form-2 .error-r").remove();
    var hasErrors = false;
    
    $(".requiredField-r").each(function() {
        if ($(this).val().trim() === "") {
            $(this).parent().append('<span class="error-r">This field is required</span>');
            $(this).addClass("inputError");
            hasErrors = true;
        } else if ($(this).hasClass("email")) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailRegex.test($(this).val().trim())) {
                $(this).parent().append('<span class="error-r">Invalid email address</span>');
                $(this).addClass("inputError");
                hasErrors = true;
            }
        }
    });
    
    if (!hasErrors) {
        var formData = $(this).serialize();
        var submitBtn = $(this).find('input[type="submit"], button[type="submit"]');
        submitBtn.prop('disabled', true).val('Sending...');
        
        $.ajax({
            url: $(this).attr("action") || "reservation.php",
            type: "POST",
            data: formData,
            success: function(response) {
                $(this).slideUp("fast", function() {
                    $(this).before('<div class="success-r">Your reservation has been received. We will contact you soon!</div>');
                });
            }.bind(this),
            error: function(xhr, status, error) {
                submitBtn.prop('disabled', false).val('Book now');
                $(this).prepend('<div class="error-r" style="color: red; margin-bottom: 10px;">Error sending reservation. Please try again or contact us directly.</div>');
            }.bind(this)
        });
    }
    return false;
});
    
    $("form#form-3").on("submit", function() {
        $("form#form-3 .error-c").remove();
        var s = !1;
        if ($(".requiredField-c").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error-c">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error-c">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form-3 input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form-3").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    
    
});