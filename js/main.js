//HAMBURGER MENU

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    menuOpen = false;
  }
});

//SMOOTH SCROLLING

$(document).ready(function() {
  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 900)
  });

  //SCROLLUP

  $(window).scroll(()=> {
    if ($(this).scrollTop() > 40) {
      $('#scrollUp').fadeIn();
    } else {
      $('#scrollUp').fadeOut();
    }
  });

  $("#scrollUp").click(() => {
    $('html, body').animate({scrollTop: 0}, 1000);
  });

});

/* COOKIE CONSENT */

const cookieContainer = document.querySelector('.cookie-consent');
const cookieButton = document.querySelector('.cookie-btn');

cookieButton.addEventListener('click', () => {
  cookieContainer.classList.remove('active');
  localStorage.setItem('cookieBannerDisplayed', 'true')
});

setTimeout( () => {
  if(!localStorage.getItem('cookieBannerDisplayed'))
  cookieContainer.classList.add('active');
}, 500);



