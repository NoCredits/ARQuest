class Item {
    constructor (json) {
        var obj=JSON.parse(json);
        if( !obj.hasOwnProperty('name')) obj.name="item";
        if( !obj.hasOwnProperty('type')) obj.type="none";
        if( !obj.hasOwnProperty('itemLevel')) obj.itemLevel=0;
        if( !obj.hasOwnProperty('range')) obj.range  = 0;
        if( !obj.hasOwnProperty('imgX')) obj.imgX=0;
        if( !obj.hasOwnProperty('imgY')) obj.imgY=0;
        if( !obj.hasOwnProperty('img')) obj.img=0;
        if( !obj.hasOwnProperty('posX')) obj.posX=-1;
        if( !obj.hasOwnProperty('posY')) obj.posY=-1;

        this.posX=obj.posX;
        this.posY=obj.posY;
        this.imgX=obj.imgX;
        this.imgY=obj.imgY;

        this.type=obj.type;  //"weapon","treasure", "consumable", "potion"
        this.name=obj.name;
        this.itemLevel=obj.itemLevel;
        this.range=obj.range;
        this.img=obj.img;

        //some random positions for trial
        if (this.posX==-1) this.posX=Math.floor(Math.random() * gridSizeX);
        if (this.posY==-1) this.posY=Math.floor(Math.random() * gridSizeY);
        //some radnom images
        if (this.imgX==-1) this.imgX=Math.floor(Math.random() * 14); 
        if (this.imgY==-1) this.imgY=Math.floor(Math.random() * 15);



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
    
    draw(ctx){
        var screenPosX=(this.posX)*tileSizeX;
        var screenPosY=(this.posY)*tileSizeY;
        screenPosX=screenPosX*scaleFactor;
        screenPosY=screenPosY*scaleFactor;
    
        ctx.drawImage(images[this.img],
            (this.imgX)*50,(this.imgY)*50,50,50, 
            screenPosX,screenPosY,40*scaleFactor,40*scaleFactor
            );       
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

function createRandomItems(){

    items.push(new Item('{"imgX":-1,"imgY":-1,"posX":0,"posY":0,"img":8}'));
    items.push(new Item('{"imgX":-1,"imgY":-1,"posX":50,"posY":0,"img":8}'));
    items.push(new Item('{"imgX":-1,"imgY":-1,"posX":100,"posY":0,"img":8}'));

    for (i=0;i<65;i++){
        items.push(new Item('{"imgX":-1,"imgY":-1,"posX":-1,"posY":-1,"img":8}'));
    }
}
