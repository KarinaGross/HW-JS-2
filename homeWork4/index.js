const url = 'https://jsonplaceholder.typicode.com/users';

const usersBoxEl = document.querySelector('.users-box');

const getAsyncAwaitData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

try {
    const newData = await getAsyncAwaitData(url);

    newData.forEach(element => {
        const user = `
            <div class='user'>
                <div class='user-data'>
                    <h2 class='user__name'>${element.name}</h2>
                    <p class='user__city'>${element.address.city}</p>
                    <p class='user__phone'>${element.phone}</p>
                    <p class='user__website'>${element.website}</p>
                </div>
                <div class='delete'>
                    <svg class='user__delete' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
            </div>
        `;

        localStorage.setItem(`${element.name}`, `${element.address.city}, ${element.phone}, ${element.website}`);

        usersBoxEl.insertAdjacentHTML('beforeend', user);
    });
} catch (error) {
    console.error('Что-то пошло не так');
}

usersBoxEl.addEventListener('click', (event) => {
    if (!event.target.closest('.user__delete')) {
        return;
    }

    const userName = event.target.closest('.user').querySelector('.user__name').textContent;

    localStorage.removeItem(userName);

    event.target.closest('.user').remove();
})