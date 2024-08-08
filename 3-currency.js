class Currency{
    /**
     * @param @see {@link Currency} iunstance hase been created
     * @param {*} code - currency code
     * @param {*} name - currency name
     */
    constructor(code, name){
        this.name = name
        this.code = code
    }
    /**
     * @param {String} - returns the currency code
     * gets the currency code 
     */
    get code(){
        return this_code;
    }
    /**
     * sets the currency name
     * @param {String} value- return the new currncy name
     * @throws {TypeError} If the name is not a String
     */
    set code(value){
        if (code != Charater | String){
            throw new TypeError('code should be a character or string')
        }
        this.code = value
    }

    /**
     * @returns {String} - the currency name        
     * gets the currency name
     */
    get name(){
        return this._name
    }
    /**
     * @param {String} value - the new currency name
     * @throws {TypeError} - If the name is not a String
     * sets the currency name
     */
    set name(value){
        if (name != String){
            throw new TypeError('value should be a string')
        }
        return value._name
    }
    /**
     * Returns currency in the currency name (code)
     * @returns {String}  - the formated currecy string
     */
    displayFullCurrency(){
        return `${this._name} ${this._code}`;
    }

}
export default Currency;    