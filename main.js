(function() {
    // UI

    var quotes = $(".slide");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000, showNextQuote);
    }
    showNextQuote();

    $(".abstract").click(function() {
        $(this).toggleClass("show");
    });

})();

ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false });


ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0 });


ScrollReveal().reveal(".scale-up", {
  duration: 2000,
  scale: 0.9 });