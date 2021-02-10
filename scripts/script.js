// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      for (const product of data.products) {
        localStorage.setItem(${product.id}, 'test');
          
      }  
  myStorage = window.localStorage;
  localStorage.setItem('mygame', 'PriCon');
});
