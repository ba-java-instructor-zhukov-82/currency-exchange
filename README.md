##Simple gryvnya to USD/EURO converter

####Here is its scripts:

*index.html*
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Currency Exchange</title>
    </head>
    <body>

        Please enter the value of currency you have:&nbsp
        <input id="value">
        &nbsp
        <select id="currency" onchange="getSelected()">
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
        </select>

        <br/>

        <h2 id="result"></h2>

        <script src="scripts/script.js"></script>

    </body>
</html>
```

*scripts/script.js*
```javascript
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
```