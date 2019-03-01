'use strict';
/* global $ */

const store = {
  dogs: [],
};

function renderDogs() {
  $('.container').html(store.dogs.map(e => `<img src="${e}" alt="a dog">`));
}

function getDogImage() {
  return fetch(`https://dog.ceo/api/breeds/image/random/${$('#num-dogs').val()}`)
    .then(response => response.json())
    .then(dogImage => {
      store.dogs = dogImage.message;
      //renderDogs();
      store.dogs.forEach(dog => console.log(dog));
      return;
    });

}

function watchForm() {
  $('#dogform').submit(event => {
    event.preventDefault();
    getDogImage().then(renderDogs);
  });
}

$(watchForm);