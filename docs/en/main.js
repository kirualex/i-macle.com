!function(){function e(){++a,l.eq(a%l.length).fadeIn(1e3).delay(2e3).fadeOut(1e3,e)}var l=$(".slide"),a=-1;e(),$(".abstract").click(function(){$(this).toggleClass("show")})}(),ScrollReveal({reset:!0}),ScrollReveal().reveal(".show-once",{reset:!1}),ScrollReveal().reveal(".fade-in",{duration:2e3,move:0}),ScrollReveal().reveal(".scale-up",{duration:2e3,scale:.9});