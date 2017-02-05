function read(id) {
    return document.getElementById(id).value;
}

function print(data) {
    document.getElementById('result').innerHTML = data;
}

//-----------------------------------------------------

function getSelected() {

    var e = document.getElementById('currency');
    var currency = e.options[e.selectedIndex].value;

    var value = +(read('value'));

    calculateExchangeOperation(value, currency.toUpperCase());
}

function calculateExchangeOperation(value, currency) {

    const USD = 29;
    const EURO = 34;

    var output;
    var result;

    switch(currency) {

        case 'USD': {
            result = (value / USD).toFixed(2);
            output = 'Result: GRN to ' + currency + ' is ' + result;
            print(output);
        }

        case 'EURO': {
            result = (value / EURO).toFixed(2);
            output = 'Result: GRN to ' + currency + ' is ' + result;
            print(output);
        }

    }
}