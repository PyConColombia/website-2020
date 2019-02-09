// Scroll goes to top to activate all wow animations
$(window).on("ready", function(){
  $(this).scrollTop(0);
});

// Div is shown when document is ready to avoid a lag with the animation
$(window).on("ready", function() {
  $("body").removeClass("visibility-hidden");
});