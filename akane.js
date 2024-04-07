let outputScreen = document.getElementById('output-screen');

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        let expression = outputScreen.value;
        let numbers = expression.split(/[+\-*/%]/);
        let operators = expression.replace(/[0-9.]+/g, '').split('');

        let result = parseFloat(numbers[0]);

        for(let i = 0; i < operators.length; i++){
            let operator = operators[i];
            let number = parseFloat(numbers[i + 1]);

            switch(operator){
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    result /= number;
                    break;
                case '%':
                    result %= number;
                    break;
            }
        }

        outputScreen.value = result;
    }
    catch(err){
        alert("invalid")
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}


document.addEventListener('keydown', function(event) {
    event.preventDefault();
    event.stopPropagation();
    if(event.key >= '0' && event.key <= '9'){
        display(event.key);
    } else if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%' || event.key === '.' || event.key === '') {
        display(event.key);
    } else if(event.key === 'c' || event.key === 'C'){
        Clear();
    } else if(event.key === 'Backspace' || event.key === 'Delete'){
        del();
    } else if(event.key === 'Enter' || event.key === '='){
        Calculate();
    }
    console.log("event")
});