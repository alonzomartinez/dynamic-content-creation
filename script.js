// DOM Element Selectors
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductBtn = document.getElementById('add-product');
const cartList = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

// Cart State tracking array
let cart = [];

// Event Listener to Add Product
addProductBtn.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Validation
  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and positive price.');
    return;
  }

  // Check if item already exists in the cart array
  const existingItem = cart.find(item => item.name.toLowerCase() === name.toLowerCase());

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    // Add new item object to cart array
    cart.push({
      id: Date.now().toString(), // unique identifier
      name: name,
      price: price,
      quantity: 1
    });
  }

  // Clear Input Fields
  productNameInput.value = '';
  productPriceInput.value = '';

  // Render Updates
  renderCart();
});

// Calculate total and re-render DOM items optimally
function renderCart() {
  // Clear the existing list inside the DOM
  cartList.innerHTML = '';
  let totalSum = 0;

  // Re-build cart item elements smoothly using a Document Fragment
  const fragment = document.createDocumentFragment();

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalSum += itemTotal;

    // Create container element
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.setAttribute('data-id', item.id);

    // Create item information layout
    const detailsSpan = document.createElement('span');
    detailsSpan.className = 'item-details';
    detailsSpan.textContent = `${item.name} - $${item.price.toFixed(2)} each (Subtotal: $${itemTotal.toFixed(2)})`;

    // Create dynamic quantity counter control
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.className = 'quantity-input';
    quantityInput.value = item.quantity;
    quantityInput.min = '1';

    // Quantity update changes tracking dynamically 
    quantityInput.addEventListener('change', (e) => {
      const newQuantity = parseInt(e.target.value);
      if (isNaN(newQuantity) || newQuantity < 1) {
        e.target.value = item.quantity; // Reset to original if invalid
        return;
      }
      item.quantity = newQuantity;
      renderCart();
    });

    // Create active action removal button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    
    // Remove element safely from memory and target layout arrays
    removeBtn.addEventListener('click', () => {
      cart = cart.filter(cartItem => cartItem.id !== item.id);
      renderCart();
    });

    // Append child objects structurally inside parent elements 
    li.appendChild(detailsSpan);
    li.appendChild(quantityInput);
    li.appendChild(removeBtn);
    fragment.appendChild(li);
  });

  // Put in structural changes all at once to preserve application performance
  cartList.appendChild(fragment);
  totalPriceSpan.textContent = totalSum.toFixed(2);
}