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

const button = document.querySelector(`.others__search--filters`) ;
button.addEventListener('click', (e) => {
  const sort = document.querySelector('.shop__sort');
  sort.classList.toggle('shop__sort-active');
});





// const main = document.querySelector('.main');
// const articlesHamburger = document.querySelector('.articles');
// const trolleyAdd = document.querySelector('.product__about--avaliable');
// const shop = document.querySelector('.shop');

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');

const clicker = () =>{
  // trolleyAdd.classList.toggle('product__about--avaliable');
  hamburger.classList.toggle('hamburger--active');
  navigation.classList.toggle('nav--active');
}

const trolley = document.querySelector('.header__up--trolley');
const articlesPreview = document.querySelector('.articles');

const trolleyClicker = () =>{
  trolley.classList.toggle('header__up--trolley-active');
  articlesPreview.classList.toggle('articles--active');
  // main.classList.toggle('main--active');
}
  // articlesHamburger.classList.toggle('main');
// const articlesHamburgerClicker = () =>{
//   articlesHamburger.classList.toggle('shop--active');
// }

hamburger.addEventListener('click', clicker,);
trolley.addEventListener('click', trolleyClicker);
articlesHamburger.addEventListener('click', articlesHamburgerClicker);




// const navUp = document.querySelector('.nav--up');

// const scrolled = ()=> {
//   navUp.classList.toggle('header--active');
// }
// navUp.window.addEventListener('scrollY', scrolled);

// const filters = document.querySelector('.others__search--filters');
// const sort = document.querySelector('.shop__sort');

// const filtersClicker = () =>{
//   filters.classList.toggle('others__search--filters');
//   sort.classList.toggle('shop__sort-active');
// }
// filters.addEventListener('click', filtersClicker);

// const button = document.querySelector(`.others__search--filters`) ;
// button.addEventListener('click', (e) => {
//   const sort = document.querySelector('.shop__sort');
//   sort.classList.toggle('shop__sort-active');
// });

const producent = document.querySelector('.menu__item--text');
const producentList = document.querySelector('.options__producent');

const slide = () =>{
  // trolleyAdd.classList.toggle('product__about--avaliable');
  // producent.classList.toggle('menu__item--text');
  navigation.classList.toggle('options__producent--active');
}
producent.addEventListener('click', slide);