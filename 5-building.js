export default class Building{
    constructor(sqft){
        this.sqft = sqft
        
        if (this.constructor !== Building){
            if(typeof this.evacuationWarningMessage !== 'function'){
                throw new Error(
                    'Class extending Building must override evacuationWarningMessage'
                )
            }
        }
    }

    get sqft(){
        return this._sqft
    }
    
    set sqft(value){
        if (value != Number){
            throw new TypeError('Value must be a number! ')
        }
        return this._sqft
    }

}
