let display = document.getElementById('display');

function keypress(key) {
    display.textContent += key;
}

function calculate() {
    display.textContent = eval(display.textContent);
    
}
function allclear() {
    display.textContent = '';
}

function removelastword() {
    display.textContent = display.textContent.slice(0, -1);
}

