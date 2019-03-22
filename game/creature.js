class Creature{
    constructor (json) {
        var obj=JSON.parse(json);
        if( !obj.hasOwnProperty('imgX')) obj.imgX=0;
        if( !obj.hasOwnProperty('imgY')) obj.imgY=0;
        if( !obj.hasOwnProperty('img')) obj.img=0;

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
        this.img=obj.img;
        this.imgAnimation=0;
        this.imgDirection=0;
       

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

    
    draw(ctx){

        var screenPosX=(this.posX-gridStartX)*tileSizeX+this.incX+viewPortX;
        var screenPosY=(this.posY-gridStartY)*tileSizeY+this.incY+viewPortY;
        ctx.drawImage(images[this.img],
            (this.imgX+this.imgAnimation)*50,(this.imgY+this.imgDirection)*50,50,50, 
            screenPosX,screenPosY,50,50
            );       
    }

    trackMovement(){
        switch (this.moveTo){
            case MOVENORTH :
            this.incY-=speed;
            if (this.hasTurn) viewPortY+=speed;
            break;
            case MOVEEAST :
            this.incX+=speed;
            if (this.hasTurn) viewPortX-=speed;
            break;
            case MOVESOUTH :
            this.incY+=speed;
            if (this.hasTurn) viewPortY-=speed;
            break;
            case MOVEWEST :
            this.incX-=speed;
            if (this.hasTurn) viewPortX+=speed;
            break;
        }
        
        if (this.moveCycle>=50){ 
            this.stopMove();
        }
    }

    moveAnimate(){
        if (this.moveTo!=NOWHERE)     this.imgAnimation--;
        else this.imgDirection=IMGSOUTH;
        if (this.imgAnimation<0) this.imgAnimation=2;
    }

    stopMove(){
        this.moveCycle=0;
        viewPortX=0;
        viewPortY=0;

        switch (this.moveTo){
            case MOVENORTH :
            this.posY--;
            break;
            case MOVEEAST :
            this.posX++;
            break;
            case MOVESOUTH :
            this.posY++;
            break;
            case MOVEWEST :
            this.posX--;
            break;         
        }
        if (this.hasTurn){
            //center on hero
            gridStartX=this.posX-Math.floor(gridVisibleX/2);
            gridStartY=this.posY-Math.floor(gridVisibleY/2);
        }
        this.moveTo=NOWHERE; 

        this.incX=0;
        this.incY=0;

        if ( Math.floor(Math.random() * 6)==1) this.randomMove();

    }

    randomMove(){
        var r=Math.floor(Math.random() * 4) ;
        if (r==0)  {
            if (this.posX<gridSizeX-1 && playArea[this.posX][this.posY].east==0 && playArea[this.posX+1][this.posY].west==0 )
                
            this.moveTo=MOVEEAST; this.imgDirection=IMGEAST } //right
        if (r==1)  {
            if (this.posX>0 && playArea[this.posX][this.posY].west==0 && playArea[this.posX-1][this.posY].east==0)
            this.moveTo=MOVEWEST; this.imgDirection=IMGWEST} //left
        if (r==2)  {
            if (this.posY<gridSizeY-1 && playArea[this.posX][this.posY].south==0  &&  playArea[this.posX][this.posY+1].north==0)
            this.moveTo=MOVESOUTH;this.imgDirection=IMGSOUTH} //down
        if (r==3)  {
            if (this.posY>0 && playArea[this.posX][this.posY].north==0 &&  playArea[this.posX][this.posY-1].south==0)
            this.moveTo=MOVENORTH; this.imgDirection=IMGNORTH} //up

    }

}

