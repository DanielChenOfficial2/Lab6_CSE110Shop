// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      for (const product of data) {
        localStorage.setItem(`${product.id}`, `The title is ${product.title}. The price is ${product.price}. The description is "${product.description}" The category is ${product.category}. The image is ${product.image}.`); 
          
      }  
    })
  myStorage = window.localStorage;
  localStorage.setItem('mygame', 'PriCon');
});
