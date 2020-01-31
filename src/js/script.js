
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(function () {
  let elem = $('.navigation');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 120) {
          elem.addClass("small");
      } else {
          elem.removeClass("small");
      }
  });
});

export default myFunction;
