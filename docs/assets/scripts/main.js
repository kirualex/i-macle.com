(function() {

    // Analytics

    ackeeTracker.create('https://ackee-qsnz.onrender.com').record('5512170c-57cd-4cc4-bb59-b704ac436c89')
    ackeeTracker.action('2f6c2595-a8df-4383-a3ba-799b53fb7dd1', { key: 'Click', value: 1 })
    ackeeTracker.action('c9d11d68-06a1-490b-b08b-cfb7cb0978c0', { key: 'Click', value: 1 })
    ackeeTracker.action('f5cba383-de08-4811-b55e-e790e8a38dc3', { key: 'Click', value: 1 })
    ackeeTracker.action('dfea01c5-a6b5-44c7-abaa-c3579e144598', { key: 'Click', value: 1 })

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

    $(".course .abstract").click(function() {
        $(this).toggleClass("show");
        $(this).children(".more-icon").toggleClass("open");
        var moreDiv  = $(this).next();
        moreDiv.toggleClass("show");
    });


})();


function toggleMore() {
    console.log("test")
    $("#mission .more").toggleClass("show");
    $("#mission .dots").hide();
    $("#mission a.toggle-more").hide();
    $("#mission a.toggle-less").show();
}

function toggleLess() {
    $("#mission .more").toggleClass("show");
    $("#mission .dots").show();
    $("#mission a.toggle-more").show();
    $("#mission a.toggle-less").hide();
}

