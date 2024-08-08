import Building from "./5-building";

export default class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super(sqft) = sqft;
        this.floors = floors;
    }
    
    get floors(){
        return this._floors;
    }

    set floors(value){
        this.floors = value;
    }

    evacuationWarningMessage(){
        return `Evacuate slowly the ${this.floors} floors`;
    }

}
