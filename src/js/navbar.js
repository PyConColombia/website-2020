$(document).ready(function () {
  const height = $(window).height();

  $('.scrollable-menu').css('max-height', height);

  // Style menu responsive
  $('.navbar-toggler').on('click', function () {
    var openMenu = ($(".show")[0]) ? false : true;

    $('.navbar').css('background-color', (openMenu) ? '#fff' : '');
  });
});