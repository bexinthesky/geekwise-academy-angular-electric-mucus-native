document.getElementById('textinputid').addEventListener("input", event => {
    const buttonElement = document.getElementById('buttonid');
    
    console.log(event);
    const userInput = event.target.value;

    const isCorrect = userInput.toLowerCase() === "electric mucus";

    buttonElement.style.backgroundColor = isCorrect ? "#80ffaa": userInput;
    buttonElement.disabled = !isCorrect;
});

// ternary for everything - I like this better
// buttonElement.style.backgroundColor = userInput.toLowerCase() === "electric mucus" ? "#80ffaa" : userInput;
// buttonElement.disable = true;

// first attempt
// const colorInput = document.getElementById('textinputid');
// colorInput.addEventListener('keydown', function(e) {?(event.target.id)});