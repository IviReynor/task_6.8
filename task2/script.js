const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const showAlert = document.querySelector('#showAlert');
showAlert.addEventListener('click', () => {
    alert('Вывод информации в всплывающем окне браузера');
})

const messagePromp = document.querySelector('#messagePromp');
messagePromp.addEventListener('click', () => {
    alert('Выводит сообщение и ждёт, пока пользователь введёт текст, а затем возвращает введённое значение или null, если ввод отменён (CANCEL/Esc). ');
})
