$( document ).ready(function() {

	createHeros();
	//board();

	go();// Handler for .ready() called.
  });


function go(){

//	createHeros();
//	board();
		

	function gameLoop () {
		board();
	
	}
	
	
	function tap (e) {
	
		var i,
			loc = {},
			dist,
			antrasToDestroy = [];
			pos = getElementPosition(canvas),
			tapX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX,
			tapY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY,
			canvasScaleRatio = canvas.width / canvas.offsetWidth;

		loc.x = (tapX - pos.x) * canvasScaleRatio;
		loc.y = (tapY - pos.y) * canvasScaleRatio;
			
	}
	
	// Get canvas
	canvas = document.getElementById("gameCanvas");
	canvas.width = 500;
	canvas.height = 400;
	
	//gameLoop();
	
	canvas.addEventListener("touchstart", tap);
	canvas.addEventListener("mousedown", tap);
	setInterval(gameLoop, 33); 	
}