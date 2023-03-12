userTextField.addEventListener('click', function (event) { 
    event.preventDefault(); 
    const userText = prompt('Введите полное имя Есенина', 'Сергей'); 
    const userTextField = document.querySelector('#userTextField'); 
    userTextField.textContent = userText; 
})