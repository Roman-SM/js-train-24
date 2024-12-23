console.log("Завдання: 4 ==============================");

// Функція task4, яка буде використовувати проміси
function task4() {
  // Визначаємо перший проміс з іменем promise1
  // Функція promise1, повертає новий проміс
  function promise1(timeout = 1000) {
    // Ми викликаємо конструктор Promise, що приймає в якості аргументу функцію (executor function)
    // Ця функція приймає два аргументи: resolve і reject, які є функціями
    return new Promise((resolve, reject) => {
      // Використовуємо функцію setTimeout, щоб симулювати асинхронну операцію
      // Ця функція приймає два аргументи: функцію, яку потрібно викликати після певного часу, і час у мілісекундах (1000 мс = 1 с)
      setTimeout(() => {
        // Після 1 секунди викликаємо функцію resolve, яка змінює стан проміса на "виконано" і передає значення 'Проміс 1 виконано'
        resolve('Проміс 1 виконано')
      }, timeout)
    })
  }
  // Визначаємо другий проміс з іменем promise2
  // Функція promise2, повертає новий проміс
  function promise2(timeout = 1000) {
    return new Promise((resolve, reject) => {
    // Використовуємо функцію setTimeout, щоб симулювати асинхронну операцію з затримкою 1сек
      setTimeout(() => {
        // Після 1 секунди викликаємо функцію resolve, яка змінює стан проміса на "виконано" і передає значення 'Проміс 2 виконано'
        resolve('Проміс 2 виконано')
      }, timeout)
    })
  }
  // Promise.all приймає масив промісів і повертає новий проміс, який вирішується, коли всі вхідні проміси вирішені
  Promise.all([promise1(), promise2()])
    // Функція then викликається, коли проміс вирішений
    // Результати всіх вхідних промісів передаються у функцію then у вигляді масиву, виводимо в консоль масив ['Проміс 1 виконано', 'Проміс 2 виконано']
    .then((result) => {
      console.log(result)
    })
    // Функція catch викликається, коли будь-який з промісів відхилено
    .catch((error) => {
      // Повідомлення про помилку від першого відхиленого проміса передається у функцію catch, виводимо в консоль помилку
      console.log(error)
    })
    // Функція finally викликається незалежно від того, чи вирішено проміс, чи відхилено
    .finally(() => {
      // Виводимо в консоль "Всі операції завершено"
      console.log("Всі операції завершено")
    })
}

// Викликаємо функцію task4
task4();
