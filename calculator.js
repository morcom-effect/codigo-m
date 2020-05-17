let first = '0';
let last = '0';
let operator = '';
let result = 0;

function onNumberClick(number) {
    if(last === '0') {
        last = number;
    } else {
        last += number;
    }
    const screen = document.getElementById('screen');
    screen.innerText = last;
}

function onOperatorClick(newOperator) {
    operator = newOperator;
    first = last;
    last = '0';
    const screen = document.getElementById('screen');
    screen.innerText = last;
}

function onShowResultClick() {
    const screen = document.getElementById('screen');
    if (operator === '+') {
        result = parseInt(first) + parseInt(last);
        last = result.toString();
        screen.innerText = result;
    }
    if (operator === '-') {
        result = parseInt(first) - parseInt(last);
        last = result.toString();
        screen.innerText = result;
    }
    if (operator === 'x') {
        result = parseInt(first) * parseInt(last);
        last = result.toString();
        screen.innerText = result;
    }
    if (operator === '/') {
        result = parseInt(first) / parseInt(last);
        last = result.toString();
        screen.innerText = result;
    }
}

function onClearClick() {
    first = '0';
    last = '0';
    operator = '';
    result = 0;
    const screen = document.getElementById('screen');
    screen.innerText = last;
}