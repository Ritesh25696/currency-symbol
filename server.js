var currencySymbol = require('./utils/currencyNameToSymbol')
module.exports = {
    /**
     * Adds currency symbol in front of string
     * ('123', 'USD')  // $123
     * ('1234', 'EUR') // €1234
     * @param str Input string to which currency is to be added
     * @param currency Currency Code eg. INR, USD, EUR
     * @returns string with currency symbol added in front
     */
    addCurrencySymbol(str, currency){
        return currencySymbol.getCurrencySymbol(currency) + str;
    },
    /**
     * Gets currency symbol for currency code
     * ('CZK') // Kč
     * ('USD') // $
     * @param currency Currency code eg. INR, USD, EUR
     * @returns currency symbol
     */
    getCurrencySymbol(currency){
        return currencySymbol.getCurrencySymbol(currency)
    }
}
