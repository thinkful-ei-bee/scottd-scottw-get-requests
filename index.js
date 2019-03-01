'use strict';

store = {
  dogs: [],
};

function getDogImage() {
  console.log('test');
  const endpoint = `https://dog.ceo/api/breeds/image/random/${$('#numdogs').val()}`;
  console.log(endpoint);
  fetch(`https://dog.ceo/api/breeds/image/random/${$('#numdogs').val()}`)
  .then(response => console.log(response.json());
  //.then(dog => store.dogs.push(dog));
}

function watchForm () {
  console.log('test');
  ('#dogform').submit(event => {
  console.log('watchForm');
  event.preventDefault();
  getDogImage();  
});
}

$(watchForm);