
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
  
  


function board(){
    var board=create2DBoard(25,25);

    canvas = $('#boardCanvas');
	canvas.width = 500;
    canvas.height = 400;
    $('#info').html("tile[0][0] contains: <br>tile:"+board[0][0].tile+" animation:"+board[0][0].animation+" visible: "+board[0][0].visible);
}