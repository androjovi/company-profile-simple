$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  duration: 200
});
$(document).ready(function() {
  $('.parallax').parallax();
  $('.slider').slider({
    height: 700
  });
});

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("nav");
window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    //header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideUp");

    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    //header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;
});
window.onscroll = function() {
  scrollFunction()
};
var btn = document.createElement("BUTTON");
btn.innerHTML = "To Top"; // Insert text
btn.setAttribute("id", "myBtn");
btn.setAttribute("onClick", "topFunction()");
document.body.appendChild(btn);

function scrollFunction() {
  // Create a <button> element
  var dislpy = "block"
  var displyno = "none"
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = dislpy;
  } else {
    document.getElementById("myBtn").style.display = displyno;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var arr = ["H ", "E ", "L ", "L ", "O"];
var newP = document.getElementById("greet");
//document.body.appendChild(newP);

function timedText() {
  var index = 0;

  function nextLetter() {
    newP.appendChild(document.createTextNode(arr[index]));
    index++;
    if (index < arr.length) {
      setTimeout(nextLetter, 500);
    }
  };
  nextLetter();
};

timedText();
