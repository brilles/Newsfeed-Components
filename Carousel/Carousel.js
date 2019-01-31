//IIFE function slider that
(function slider() {
  // using Jquery CSS class selector and binding that to slides
  let slides = $(".item");
  console.log(slides);
  let activeSlide = 0;

  TweenLite.set(slides.filter(":gt(0)"), { left: "-100%" });
  TweenLite.delayedCall(2, nextSlide);

  function nextSlide() {
    TweenLite.to(slides.eq(activeSlide), 1, { left: "-100%" });

    activeSlide < slides.length - 1 ? activeSlide++ : (activeSlide = 0);

    TweenLite.fromTo(
      slides.eq(activeSlide),
      1,
      { left: "100%" },
      { left: "0" }
    );
    TweenLite.delayedCall(2, nextSlide);
  }
})();
