var board;
var myVar;
var wallImg = new Image();	
var floorImg = new Image();	

$( document ).ready(function() {

	createHeros();
	board=create2DBoard(25,25);

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

	
	myVar = setInterval(gameLoop, 1000);

}