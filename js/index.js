


$(document).ready(function(){
    $(".num").counterUp({
        delay:10,
        time:1200
    })
})

var Partners = $('.Partners-carousel');
Partners.owlCarousel({
    items:1,
    loop:true,
    // margin:15,
    autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    Partners.trigger('play.Partners.autoplay',[1700])
})
$('.stop').on('click',function(){
    Partners.trigger('stop.Partners.autoplay')
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1700])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});




let feautredOffset = $("#scrollBtnLocation").offset().top
$(window).scroll(function() {
    let wScroll = $(window).scrollTop();
    if (wScroll > feautredOffset ) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
});

$("#scroll-top").click(function() {
    $("html, body").animate({scrollTop: 0}, "1000" );
 });

 $(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".navBar").position();
        if (scroll > topDist.top) {
            $('.navBar').css({"position":"fixed", "z-index" : "999"  , "width": "100%" , "padding" :"19px 0" , "top":"0"});
        } else {
            $('.navBar').css({"position":"static" , "padding":" 25px 0","top":"auto"});
        }
    });
});

// let regexAll = /^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/;
// let regexemail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//  let regexPhone =/^\+?[0-9](?:[- ]?[0-9]){9,11}$/
 
//  let submit = document.querySelector("#submit");
// let nameInput = document.querySelector("#inputEmail4");
// let emailInput = document.querySelector("#Email");
// let phone = document.querySelector("#phone");
// let alert = document.querySelector("#alert");




// $("#submit").onclick(function(){
//   if (regexName.test(nameInput.value)) {
//     nameAlert.classList.replace("d-block","d-none")
//   }
//   else {
//     nameAlert.classList.replace("d-none","d-block")
//   }
//   if (regexemail.test(emailInput.value)) {
//     emailalert.classList.replace("d-block","d-none")
//   }
//   else {
//     emailalert.classList.replace("d-none","d-block")
//   }
//   if (regexPhone.test(PhoneInput.value)) {
//     phoneAlert.classList.replace("d-block","d-none")
//   }
//   else {

//     phoneAlert.classList.replace("d-none","d-block")
//     return false;
//   }
// })


