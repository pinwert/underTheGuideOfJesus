var executionTime = 0;
var mainButton = document.querySelector('#main_btn');
mainButton.addEventListener('click', function () { displayMessage('hello', 3) })

function displayMessage(message, times) {
    if (executionTime < times) {
        console.log(message, executionTime);
        executionTime++
    }
}