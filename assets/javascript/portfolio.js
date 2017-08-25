
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


});