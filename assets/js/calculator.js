var displayElement = document.getElementById('displayRow');
var value = 0, value2 = 0;

displayElement.innerHTML=0;
var operator = '';

function storeOperator(op) {
    if (op != '=') {
        operator = op;
        value2 = value;
        value = 0;
    }
}

function clearCalc() {
    value = 0;
    displayElement.innerHTML = value.toString();
    operator = '';
}

function positiveNegative() {
    value = value * -1;
    displayElement.innerHTML = value.toString();
}

function percent(){
    value = value * .01;
    displayElement.innerHTML = value.toString();
}

function compute() {
    if (operator == '+') {
        value = value2 + value;
    } else if (operator == '-') {
         value = value2 - value;
    } else if (operator == '*') {
        value = value2 * value;
    } else if (operator == '/') {
        value = value2 / value;
    }
    operator = '';
    displayElement.innerHTML = value.toString();
    console.log("answer2", displayElement.innerHTML);
  }

function pressDecimalPoint() {
    if (Number.isInteger(value)) {
        valueString = value.toString(); 
        valueString = `${valueString}.`;
        value = parseFloat(valueString).toFixed(1);
    }
      displayElement.innerHTML = valueString;
}

function pressNumber(buttonValue) {
    valueString = value.toString(); 
    if (valueString == '0') {
      valueString = buttonValue.toString(); 
      value = buttonValue; 
    } else {
        if (Number.isInteger(value)) {
             valueString = valueString + buttonValue.toString(); 
            value = parseInt(valueString);
        } else {
            var decimalToString = value.toString();
            value = parseFloat(value);
            var decimalPlace = decimalToString.indexOf('.');
            var decimalCount = decimalToString.length - decimalPlace - 1;
            if (decimalCount == 1 && decimalToString[decimalToString.length-1] == '0') {
                var newDecimalValue = buttonValue / (10 ** decimalCount); 
            } else {
                var newDecimalValue = buttonValue / (10 ** (decimalCount + 1));
            }
            value = value + newDecimalValue; 
            valueString = value.toString(); 
        }
    }
    displayElement.innerHTML = valueString;
    console.log("answer", valueString)
}