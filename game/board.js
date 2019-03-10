var TO_RADIANS = Math.PI/180; 

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
            if (i==0 || i==rows-1 || j==0 || j==columns-1) {
                //wall around board
                arr[i][j]=JSON.parse('{"tile":1,"animation":0,"visible":true}');
            }
            else {
                //clear path
                arr[i][j]=JSON.parse('{"tile":0,"animation":1,"visible":true}');
            } 
       }
        
    }
    return arr;
}
  

function checkReady(){
    var ready=false;
    if (floorImg.complete && wallImg.complete) ready=true;
    return ready;
}


function drawTile(ctx){
    ctx.save();
    ctx.rotate(90*TO_RADIANS);
    ctx.drawImage(wallImg, i, j,50,10);    
    ctx.restore();

}
var ro=90;
function updateBoard(){

    if (checkReady){
        var c = document.getElementById("gameCanvas");
        var ctx = c.getContext("2d");
        console.log(checkReady());
        ctx.clearRect(0, 0, c.width, c.height);
        for (i=0;i<7;i++){
            for (j=0;j<7;j++){
                ctx.drawImage(floorImg, i*50+50, j*50+50,50,50);    
                if (Math.floor(Math.random() * 10)>5) {
                      ctx.drawImage(wallImg, i*50+50, j*50+50,50,10);    
                      ctx.restore();
                } 
            }
        }
    }
}

function setUpBoard(){

    wallImg.src = "images/wall.png";
    floorImg.src = "images/floor.png";

}