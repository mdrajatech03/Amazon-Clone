let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

}


function updateCart(){

let count = cart.length;

let cartCount = document.getElementById("cart-count");

if(cartCount){

cartCount.innerText = count;

}

}


updateCart();


/* CART PAGE */

let cartItems = document.getElementById("cart-items");

if(cartItems){

let html="";

let total = 0;

cart.forEach(item=>{

total += item.price;

html += `
<div class="cart-item">
<span>${item.name}</span>
<span>$${item.price}</span>
</div>
`;

});

html += `<hr><h3>Total: $${total}</h3>`;

cartItems.innerHTML = html;

}


/* PRODUCT FILTER */

function filterProduct(category){

let products = document.querySelectorAll(".product");

products.forEach(product => {

if(category === "all"){

product.style.display="block";

}

else if(product.classList.contains(category)){

product.style.display="block";

}

else{

product.style.display="none";

}

});

}
