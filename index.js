'use strict';
/* global $ */

const store = {
  dogs: [],
};

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${$('#num-dogs').val()}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('#dogform').submit(event => {
    event.preventDefault();
    getDogImage();  
  });
}

$(watchForm);