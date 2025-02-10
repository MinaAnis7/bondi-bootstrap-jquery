$(function () {
    $(".nav-link").on("click", function () {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    $(".projects .filters li").on("click", function () {
        let category = $(this).text().toLowerCase();

        $(this).addClass("active").siblings().removeClass("active");

        if (category == "all") {
            $(".projects .row div").fadeIn();
        }
        else {
            $(".projects .row div").hide().filter("." + category).fadeIn();
        }
    });
});