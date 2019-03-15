var board;
var gridSizeX=25;
var gridSizeY=25;
var gridStartX=4;
var gridStartY=4;
var tileSizeX=50;
var tileSizeY=50;


var myVar;
var wallNorth = new Image();	
var wallEast = new Image();	
var wallSouth = new Image();	
var wallWest = new Image();	
var heroImage = new Image();

var floorImg = new Image();	

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