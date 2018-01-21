function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}



$('#prev').click(function() {
  moveToSelected('prev');
  $(".selected .inactive").hide();
  $(".selected .active").css({"visibility": "visible", "display": ""});
  $(".prev .inactive").css({"visibility": "visible", "display": ""});
  $(".prev .active").hide();


  $(".next .active").hide();
  $(".next .inactive").css({"visibility": "visible", "display": ""});
});

$('#next').click(function() {
  moveToSelected('next');
  $(".selected .inactive").hide();
  $(".selected .active").css({"visibility": "visible", "display": ""});
  $(".next .inactive").css({"visibility": "visible", "display": ""});
  $(".next .active").hide();

  $(".prev .active").hide();
  $(".prev .inactive").css({"visibility": "visible", "display": ""});

});

$(document).ready(function() {

});

$(".selected .inactive").hide();
$(".selected .active").css({"display": "", "visibility": "visible"});


/*
// yeah let's do vanilla JS just for fun :P

var toggle = document.querySelector('.toggle');
var slider = document.querySelector('.slider');

toggle.addEventListener('click', toggleSlider, false);

function toggleSlider(){
if (slider.classList.contains('opened')) {
slider.classList.remove('opened');
slider.classList.add('closed');
} else {
slider.classList.remove('closed');
slider.classList.add('opened');
}
}
*/

$(document).ready(function(){
  $('.toggle').click(function() {

    if($('.slider').hasClass('opened')) {
      $('.slider').removeClass('opened');
      $('.slider').addClass('closed');
    } else {
      $('.slider').removeClass('closed');
      $('.slider').addClass('opened');
    }
  });
});
