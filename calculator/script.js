function calculate() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    // Check for valid input
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Please enter valid numbers</div>';
        return;
    }

    // Perform calculation
    var result;
    switch (operation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert"> Can not Divide by Zero. Inter Valid Number</div>';
                return;
            }
            break;
        default:
            document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Invalid operation</div>';
            return;
    }

    // Display result
    document.getElementById('result').innerHTML = '<div class="alert alert-success" role="alert">Result: ' + result + '</div>';
}
