// external js: masonry.pkgd.js

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
  columnWidth: 80
});

$('.grid').click(function() {
  alert("hullo");
});
