'use strict';

document.addEventListener('DOMContentLoaded', function() {
  appState.loadItems(); // Load or initialize products
  displayProducts(); // Display products for voting
});

// Function to display products for voting
function displayProducts() {
  const productsContainer = document.querySelector('section'); // Adjust if necessary to match your HTML structure
  productsContainer.innerHTML = ''; // Clear existing products (if any)
  
  // Assuming we're displaying three products at a time for voting
  let displayedProducts = chooseRandomProducts(3);

  displayedProducts.forEach(product => {
    const imgElement = document.createElement('img');
    imgElement.src = product.source;
    imgElement.alt = product.name;
    imgElement.title = product.name;
    imgElement.addEventListener('click', () => handleVote(product.name));
    productsContainer.appendChild(imgElement);

    // Increment timesShown and save every time a product is displayed
    product.timesShown++;
  });

  appState.saveToLocalStorage(); // Save the state after updating views
}

// Function to handle voting for a product
function handleVote(productName) {
  const product = appState.allProducts.find(product => product.name === productName);
  if (product) {
    product.timesClicked += 1;
    appState.saveToLocalStorage(); // Save every time a vote is recorded
    displayProducts(); // Refresh the displayed products for continuous voting
  }
}


function chooseRandomProducts(count) {
  let shuffled = appState.allProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
