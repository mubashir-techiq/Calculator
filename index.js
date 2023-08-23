function check(text) {
    if (calculation.length !== 0) {
        operations = ['+', '-', 'x', '/', '.']
        var flag = false;
        var last = calculation.slice(calculation.length - 1);
        for (var i = 0; i < operations.length; i++) {
            if (last === operations[i]) {
                flag = true;

                break;
            }
        }
        if (!flag) {
            calculation += text;
        }
        last = ''
    }
}

function calculate(eq) {
    if (calculation != '') {
        var neweq = ''
        for (var i = 0; i < eq.length; i++) {
            if (eq[i] == 'x') {
                neweq += '*'
            }
            else {
                neweq += eq[i]
            }
        }
        eq = neweq
        try {
            answer = eval(eq)
            console.log(answer)
            document.querySelector('#answer').innerHTML = answer
            calculation = ''
        }
        catch (exception) {
            console.log(exception)
        }
    }
}

var calculation = '';
var answer;

for (var i = 0; i < document.querySelectorAll('.btn').length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function () {
        newText = this.querySelectorAll('p')[0].innerHTML;
        if ('+' == newText || '-' == newText || 'x' == newText || '/' == newText || '.' == newText) {
            check(newText);

            document.querySelector('#calculate').innerHTML = calculation
        }
        else if (newText == 'AC') {
            calculation = '';

            document.querySelector('#calculate').innerHTML = calculation
        }
        else if (newText == 'C') {
            if (calculation.length != 0) {
                calculation = calculation.slice(0, calculation.length - 1);

            }

            document.querySelector('#calculate').innerHTML = calculation
        }
        else if (newText == '=') {
            calculate(calculation)
        }
        else {
            calculation += newText;
            document.querySelector('#calculate').innerHTML = calculation
        }
        console.log(calculation)
    })
}


document.addEventListener('keydown', function (event) {
    nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    if ('+' == event.key || '-' == event.key || 'x' == event.key || '/' == event.key || '.' == event.key) {
        check(event.key);

        document.querySelector('#calculate').innerHTML = calculation
    }
    else if (event.key.toLowerCase() == 'backspace' || event.key.toLowerCase() == 'delete') {
        if (calculation.length != 0) {
            calculation = calculation.slice(0, calculation.length - 1);
            document.querySelector('#calculate').innerHTML = calculation
            console.log('a')
        }
    }
    else if (event.key == '=' || event.key.toLowerCase() == 'enter') {
        calculate(calculation)
    }
    else {
        for (var i = 0; i < nums.length; i++) {
            if (event.key == nums[i])
                calculation += event.key
            document.querySelector('#calculate').innerHTML = calculation;
        }
    }
    console.log(event)


})