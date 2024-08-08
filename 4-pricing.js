import Currency from "./3-currency";

export default class Pricing{

    constructor(amount, currency){
        this.amount=amount
        this.currency=currency
    }

    /**
     * get the amount
     */
    get amount(){
        return this._amount
    }
    /**
     * set the amount
     */
    set amount(value){
        if (value != float | int){
            throw new TypeError('value must be a float')
        }
        this._amount = value
    }
    /**
     * get the currency
     */
    get currency(){
        return this._currency
    }
    /**
     * set the currency 
     */
    set currency(value){
        if(!(value instanceof Currency)){
            throw new TypeError('Currency must be a Currency!')
        }
        this._currency = value 
    }
    /**
     * 
     * @returns {amount && instanceof Currency} - displays full price
     */

    displayFullPrice(){
        return `${this._amount} ${this._currency    }`
    }
    static convertPrice(amount, conversionRate){
        if(typeof amount != 'number'){
            throw new TypeError('value must be a number')
        }
        if(typeof conversionRate != 'number'){
            throw new TypeError('conversionRate must be a number!')
        }
        return amount * conversionRate
    }

} 
