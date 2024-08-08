export default class HolbertonClass{
    constructor(size, location){
        this.size = size;
        this.location = location;
    }
    // When the class is cast to a number, return the size
    valueOf(){
        return this._size
    }
    // When the class is cast to a string, return the location
    toString(){
        return this._location;
    }

    get size(){
        return this._size;
    }

    set size(value){
        if( typeof value !== 'number'){
            throw new TypeError('value should be a number!')
        }
        this._size = value;
    }

    get location(){
        return this._location;
    }

    set location(value){
        if (typeof value !== 'string'){
            throw new  Error('valueOf location should be a String!');
        }
        this._location = value;
    }
}

/*const myObject = new HolbertonClass(100, 'New York');
console.log(Number(myObject));
console.log(String(myObject));
*/
