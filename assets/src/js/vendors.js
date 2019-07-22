import "../scss/vendors.scss"

// ----- jQuery -----

import $ from 'jquery'
window.jQuery = $
window.$ = $

// Navbar efects
$(document).scroll(function () {
  const $nav = $(".navbar")

  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
})

// ----- WOW.js -----

import WOW from 'wowjs'
var wow = new WOW.WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,      // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
)

wow.init()


// ----- Bootstrup -----

import 'bootstrap'

// ----- Vendors -----

import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/brands"


