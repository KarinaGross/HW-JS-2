// 1) 
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки
const min = (arg) => Math.min(...arg);

// 2)
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let count = 0;
    return {
        value: count,
        increment: () => ++count,
        decrement: () => --count
    }
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.decrement());

// 3)
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// Функция проверялась на следующей струтуре html:
/* <div id="root">
        <div class="branch1">
            <p class="text"></p>
        </div>
        <div class="branch2">
            <p class="elem"></p>
        </div>
        <div class="branch3">
            <p class="title"></p>
        </div>
        <div class="branch4">
            <div class="text">
                <p class="heading"></p>
            </div>
        </div>
    </div> 
*/

function findElementByClass(rootElement, targetClass) {
    if (rootElement.classList.contains(targetClass)) {
        return rootElement;
    }

    const childElements = rootElement.children;
    for (let i = 0; i < childElements.length; i++) {
        const foundElement = findElementByClass(childElements[i], targetClass);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}

const rootElement = document.getElementById('root');
console.log(findElementByClass(rootElement, 'heading'));