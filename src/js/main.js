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

const clicker = () =>{
  hamburger.classList.toggle('hamburger--active');
  navigation.classList.toggle('nav--active');
}

hamburger.addEventListener('click', clicker);


