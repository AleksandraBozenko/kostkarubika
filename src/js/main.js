"use strict";

//To jest do pwa nie edytuj tutaj nic ...

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Niżej możesz pisać.


console.log(`Hello world!`);

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const trolley = document.querySelector('.header__up--trolley');
const articlesPreview = document.querySelector('.articles');

const clicker = () =>{
  hamburger.classList.toggle('hamburger--active');
  navigation.classList.toggle('nav--active');
}
const trolleyClicker = () =>{
  trolley.classList.toggle('header__up--trolley-active');
  articlesPreview.classList.toggle('articles--active');
}

hamburger.addEventListener('click', clicker,);
trolley.addEventListener('click', trolleyClicker);




const navUp = document.querySelector('.nav--up');

const scrolled = ()=> {
  navUp.classList.toggle('header--active');
}
navUp.window.addEventListener('scrollY', scrolled);



