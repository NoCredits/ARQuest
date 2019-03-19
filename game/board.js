


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
             if (Math.floor(Math.random() * 10 +1)==2)   arr[c][r].east=1;
             if (Math.floor(Math.random() * 10 +1)==3)   arr[c][r].south=1;
             if (Math.floor(Math.random() * 10 +1)==4)   arr[c][r].west=1;
 
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


function drawTile(tile,ctx,xpos,ypos){
   
//ctx.save();
    if (tile.tile==1)     ctx.drawImage(images[0],tile.floorNo*50,0,50,50, xpos, ypos,50,50);    
    if (tile.north==1)     ctx.drawImage(images[1], xpos, ypos,50,50);    
    if (tile.east==1)     ctx.drawImage(images[2], xpos, ypos,50,50);    
    if (tile.south==1)     ctx.drawImage(images[3], xpos, ypos,50,50);    
    if (tile.west==1)     ctx.drawImage(images[4], xpos, ypos,50,50);    
//    ctx.rotate(90*TO_RADIANS);
 //   ctx.drawImage(wallImg, i, j,50,10);    
    //ctx.restore();
}

var animateLoop=0;

function updateBoard(){

    if (checkReady()){
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
   
        for (i= 0, len = heroes.length; i < len; ++i) {
            heroes[i].trackMovement();
            if (animateLoop>5){
                heroes[i].moveAnimate();
             }
           heroes[i].draw(ctx);
        }

        for (i= 0, len = foes.length; i < len; ++i) {
            foes[i].trackMovement();
            if (animateLoop>5){
                foes[i].moveAnimate();
           }
           foes[i].draw(ctx);
        }

    }
    if (animateLoop++>5) animateLoop=0;

    for (i= 0, len = heroes.length; i < len; ++i) {
        heroes[i].moveCycle+=speed;
    }
    for (i= 0, len = foes.length; i < len; ++i) {
        foes[i].moveCycle+=speed;
    }

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

}