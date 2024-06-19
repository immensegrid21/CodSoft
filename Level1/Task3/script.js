const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            display.innerText = '';
        } else if (value === 'DEL') {
            display.innerText = display.innerText.slice(0, -1);
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            display.innerText += value;
        }
    });
});
