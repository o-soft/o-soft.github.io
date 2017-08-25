
$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-header").toggleClass("toggled");
        $("#main-container").toggleClass("toggled");
        $("#footer-social").toggleClass("toggled");
    });

    $(".expand").click(function () {
        $(this).text("More...");
        $(this).toggleClass("shrink");
    });

    $(document).on("click", ".shrink", function () {
        $(this).text("Less...");
    });

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.sidebar-navigation ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.sidebar-navigation ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
});