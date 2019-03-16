var emptyJson = "{}";

class Item {
    constructor(json) {
        var obj = JSON.parse(json);
        if (!obj.hasOwnProperty('name')) obj.name = "none";
        if (!obj.hasOwnProperty('type')) obj.type = "none";
        if (!obj.hasOwnProperty('itemLevel')) obj.itemLevel = 0;
        if (!obj.hasOwnProperty('range')) obj.range = 0;

        this.type = obj.type;  //"weapon","treasure", "consumable", "potion"
        this.name = obj.name;
        this.itemLevel = obj.itemLevel;
        this.range = obj.range;
    }
    set type(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set itemLevel(itemLevel) {
        this._itemLevel = itemLevel;
    }
    get itemLevel() {
        return this._itemLevel;
    }
    set range(range) {
        this._range = range;
    }
    get range() {
        return this._range;
    }
}

class Weapon extends Item {
    constructor(json) {
        var obj = JSON.parse(json);
        if (!obj.hasOwnProperty('type')) obj.type = "weapon";

        json = JSON.stringify(obj);
        super(json);
    }
}

class Sword extends Weapon {
    constructor(json) {
        var obj = JSON.parse(json);
        obj.range = 1;
        obj.type = "sword";

        json = JSON.stringify(obj);
        super(json);
    }
}

class Potion extends Item {
    constructor(json) {
        var obj = JSON.parse(json);
        if (!obj.hasOwnProperty('type')) obj.type = "potion";

        json = JSON.stringify(obj);
        super(json);
    }
}

class Creature {
    constructor(json) {
        var obj = JSON.parse(json);
        this.hitpoints = obj.hitpoints;
        this.class = obj.class;
        this.race = obj.race;
        this.name = obj.name;

    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set hitpoints(hp) {
        this._hitpoints = hp;
    }
    get hitpoints() {
        return this._hitpoints;
    }
    set race(race) {
        this._race = race;
    }
    get race() {
        return this._race;
    }
    set class(klas) {
        this._class = klas;
    }
    get class() {
        return this._class;
    }
    get mainHand() {
        return this._mainHand;
    }
    set mainHand(mainHand) {
        this._mainHand = mainHand;
    }

}

class Hero extends Creature {
    constructor(json) {
        var obj = JSON.parse(json);
        json = JSON.stringify(obj);
        super(json);

        this.mainHand = new Item("{}");

        var obj = JSON.parse(json);
    }
}

class Wizard extends Hero {
    constructor(json) {
        var obj = JSON.parse(json);
        json = JSON.stringify(obj);
        super(json);
    }
}

function createHeros() {

    var hero = new Wizard('{"race":"human","hitpoints":100,"name":"Gandalf the Grey"}');
    hero.mainHand = new Sword('{"name":"the Destroyer"}');

    var hero2 = new Hero('{"race":"dwarf","hitpoints":150}');

    let mob1 = new Creature('{"race":"goblin","hitpoints":8}');

    var main = hero.mainHand;

    $("#hero").html(hero.name + " (" + hero.race + ") " + " strikes with  " + main.name + " (" + main.type + ") ");
    $("#hero2").html(hero2.name + " (" + hero2.race + ") " + "stands idle and looks at a " + mob1.race);


}

