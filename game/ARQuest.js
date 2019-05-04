var board;


var myVar;
	

$( document ).ready(function() {

	createHeros();
	createFoes();

	playArea=create2DBoard(gridSizeX,gridSizeY);
	
	go();
  });

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



function go(){

	setUpBoard();

	function gameLoop () {
		updateBoard();
	}
	
	

	
	canvas = document.getElementById("gameCanvas");
	canvas.addEventListener("click", function (evt) {
		mousePos = getMousePos(canvas, evt);
		//alert(mousePos.x + ',' + mousePos.y);
		mousePos.x=Math.round(mousePos.x);
		mousePos.y=Math.round(mousePos.y);
		rightClick();
	}, false);
	
	canvas.width = canvasSizeX;
	canvas.height = canvasSizeY;

	
	myVar = setInterval(gameLoop, 33);

}