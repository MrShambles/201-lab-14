'use strict';

function Product(name, fileExtension = 'jpg') {
  let formattedName = name.toLowerCase().replace(/\s+/g, '-');
  this.source = `assets/${formattedName}.${fileExtension}`; 
  this.timesClicked = 0;
  this.timesShown = 0;
}


function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function() {
  let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
  
  productNames.forEach(name => {
    let fileExtension = name === 'sweep' ? 'png' : 'jpg';
    this.allProducts.push(new Product(name, fileExtension));
  });
};

AppState.prototype.saveToLocalStorage = function() {
  localStorage.setItem('products', JSON.stringify(this.allProducts));
};

AppState.prototype.loadItems = function() {
  const productsJSON = localStorage.getItem('products');
  if (productsJSON) {
    this.allProducts = JSON.parse(productsJSON);
  } else {
    this.instantiateProducts();
  }
};



let appState = new AppState();
