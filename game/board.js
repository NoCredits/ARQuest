

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
             arr[r][c].floorNo=Math.floor(Math.random() * 4);
             //some random walls
             if (Math.floor(Math.random() * 10 +1)==1)   arr[c][r].north=1;
             if (Math.floor(Math.random() * 10 +1)==1)   arr[c][r].east=1;
             if (Math.floor(Math.random() * 10 +1)==1)   arr[c][r].south=1;
             if (Math.floor(Math.random() * 10 +1)==1)   arr[c][r].west=1;
 
        }
    }        
  
    return arr;
}
  

function checkReady(){
    var ready=true;
    for (i= 0, len = images.length; i < len; ++i) {
        if (!images[i].complete)  ready=false;
    }
    return ready;
}


function zoomIn(){
    scaleFactor*=1.2;
}
function zoomOut(){
    scaleFactor/=1.2;
}

function drawTile(tile,ctx,xpos,ypos){
   
//ctx.save();
        if (tile.tile==1)     ctx.drawImage(images[0],tile.floorNo*50,0,50,50, xpos*scaleFactor, ypos*scaleFactor,tileSizeX*scaleFactor,tileSizeY*scaleFactor);    
        if (tile.north==1)     ctx.drawImage(images[1], xpos*scaleFactor, ypos*scaleFactor,tileSizeX*scaleFactor,tileSizeY*scaleFactor);    
        if (tile.east==1)     ctx.drawImage(images[2], xpos*scaleFactor, ypos*scaleFactor,tileSizeX*scaleFactor,tileSizeY*scaleFactor);    
        if (tile.south==1)     ctx.drawImage(images[3], xpos*scaleFactor, ypos*scaleFactor,tileSizeX*scaleFactor,tileSizeY*scaleFactor);    
        if (tile.west==1)     ctx.drawImage(images[4], xpos*scaleFactor, ypos*scaleFactor,tileSizeX*scaleFactor,tileSizeY*scaleFactor);    
//    ctx.rotate(90*TO_RADIANS);
 //   ctx.drawImage(wallImg, i, j,50,10);    
    //ctx.restore();
}

function canGoNorth(posX,posY){
    if (playArea[posX][posY].north!=1 && playArea[posX][posY-1].south!=1) return true;
    else return false;
}
function canGoEast(posX,posY){
    if (playArea[posX][posY].east!=1 && playArea[posX+1][posY].west!=1) return true;
    else return false;
}
function canGoSouth(posX,posY){
    if (playArea[posX][posY].south!=1 && playArea[posX][posY+1].north!=1) return true;
    else return false;
}
function canGoWest(posX,posY){
    if (playArea[posX][posY].west!=1 && playArea[posX-1][posY].east!=1) return true;
    else return false;
}


function getTileInfo(posX,posY){
    var tile=playArea[posX][posY];
    var info="tile: "+tile.tile+" ";

    info+="exits: ";
    info+=canGoNorth(posX,posY)?"N":"";
    info+=canGoEast(posX,posY)?"E":"";
    info+=canGoSouth(posX,posY)?"S":"";
    info+=canGoWest(posX,posY)?"W":"";
    info+="<br\>";
    for (i= 0, len = heroes.length; i < len; ++i) {
        if (heroes[i].posX==posX && heroes[i].posY==posY) {
            info+=heroes[i].name+" ("+heroes[i].race+" "+heroes[i].class+") ";
            newHeroHasTurn(i);
        }
     }
    //Draw foes
    for (i= 0, len = foes.length; i < len; ++i) {
        if (foes[i].posX==posX && foes[i].posY==posY) info+=foes[i].name+" ";
    }

    for (i= 0, len = items.length; i < len; ++i) {
        if (items[i].posX==posX && items[i].posY==posY) info+=items[i].name+" ";
    }

    return info;
}

function rightClick(){
    //gridX=(canvasSizeX+translateX+mousePos.x);
    var gridX=(mousePos.x-translateX);
    gridX=Math.floor(gridX/(tileSizeX*scaleFactor));

    var gridY=(mousePos.y-translateY);
    gridY=Math.floor(gridY/(tileSizeY*scaleFactor));

    $("#action").html(
        "clicked at ("+gridX+","+gridY+") found: "+getTileInfo(gridX,gridY)
    );

}

var animateLoop=0;

function updateBoard(){
    if (checkReady()){
        
        //var c = document.getElementById("gameCanvas");
        var ctx = canvas.getContext("2d");
        
        //save screen
        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height)

        canvasSizeX=canvas.width;
        canvasSizeY=canvas.height;
        translateX=0;
        translateY=0;

         //   console.log(activeCreatureX+" "+canvasSizeX);
        //calc scroll of screen
        if (activeCreatureX>(canvasSizeX)/2) {
            translateX=(activeCreatureX-(canvasSizeX)/2)*(-1);
        } 
        if (activeCreatureX>(gridSizeX*tileSizeX*scaleFactor)-(canvasSizeX)/2) {
            translateX=((gridSizeX*tileSizeX*scaleFactor)-(canvasSizeX))*(-1);
        }

        if (activeCreatureY>(canvasSizeY)/2 ) {
            translateY=(activeCreatureY-(canvasSizeY)/2)*(-1);
        }
        if (activeCreatureY>(gridSizeY*tileSizeY*scaleFactor)-(canvasSizeY)/2) {
            translateY=((gridSizeY*tileSizeY*scaleFactor)-(canvasSizeY))*(-1);
        }

        //smaller then screen? then center
        if ((gridSizeX*tileSizeX*scaleFactor)<canvasSizeX) {
           translateX=(canvasSizeX-(gridSizeX*tileSizeX*scaleFactor))/2;
        }
        if ((gridSizeY*tileSizeY*scaleFactor)<canvasSizeY) {
            translateY=(canvasSizeY-(gridSizeY*tileSizeY*scaleFactor))/2;
         }

         //center screen on hero
         ctx.translate(translateX,translateY);
        // console.log(translateX+" "+translateY);
         // draw tiles
        for (i=0;i<gridSizeX;i++){
            for (j=0;j<gridSizeY;j++){
                drawTile(playArea[i][j],ctx,i*tileSizeX,j*tileSizeY);
            }
        }

        heroes[0].updateStats("hero0");
        heroes[1].updateStats("hero1");
        heroes[2].updateStats("hero2");
        heroes[3].updateStats("hero3");
        //Draw heroes
        for (i= 0; i < heroes.length; i++) {
            heroes[i].draw(ctx);
           // console.log("hero"+i)
           // heroes[i].updateStats("hero"+i);

         }
        //Draw foes
        for (i= 0; i < foes.length; i++) {
            foes[i].draw(ctx);
        }
        for (i= 0; i < items.length; i++) {
            items[i].draw(ctx);
        }

        //heroes on the move
        for (i= 0; i < heroes.length; i++) {
            heroes[i].trackMovement();
            if (animateLoop>5){
                    heroes[i].moveAnimate();
             }
        }
        //foes on the move
        for (i= 0; i < foes.length; i++) {
            foes[i].trackMovement();
            if (animateLoop>5){
                foes[i].moveAnimate();
           }
        }

    }

    if (animateLoop++>5) animateLoop=0;

    for (i= 0, len = heroes.length; i < len; ++i) {
        heroes[i].moveCycle+=speed;
    }
    for (i= 0, len = foes.length; i < len; ++i) {
        foes[i].moveCycle+=speed;
    }

    //restore original screen
    ctx.restore();

}

function setUpBoard(){

    images[0]=new Image();
    images[0].src= "images/floortiles.png";
    images[1]=new Image();
    images[1].src = "images/wallnorth.png";
    images[2]=new Image();
    images[2].src = "images/walleast.png";
    images[3]=new Image();
    images[3].src = "images/wallsouth.png";
    images[4]=new Image();
    images[4].src = "images/wallwest.png";
    images[5]=new Image();
    images[5].src="images/heroes.png";   
    images[6]=new Image();
    images[6].src="images/bears.png";   
    images[7]=new Image();
    images[7].src="images/werewolves.png";   
    images[8]=new Image();
    images[8].src="images/items.png";   

}