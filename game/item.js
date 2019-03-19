class Item {
    constructor (json) {
        var obj=JSON.parse(json);
        if( !obj.hasOwnProperty('name')) obj.name="none";
        if( !obj.hasOwnProperty('type')) obj.type="none";
        if( !obj.hasOwnProperty('itemLevel')) obj.itemLevel=0;
        if( !obj.hasOwnProperty('range')) obj.range  = 0;

        this.type=obj.type;  //"weapon","treasure", "consumable", "potion"
        this.name=obj.name;
        this.itemLevel=obj.itemLevel;
        this.range=obj.range;
    }
    set type(type){
        this._type=type;
    }
    get type(){
        return this._type;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set itemLevel(itemLevel){
        this._itemLevel=itemLevel;
    }
    get itemLevel(){
        return this._itemLevel;
    }
    set range(range){
        this._range=range;
    }
    get range(){
        return this._range;
    }
}

class Weapon extends Item {
    constructor (json) {
        var obj = JSON.parse(json); 
        if( !obj.hasOwnProperty('type')) obj.type="weapon";

        json = JSON.stringify(obj);             
        super(json);
    }
}

class Sword extends Weapon {
    constructor (json) {
        var obj = JSON.parse(json); 
        obj.range=1;
        obj.type="sword";

        json = JSON.stringify(obj);             
        super(json);
    }
}

class Potion extends Item {
    constructor (json) {
        var obj = JSON.parse(json); 
        if( !obj.hasOwnProperty('type')) obj.type="potion";

        json = JSON.stringify(obj);             
        super(json);
    }
}
