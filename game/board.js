var TO_RADIANS = Math.PI/180; 
var viewPortX=0;
var viewPortY=0;

class tile{

    constructor (json){
        var obj=JSON.parse(json);
        if( !obj.hasOwnProperty('north')) obj.north=0;
        if( !obj.hasOwnProperty('east')) obj.east=0;
        if( !obj.hasOwnProperty('south')) obj.south=0;
        if( !obj.hasOwnProperty('west')) obj.west=0;
        if( !obj.hasOwnProperty('tile')) obj.type=0;
        if( !obj.hasOwnProperty('animation')) obj.animation=0;

        this.tile=obj.tile;
        this.north=obj.north;
        this.east=obj.east;
        this.south=obj.south;
        this.west=obj.west;
        this.animation=obj.animation;
    }


}

function create2DBoard(rows,columns) {
    /* creates
        111111
        100001
        100001
        111111
        but then rows x columns
        [0..rows][0..columns]
    */
    var arr = [];
    for (var i=0;i<rows;i++) {
       arr[i] = [];
       for (j=0;j<columns;j++){
            arr[i][j]=new tile('{"tile":1}');

       }
    }

    for (var r=0;r<rows;r++) {
        for (c=0;c<columns;c++){
             //Create wall around board
             if (c==0 ) {
                 arr[r][c].north=1;
             }
             if ( c==columns-1) {
                arr[r][c].south=1;
            }
             if (r==0) {
                arr[r][c].west=1;
             }
             if (r==rows-1) {
                arr[r][c].east=1;
             }
           
             //some random walls
             if (Math.floor(Math.random() * 10 +1)==1)   arr[c][r].north=1;
             if (Math.floor(Math.random() * 10 +1)==2)   arr[c][r].east=1;
             if (Math.floor(Math.random() * 10 +1)==3)   arr[c][r].south=1;
             if (Math.floor(Math.random() * 10 +1)==4)   arr[c][r].west=1;
 
        }
    }        

    return arr;
}
  

function checkReady(){
    var ready=false;
    if (floorImg.complete && heroImage.complete) ready=true;
    return ready;
}


function drawTile(tile,ctx,xpos,ypos){
   
//ctx.save();
    if (tile.tile==1)     ctx.drawImage(floorImg, xpos, ypos,50,50);    
    if (tile.north==1)     ctx.drawImage(wallNorth, xpos, ypos,50,50);    
    if (tile.east==1)     ctx.drawImage(wallEast, xpos, ypos,50,50);    
    if (tile.south==1)     ctx.drawImage(wallSouth, xpos, ypos,50,50);    
    if (tile.west==1)     ctx.drawImage(wallWest, xpos, ypos,50,50);    
//    ctx.rotate(90*TO_RADIANS);
 //   ctx.drawImage(wallImg, i, j,50,10);    
    //ctx.restore();

}
var ro=90;
var vpX=0;
var vpY=0;
var heroesWay=0;
var heroesAnimation=0;
var animateLoop=0;
function updateBoard(){

    if (checkReady){
        var c = document.getElementById("gameCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,c.width,c.height)
        console.log(checkReady());
        ctx.clearRect(0, 0, c.width, c.height);
        for (i=0;i<gridSizeX;i++){
            for (j=0;j<gridSizeY;j++){
                drawTile(playArea[i][j],ctx,i*tileSizeX-gridStartX*tileSizeX+viewPortX,j*tileSizeY-gridStartY*tileSizeY+viewPortY);
            }
        }
        ctx.drawImage(heroImage,(heroesAnimation+3)*50,(heroesWay)*50,50,50, 200, 200,50,50);   
        
    }
    if (Math.floor(Math.random() * 55 +1)==1)  {vpX=1; vpY=0; heroesWay=1 } //right
    if (Math.floor(Math.random() * 55 +1)==1)  {vpX=-1; vpY=0; heroesWay=2} //left
    if (Math.floor(Math.random() * 55 +1)==1)  {vpX=0; vpY=1; heroesWay=3} //down
    if (Math.floor(Math.random() * 55 +1)==1)  {vpX=0; vpY=-1; heroesWay=0} //up
    if (animateLoop>5){
         heroesAnimation--;
         if (heroesAnimation<0) heroesAnimation=2;
         animateLoop=0;
    }
    animateLoop++;
    viewPortX+=vpX;
    viewPortY+=vpY;
   

}

function setUpBoard(){

    wallNorth.src = "images/wallnorth.png";
    wallEast.src = "images/walleast.png";
    wallSouth.src = "images/wallsouth.png";
    wallWest.src = "images/wallwest.png";
    floorImg.src = "images/floor.png";
    heroImage.src="images/heros.png";   

}