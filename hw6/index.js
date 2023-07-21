async function fetchData() {
    try {
        const response = await fetch('data.json');
        // console.log(response);

        if (!response.ok) {
            throw new Error('Не удалось обработать data.json');
        }

        const data = await response.json();
        // console.log(data);
        const productBox = document.querySelector('.item-flex');

        data.forEach(item => {
            const productEl = `
            <div class="items" id="${item.id}">
                <a class="item-link" href="#34">
                    <img class="item-link__pic" src="${item.image}" alt="товар">
                    <div class="txt-box">
                        <p class="item-link__title">${item.name}</p>
                        <p class="item-link__text">${item.description}</p>
                        <p class="item-link__price">${item.price}</p>
                    </div>
                </a>
                <div class="add-box">
                    <a class="item-btn" href="#12">
                        <img src="img/cart.svg" alt="cart">
                        <p class="item-btn__txt">Add to Cart </p>
                    </a>
                </div>
            </div>
            `;
            productBox.insertAdjacentHTML('beforeend', productEl);
        });
    } catch (error) {
        console.error(error)
    }
};

fetchData();





const cartBox = document.querySelector('.cart-box');

let basket = [];


document.querySelector('.item-flex').addEventListener('click', (event) => {
    if (!event.target.closest('.item-btn')) {
        return;
    }

    const productEl = event.target.closest('.items');
    const productId = productEl.id;
    const productImg = productEl.querySelector('.item-link__pic').src;
    const productName = productEl.querySelector('.item-link__title').textContent;
    const productPrice = productEl.querySelector('.item-link__price').textContent;

    addToCart(productId, productImg, productName, productPrice);
})


function addToCart(id, img, name, price) {
    if (!(id in basket)) {
        basket[id] = { id: id, img: img, name: name, price: price, count: 0 };
    }

    basket[id].count++;

    increaseAmountProductInCart(id);
}



function addNewProductToCart(productId) {
    const cartItem = `
        <div class="products" id="${productId}">
            <img class="products__img" src="${basket[productId].img}" alt="product">
            <div class="products-box">
                <a href="../Product/index.html" class="products-box__title">${basket[productId].name}</a>
                <div class="products-box__text">
                    <p>Price: <span class="products-box__text_price">${basket[productId].price * basket[productId].count}</span></p>
                    <p>Color: <span class="products-box__text_details">Red</span></p>
                    <p>Size: <span class="products-box__text_details">XL</span></p>
                    <p>Quantity: <input type="number" value="${basket[productId].count}" min="1" max="10"
                                                        class="products-box__text_details products-box__text_amount"></input>
                    </p>
                </div>
            </div>
    
            <div class="products__cross">
                <svg class="delete-button" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                    fill="#575757" />
                </svg>
            </div>
        </div>
        `
    cartBox.insertAdjacentHTML('beforeend', cartItem);
}

function increaseAmountProductInCart(productId) {
    const productInCart = cartBox.querySelector(`.products[id="${productId}"]`);
    if (!productInCart) {
        addNewProductToCart(productId);
        return;
    }

    const product = basket[productId];
    productInCart.querySelector('.products-box__text_amount').value = product.count;
    productInCart.querySelector('.products-box__text_price').textContent = product.price * product.count;
}

// function delProduct(product) {
//     const deleteBtn = product.querySelectorAll('.delete-button');
//     deleteBtn.addEventListener('click', () => {
//         const product = btn.closest('.products');
//         product.remove();

//     })
// }



