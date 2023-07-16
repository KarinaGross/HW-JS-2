async function fetchData() {
    try {
        const response = await fetch('data.json');
        console.log(response);

        if (!response.ok) {
            throw new Error('Не удалось обработать data.json');
        }

        const data = await response.json();
        console.log(data);
        const productBox = document.querySelector('.item-flex');

        data.forEach(item => {
            const productEl = `
            <div class="items">
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