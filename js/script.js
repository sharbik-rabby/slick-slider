$(document).ready(function() {
  $(".wrapper").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 2
  });
  $(".wrapper2").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(".wrapper3").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
  });