'use strict';
/* global $ */

const store = {
  dog: '',
};

function renderDog() {
  if (store.dog === '') {
    $('.container').empty();
  } else {
    $('.container').html(`<img src="${store.dog}" alt="a dog">`);
  }  
}

function getDogImage() {
  return fetch(`https://dog.ceo/api/breed/${$('#breed').val()}/images/random`)
    .then(response => {
      if (response.status === 404) {
        store.dog = '';
        throw new Error('Breed not found');
      }
      return response.json()})
    .then(dogImage => {
      store.dog = dogImage.message;
    })
    .catch(error => alert(error.message));
}

function watchForm() {
  $('#dogform').submit(event => {
    event.preventDefault();
    getDogImage().then(renderDog);
  });
}

$(watchForm);