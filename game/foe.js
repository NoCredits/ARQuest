class Foe extends Creature{
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

class Werewolf extends Foe{
    constructor (json) {
        var obj = JSON.parse(json);
        obj.race="werewolf";
        obj.class="werewolf";
        json = JSON.stringify(obj); 
        super(json);
    }
}

class Bear extends Foe{
    constructor (json) {
        var obj = JSON.parse(json);
        obj.race="bear";
        obj.class="bear";
        json = JSON.stringify(obj); 
        super(json);
    }
}

function createFoes(){


   
    foes.push(new Bear('{"hitpoints":300,"name":"Black Bear","imgX":0,"imgY":0,"posX":1,"posY":1,"img":6}'));

    foes.push(new Werewolf('{"hitpoints":110,"name":"Lycan","imgX":6,"imgY":4,"posX":8,"posY":8,"img":7}'));


}