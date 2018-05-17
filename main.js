var executionTime = 0;
var mainButton = document.querySelector('#main_btn');
var handleClick = once(displayMessage, 3);
mainButton.addEventListener('click',  function() { handleClick('hello') } })



function displayMessage(message) {
  console.log(message, executionTime++);
}

function once(func, times) {
	var current = 0;
	return function() {
    if(current < times) {
      func.apply(this, arguments);
      current++;
    }
	};
};
