// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).on("turbolinks:load", function () {

console.log("hello")

$('.carousel').carousel({
  interval: 2000
})


});