/*
    Hero
    Class with all the necessery info about one off the hero's
    in: txt=all the info in Json fomrat

*/

function Hero(json){
	
	//getters and setters
	Hero.prototype.setRace=function(race){
		this.obj.race=race;
	}
	Hero.prototype.getRace=function(){
		return this.obj.race;
	}
	Hero.prototype.setClass=function(classe){
		this.obj.class=classe;
	}
	Hero.prototype.getClass=function(){
		return this.obj.class;
	}
	Hero.prototype.setName=function(name){
		this.obj.name=name;
	}
	Hero.prototype.getName=function(){
		return this.obj.name;
	}
	Hero.prototype.setLevel=function(level){
		this.obj.level=level;
	}
	Hero.prototype.getLevel=function(){
		return this.obj.level;
	}
	Hero.prototype.setExperience=function(experience){
		this.obj.experience=experience;
	}
	Hero.prototype.getExperience=function(){
		return this.obj.experience;
	}
	Hero.prototype.setHitPoints=function(hitPoints){
		this.obj.hitPoints=hitPoints;
	}
	Hero.prototype.getHitPoints=function(){
		return this.obj.hitPoints;
	}
	Hero.prototype.setStrength=function(strength){
		this.obj.strength=strength;
	}
	Hero.prototype.getStrength=function(){
		return this.obj.strength;
	}
	Hero.prototype.setStamina=function(stamina){
		this.obj.stamina=stamina;
	}
	Hero.prototype.getStamina=function(){
		return this.obj.stamina;
	}
	Hero.prototype.setIntelligence=function(intelligence){
		this.obj.intelligence=intelligence;
	}
	Hero.prototype.getIntelligence=function(){
		return this.obj.intelligence;
	}
	Hero.prototype.setAgility=function(agility){
		this.obj.agility=agility;
	}
	Hero.prototype.getAgility=function(){
		return this.obj.agility;
	}
	Hero.prototype.setMainHand=function(mainhand){
		this.obj.mainhand=mainhand;
	}
	Hero.prototype.getMainHand=function(){
		return this.obj.mainhand;
	}
	Hero.prototype.setOffHand=function(offHand){
		this.obj.offhand=offHand;
	}
	Hero.prototype.getOffHand=function(){
		return this.obj.offhand;
	}
	Hero.prototype.setInventory=function(inventory){
		this.obj.inventory=inventory;
	}
	Hero.prototype.getInventory=function(){
		return this.obj.inventory;
	}
	Hero.prototype.setGold=function(gold){
		this.obj.gold=gold;
	}
	Hero.prototype.getGold=function(){
		return this.obj.gold;
	}
	Hero.prototype.setGreating=function(greating){
		this.obj.greating=greating;
	}
	Hero.prototype.getGreating=function(){
		if (this.obj.greating!==undefined)	return this.obj.greating;
		else return "lok'tar"
	}
	Hero.prototype.show	= function (id){
		$("#"+id).html("<h3>"+this.getName()+"</h3>"+this.getClass()+" "+this.getRace()
		+" strikes with a "+this.getMainHand()+"<br>and says:"+this.getGreating()
		);
	}
	
	Hero.prototype.showWeapon = function(){
		$("#weapon").html(this.obj.name+" strikes with a "+this.obj.mainhand);
	}
	this.obj=JSON.parse(json);
}


function Alliance(json) {
	Hero.call(this,json);
	this.setGreating("Goodday to you");
	this.show("player2");
}

function Horde(json) {
	Hero.call(this,json);
	this.show("player1");
}

function createHeros(){

	Alliance.prototype = Object.create(Hero.prototype);
	Horde.prototype = Object.create(Hero.prototype);

	var txt = '{"name":"John", "age":30, "level":2,"class":"Warrior","race":"Dwarf","mainhand":"hammer"}';
	let hero1 = new Alliance(txt);
	var txt = '{"name":"Jane", "age":30, "level":7,"class":"Healer","race":"Human","mainhand":"dagger","greating":"Hi"}';
	let hero2 = new Horde(txt);

	let hero3= new Hero(
		'{"race":"Human","class":"Warrior","name":"Conan","level":3,"experience":1982,"hitpoints":2011,"strenght":100,"stamina":100,"intelligence":1,"agility":1,"mainhand":"Twohanded sword","offhand":"","inventory":["picture of Red Sonja","bread"],"gold":10}'
	);
	hero2.setMainHand("Wand");
	hero2.showWeapon();
	hero3.show("hero");
}