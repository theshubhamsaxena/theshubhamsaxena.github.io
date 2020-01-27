

console.log('%c ', 'font-size:900px; background:url(https://3.bp.blogspot.com/-ttLNivEtn9A/WsY6hbAg_tI/AAAAAAAAAUg/EGFp-vbx7pYfj4x968XnGYJptggNHMntgCLcBGAs/s640/identify_phishing.png) no-repeat;');


let menuBtn = $("#menuBar");

menuBtn.click(function() {

  $('.hamburger-menu').toggleClass('animate');

  if ($(".secondaryMenu").hasClass("active")) {

    $(".secondaryMenu").removeClass("active");
    setTimeout(function() {
      $(".primaryMenu").addClass("active");
    }, 400);


  } else {
    $(".primaryMenu").removeClass("active");

    setTimeout(function() {
      $(".secondaryMenu").addClass("active");
    }, 350);
  }
});

function scrollTo(target) {
  const top = $(target).offset().top;
  const duration = 500;
  const changeHash = function() {
    location.hash = target
  };
  $("html, body").animate({ scrollTop: top }, duration, changeHash);
}

$(document).ready(function() {
  var elements = $(".sidebar > .main-info *");

  /*console.log(elements);*/

  for (let i = 0; i < elements.length; i++) {
    setTimeout(function() {
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 90 * i);
  }

  setTimeout(function() {
    $(".main-content").addClass("active");
  }, 1900);

  $("#sidebar a.btn[href='#contact']").on("click", function (event) {
    event.preventDefault();

    scrollTo($.attr(this, "href"));
  });

  var typed = new Typed('.highlight', {
  strings: ["Shubham Saxena.", "a Developer.", " a techie.", "an Indian."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    backSpeed: 30,
    // time before backspacing
    backDelay: 1200,
    // loop
    loop: true,
    // false = infinite
    loopCount: 500,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
    });
});