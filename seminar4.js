// LocalStorage

// localStorage.setItem('login', 'qwerty1234');
// localStorage.setItem('password', '123');

// localStorage.removeItem('password');

// const login = localStorage.getItem('login');
// console.log(login);

// localStorage.clear();

// localStorage.user = JSON.stringify({name: 'Tom'});

// const user = JSON.parse(localStorage.user);
// console.log(user);


// Асинхронщина

// const myPromise = new Promise((resolve, reject) => { });

// console.log(myPromise);

// myPromise
//     .then((value) => { })
//     .catch((error) => { });

// const url = 'https://jsonplaceholder.typicode.comusers';

// fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error('Что-то пошло не так'));

// Упрощение

// const getData = (url) =>
//     new Promise((resolve, reject) => {
//         fetch(url)
//             .then((resolve) => resolve.json())
//             .then((json) => resolve(json))
//             .catch((error) => reject(error))
//     })

// getData(url)
//     .then((data) => console.log(data))
//     .catch((error) => console.error('Что-то пошло не так'));

// Миграция на async / await

const getAsyncAwaitData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

// try {
//     const newData = await getAsyncAwaitData(url);
//     console.log(newData);
// } catch (error) {
//     console.error('Что-то пошло не так');
// }


// Task

const api = 'https://api.nasa.gov/planetary/apod?api_key=MY_KEY';

try {
    const newData = await getAsyncAwaitData(url);
    console.log(newData);

    const pictureBoxEl = document.querySelector('.picture-box');

    newData.forEach(element => {
        const picture = `
            <div class='picture'>
                <h2 class='pic-heading'>${element.title}</h2>
                <img src='${element.url}'/>
                <div class='description'>${element.explanation}</div>
            </div>
        `;
        pictureBoxEl.insertAdjacentHTML('beforeend', picture);
    });
} catch (error) {
    console.error('Что-то пошло не так');
}
