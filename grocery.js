//Make sure to include the jQuery library and the Slick carousel library for the testimonial slider to work. Adjust the styling and content as per your needs and add more testimonials as required.
import './grocery.css';
import './grocery.html';



// Get the dropdown button element
var dropdownBtn = document.querySelector(".dropbtn");

// Toggle dropdown menu
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
  }
  
  // Close dropdown menu when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var dropdown = dropdowns[i];
        if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show");
        }
      }
    }
  };

  // Add event listener for the dropdown button
  document.querySelector(".dropbtn").addEventListener("click", toggleDropdown);

  // Get the search input element
var searchInput = document.getElementById('search-input');

// Get the search button element
var searchButton = document.getElementById('search-button');

// Add event listener for the search button click
searchButton.addEventListener('click', function() {
  // Get the search query entered by the user
  var query = searchInput.value.trim();
  
  // Perform the search operation
  performSearch(query);
});

// Function to perform the search operation
function performSearch(query) {
  // Add your search logic here
  // You can use the query to fetch search results or perform any other operations
  // For demonstration purposes, we will log the search query to the console
  console.log('Search Query:', query);
}


window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('back-to-top-btn');
    
    if (window.pageYOffset > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

// Get the form element
var newsletterForm = document.querySelector('.newsletter-form');

// Add event listener for form submission
newsletterForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the user input values
  var nameInput = document.querySelector('.txtb[name="name"]');
  var emailInput = document.querySelector('.txtb[name="email"]');
  var phoneInput = document.querySelector('.txtb[name="phone"]');
  var addressInput = document.querySelector('.txtb[name="address"]');
  var messageInput = document.querySelector('#message');

  // Perform form validation
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || addressInput.value === '' || messageInput.value === '') {
    alert('Please fill in all the fields.'); // Display an alert if any field is empty
    return; // Exit the function
  }

  // Create an object with the user input values
  var formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    message: messageInput.value
  };

  // You can perform further actions with the form data, such as sending it to a server using AJAX or performing client-side processing.
    // For demonstration purposes, we will simply log the form data to the console
    console.log('Form Data:', formData);
    
  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  addressInput.value = '';
  messageInput.value = '';

  alert('Form submitted successfully!'); // Display a success message
});


$(document).ready(function() {
  $('.testimonial-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

$(document).ready(function() {
  $('.testimonial-slider').slick({
    dots: true,
    arrows: true,
    prevArrow: '<div class="prev-btn">Previous</div>',
    nextArrow: '<div class="next-btn">Next</div>',
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});


// Login page JavaScript
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  if(document.getElementById('email').value === '' || document.getElementById('password').value === '') {
    alert('Please fill in all the fields');
    return;
  }else{
    alert('Login successful');
  }
  window.location.href = 'grocery.html';
});

// Signup page JavaScript
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  if(document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('password').value === '') {
    alert('Please fill in all the fields');
    return;
  }else{
    alert('Signup successful');
  }
  window.location.href = 'grocery.html';
});

 // JavaScript code for saving user address and profile
 const form = document.getElementById('addressProfileForm');
 form.addEventListener('submit', function(e) {
   e.preventDefault();
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const address = document.getElementById('address').value;
   const phone = document.getElementById('phone').value;
   const dob = document.getElementById('dob').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
    console.log('Date of Birth:', dob);

    alert('Profile saved successfully!'); 
   window.location.href = 'grocery.html';
 });


// Event listeners for login and signup buttons
document.getElementById('loginBtn').addEventListener('click', login);
document.getElementById('signupBtn').addEventListener('click', signup);



// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addItemToCart(item) {
  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function(cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // If the item already exists, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If the item doesn't exist, add it to the cart
    cartItems.push(item);
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to remove an item from the cart
function removeItemFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function(cartItem) {
    return cartItem.id === itemId;
  });

  if (itemIndex !== -1) {
    // Remove the item from the cart
    cartItems.splice(itemIndex, 1);
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  // Get the cart container element
  var cartContainer = document.querySelector('.cart-items');

  // Clear the cart container
  cartContainer.innerHTML = '';

  // Check if the cart is empty
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  // Iterate over the cart items and create HTML elements for each item
  cartItems.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');

    var itemName = document.createElement('span');
    itemName.textContent = item.name;
    itemName.classList.add('item-name');

    var itemPrice = document.createElement('span');
    itemPrice.textContent = '$' + item.price.toFixed(2);
    itemPrice.classList.add('item-price');

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function() {
      removeItemFromCart(item.id);
    });

    itemElement.appendChild(itemName);
    itemElement.appendChild(itemPrice);
    itemElement.appendChild(removeButton);

    cartContainer.appendChild(itemElement);
  });
}

// Function to calculate the cart total
function calculateCartTotal() {
  var total = 0;

  // Iterate over the cart items and sum up the prices
  cartItems.forEach(function(item) {
    total += item.price * item.quantity;
  });

  return total;
}

// Function to handle the checkout process
function checkout() {
  var total = calculateCartTotal();

  // TODO: Implement the logic to process the checkout, such as displaying a confirmation message or redirecting to a checkout page
  console.log('Checkout initiated. Total: $' + total.toFixed(2));
}

// Add event listener to add to cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var itemId = button.dataset.itemId;
    var itemName = button.dataset.itemName;
    var itemPrice = parseFloat(button.dataset.itemPrice);

    var item = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity: 1
    };

    addItemToCart(item);
  });
});

// Add event listener to checkout button
var checkoutButton = document.querySelector('.checkout-button');
checkoutButton.addEventListener('click', function() {
  checkout();
});

// Update the cart display initially
updateCartDisplay();




// Get the order items and total elements
var orderItemsElement = document.querySelector('.order-items');
var totalAmountElement = document.querySelector('.total-amount');

// Function to display the order summary
function displayOrderSummary() {
  // Clear the order items element
  orderItemsElement.innerHTML = '';

  // Iterate over the cart items and create HTML elements for each item
  cartItems.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('order-item');

    var itemName = document.createElement('span');
    itemName.textContent = item.name;
    itemName.classList.add('item-name');

    var itemPrice = document.createElement('span');
    itemPrice.textContent = '$' + (item.price * item.quantity).toFixed(2);
    itemPrice.classList.add('item-price');

    itemElement.appendChild(itemName);
    itemElement.appendChild(itemPrice);

    orderItemsElement.appendChild(itemElement);
  });

  // Calculate and display the total amount
  var totalAmount = calculateCartTotal();
  totalAmountElement.textContent = '$' + totalAmount.toFixed(2);
}

// Event listener to place the order
var placeOrderButton = document.querySelector('.place-order-button');
placeOrderButton.addEventListener('click', function() {
  // Placeholder logic for placing the order
  alert('Order placed successfully!');
});

// Display the order summary initially
displayOrderSummary();


// Get user's location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(checkDeliveryPossibility);
  } else {
    displayDeliveryStatus("Geolocation is not supported by this browser.");
  }
}

// Check if delivery is possible based on the user's location
function checkDeliveryPossibility(position) {
  // Example logic: Assume delivery is not possible if latitude is less than 40
  if (position.coords.latitude < 40) {
    displayDeliveryStatus("Sorry, delivery is not available in your area.");
  } else {
    displayDeliveryStatus("Delivery is available in your area.");
  }
}

// Display the delivery status message
function displayDeliveryStatus(message) {
  var deliveryStatusDiv = document.getElementById("deliveryStatus");
  deliveryStatusDiv.innerText = message;
}

// Call getLocation() when the page is loaded
window.addEventListener("load", getLocation);


// Get the add to cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to handle adding a product to the cart
function addToCart(event) {
  var product = event.target.parentElement;
  var productName = product.querySelector('h3').textContent;
  var productPrice = product.querySelector('.price').textContent;

  // Create an object representing the product
  var item = {
    name: productName,
    price: parseFloat(productPrice.replace('$', '')),
    quantity: 1
  };

  // Add the product to the cart (you can implement your own logic here)
  addToCartLogic(item);

  // Provide user feedback (e.g., show a success message)
  alert('Product added to cart!');
}

// Attach event listeners to the add to cart buttons
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// Function to handle the logic of adding a product to the cart
function addToCartLogic(item) {
  // Implement your logic here (e.g., adding the item to the cart array, updating the cart display, etc.)
  // For demonstration purposes, let's log the item to the console
  console.log('Item added to cart:', item);
}

