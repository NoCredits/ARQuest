
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
  
  
function preloader() {
    if (document.images) {
        var wallImg = new Image();
        var floorImg = new Image();
        wallImg.src = "images/wall.png";
        floorImg.src = "images/floor.png";
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

var wallImg = new Image();	
var floorImg = new Image();	


function board(){
    //addLoadEvent(preloader);

    var board=create2DBoard(25,25);


    var c = document.getElementById("boardCanvas");
    var ctx = c.getContext("2d");
	floorImg.onload = function (){
    }
    wallImg.src = "images/wall.png";
    floorImg.src = "images/floor.png";
    for (i=0;i<9;i++){
        for (j=0;j<9;j++){
            ctx.drawImage(floorImg, i*50, j*50,50,50);    
            if (Math.floor(Math.random() * 10)>4) {
              // ctx.drawImage(wallImg, i*50, j*50,50,10);    
            }
        }
    }
    //ctx.drawImage(floorImg, 0, 0,50,50);    
    //ctx.drawImage(floorImg, 0, 50,50,50);    
    //ctx.drawImage(wallImg, 0, 45,50 ,10);    
 

    //var ctx = c.getContext("2d");
    //var img = document.getElementById("scream");
    //ctx.drawImage(floorImg, 10, 10);
    //var canvas = $('#boardCanvas');
	//canvas.width = 500;
    //canvas.height = 400;
    //ctx=canvas.get(0).getContext('2d');
    //ctx.drawImage(floorImg,0,0);

   // $('#info').html("tile[0][0] contains: <br>tile:"+board[0][0].tile+" animation:"+board[0][0].animation+" visible: "+board[0][0].visible);
}