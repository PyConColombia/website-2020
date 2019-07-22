import "../scss/main.scss"

// Navbar efects
$(document).scroll(function () {
    const $nav = $(".navbar");

    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
