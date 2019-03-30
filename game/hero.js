var emptyJson="{}";


class Hero extends Creature{
    constructor (json) {
        var obj = JSON.parse(json); 

        json = JSON.stringify(obj);         
        super(json);

        this.mainHand=new Item("{}");

        this.hasTurn=false;
        var obj=JSON.parse(json);
    }

    showStats(id){
        var stats="<h3>"+this.name+"</h3>";
        stats+="class: "+this.class;
        stats+="<br />race: "+this.race;
        stats+="<br />hp: "+this.hitpoints;
        stats+="<br />main: "+this.mainHand.name+" ("+this.mainHand.type+")";
        $("#"+id).html(stats); 
    }
}

class Wizard extends Hero{
    constructor (json) {
        var obj = JSON.parse(json);
        obj.class="wizard";
        json = JSON.stringify(obj); 
        super(json);
    }
}
class Warrior extends Hero{
    constructor (json) {
        var obj = JSON.parse(json);
        obj.class="Warrior";
        json = JSON.stringify(obj); 
        super(json);
    }
}
class Druid extends Hero{
    constructor (json) {
        var obj = JSON.parse(json);
        obj.class="druid";
        json = JSON.stringify(obj); 
        super(json);
    }
}

function newHeroHasTurn(hero){
    for (i= 0, len = heroes.length; i < len; ++i) {
        heroes[i].hasTurn=false;
    }
    heroes[hero].hasTurn=true;
}

function createHeros(){


   
    heroes.push(new Wizard('{"race":"human","hitpoints":100,"name":"Gandalf the Grey","imgX":0,"imgY":0,"posX":4,"posY":4,"img":5}'));

    heroes.push(new Wizard('{"race":"elf","hitpoints":110,"name":"Galandriel","imgX":3,"imgY":4,"posX":6,"posY":6,"img":5}'));

    heroes.push(new Warrior('{"race":"gnome","hitpoints":110,"name":"Conan","imgX":6,"imgY":0,"posX":6,"posY":8,"img":5}'));

    heroes.push(new Druid('{"race":"dwarf","hitpoints":110,"name":"Micha","imgX":9,"imgY":4,"posX":2,"posY":8,"img":5}'));

    heroes[0].mainHand=new Sword('{"name":"the Destroyer"}');
    heroes[0].hasTurn=true;

    var main=heroes[0].mainHand;
    
    $("#hero").html(heroes[0].name+" ("+heroes[0].race+") "+" strikes with  "+main.name+ " ("+main.type+") "+heroes[0].imgX+heroes[0].imgX);

    heroes[0].showStats("hero0")
    heroes[1].showStats("hero1")
    heroes[2].showStats("hero2")
    heroes[3].showStats("hero3")

}

