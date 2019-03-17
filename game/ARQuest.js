var board;


var myVar;
	

$( document ).ready(function() {

	createHeros();
	playArea=create2DBoard(gridSizeX,gridSizeY);

	go();
  });


function go(){

	setUpBoard();

	function gameLoop () {
		updateBoard();
	}
	
	
	function tap (e) {
	
		var loc = {};
			pos = getElementPosition(canvas),
			tapX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX,
			tapY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY,
			canvasScaleRatio = canvas.width / canvas.offsetWidth;

		loc.x = (tapX - pos.x) * canvasScaleRatio;
		loc.y = (tapY - pos.y) * canvasScaleRatio;
			
	}
	
	canvas = document.getElementById("gameCanvas");
	canvas.width = 450;
	canvas.height = 450;

	
	myVar = setInterval(gameLoop, 33);

}