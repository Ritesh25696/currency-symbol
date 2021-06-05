# currency-symbol-wrap
A module that can add currency symbol in front of string or returns currency symbol corresponding to currency code.

## HOW TO INSTALL
npm install currency-symbol-wrap --save

## HOW TO USE
var cur = require('currency-symbol-wrap');

`cur.addCurrencySymbol('123', 'USD')`
//Returns $123

`cur.addCurrencySymbol('1234', 'EUR')`
//Returns €1234

`cur.getCurrencySymbol('CZK')`
//Returns Kč

### METHODS

- addCurrencySymbol<br>
Adds currency symbol in front of string
```
    cur.addCurrencySymbol('123', 'USD')  // $123
    cur.addCurrencySymbol('1234', 'EUR') // €1234
```

- getCurrencySymbol<br>
Gets currency symbol for currency code
```
  cur.getCurrencySymbol('CZK') // Kč
  cur.getCurrencySymbol('EUR') // €
```
