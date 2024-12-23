console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  function fetchWithError() {
    // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
    const errorMessage = "Помилка при з'єднанні з сервером"
    // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
    return Promise.reject(errorMessage)
  }
  // Викликаємо функцію fetchWithError
  fetchWithError()
    // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
    .then((value) => {
      console.log(value)
    })
    // Якщо проміс виконаний з помилкою виводимо в консоль помилку
    .catch((error) => {
      console.log(error)
    })
}

// Викликаємо функцію task10
task9();
