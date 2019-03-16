var emptyJson="{}";

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

class Creature{
    constructor (json) {
        var obj=JSON.parse(json);
        if( !obj.hasOwnProperty('imgX')) obj.imgX=0;
        if( !obj.hasOwnProperty('imgY')) obj.imgY=0;

        this.hitpoints=obj.hitpoints;
        this.class=obj.class;
        this.race=obj.race;
        this.name=obj.name;
        this.imgX=obj.imgX;
        this.imgY=obj.imgY;
        this.posX=obj.posX;
        this.posY=obj.posY;

        this.incX=0;
        this.incY=0;
        this.moveCycle=0;
        this.moveTo=NOWHERE;
        this.imgAnimation=0;

    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set hitpoints(hp){
        this._hitpoints=hp;
    }
    get hitpoints(){
        return this._hitpoints;
    }        
    set race(race){
        this._race=race;
    }
    get race(){
        return this._race;
    }
    set class(klas){
        this._class=klas;
    }
    get class(){
        return this._class;
    }
    get mainHand(){
        return this._mainHand;
    }
    set mainHand(mainHand){
        this._mainHand=mainHand;
    }

}

class Hero extends Creature{
    constructor (json) {
        var obj = JSON.parse(json); 

        json = JSON.stringify(obj);         
        super(json);

        this.mainHand=new Item("{}");

        this.hasTurn=false;
        var obj=JSON.parse(json);
    }
}

class Wizard extends Hero{
    constructor (json) {
        var obj = JSON.parse(json); 
        json = JSON.stringify(obj); 
        super(json);
    }
}

function createHeros(){


   
    heroes.push(new Wizard('{"race":"human","hitpoints":100,"name":"Gandalf the Grey","imgX":0,"imgY":0,"posX":4,"posY":4}'));

    heroes.push(new Wizard('{"race":"elf","hitpoints":110,"name":"Galandriel","imgX":3,"imgY":4,"posX":6,"posY":6}'));
    
    heroes[0].mainHand=new Sword('{"name":"the Destroyer"}');
    heroes[0].hasTurn=true;

    var main=heroes[0].mainHand;
    
    $("#hero").html(heroes[0].name+" ("+heroes[0].race+") "+" strikes with  "+main.name+ " ("+main.type+") "+heroes[0].imgX+heroes[0].imgX);


}

