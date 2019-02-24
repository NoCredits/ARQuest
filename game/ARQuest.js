$( document ).ready(function() {
	go();// Handler for .ready() called.
  });

function Hero(txt,textdiv){
	Hero.prototype.setWeapon=function(weapon){
		this.obj.weapon=weapon;
	}
	Hero.prototype.getWeapon=function(){
		return this.obj.weapon;
	}

	Hero.prototype.showWeapon = function(){
		$("#weapon").html(this.obj.name+" strikes with a "+this.getWeapon());
	}
    this.obj=JSON.parse(txt);
	this.textdiv=textdiv;
    document.getElementById(this.textdiv).innerHTML = this.obj.name + ", " + this.obj.level+ ", " + this.obj.race;
}

function Warrior(txt) {
	Hero.call(this,txt,"player1");
	document.getElementById(this.textdiv).innerHTML += ","+ this.obj.weapon+"<br>Aye!";
}

function Healer(txt) {
	Hero.call(this,txt,"player2");
	document.getElementById(this.textdiv).innerHTML += ","+ this.obj.weapon+"<br>Good day to you!";
}

function go(){

	Warrior.prototype = Object.create(Hero.prototype);
	Healer.prototype = Object.create(Hero.prototype);

	var txt = '{"name":"John", "age":30, "level":2,"race":"Dwarf","weapon":"axe"}';
	let hero1 = new Warrior(txt);
	var txt = '{"name":"Jane", "age":30, "level":7,"race":"Human","weapon":"dagger"}';
	let hero2 = new Healer(txt);

	hero2.setWeapon("Wand");
	hero2.showWeapon();

	
	var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };

			
	var numantras = 5,
		score = 0,
	    antras = [],
		canvas;			

	function gameLoop () {
	
	  var i;
	
	  window.requestAnimationFrame(gameLoop);
	  
	  // Clear the canvas
	  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

	  for (i = 0; i < antras.length; i += 1) {
		  antras[i].update();
		  antras[i].render();
	  }
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.x = 0;
		that.y = 0;
		that.image = options.image;
		that.scaleRatio = 1;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {

		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    that.x,
		    that.y,
		    that.width / numberOfFrames * that.scaleRatio,
		    that.height * that.scaleRatio);
		};
		
		that.getFrameWidth = function () {
			return that.width / numberOfFrames;
		};
		
		return that;
	}
	
	function destroyantra (antra) {
	
		var i;
		
		for (i = 0; i < antras.length; i += 1) {
			if (antras[i] === antra) {
				antras[i] = null;
				antras.splice(i, 1);
				break;
			}
		}
	}
	
	function spawnantra () {
	
		var antraIndex,
			antraImg;
	
		// Create sprite sheet
		antraImg = new Image();	
	
		antraIndex = antras.length;
		
		// Create sprite
		antras[antraIndex] = sprite({
			context: canvas.getContext("2d"),
			width: 1000,
			height: 100,
			image: antraImg,
			numberOfFrames: 10,
			ticksPerFrame: i+4
		});
		
		antras[antraIndex].x = Math.random() * (canvas.width - antras[antraIndex].getFrameWidth() * antras[antraIndex].scaleRatio);
		antras[antraIndex].y = Math.random() * (canvas.height - antras[antraIndex].height * antras[antraIndex].scaleRatio);
		
		antras[antraIndex].scaleRatio = Math.random() * 0.1+0.5 ;
		
		// Load sprite sheet
		antraImg.src = "images/asprite.png";
	}
	
	function getElementPosition (element) {
	
       var parentOffset,
       	   pos = {
               x: element.offsetLeft,
               y: element.offsetTop 
           };
           
       if (element.offsetParent) {
           parentOffset = getElementPosition(element.offsetParent);
           pos.x += parentOffset.x;
           pos.y += parentOffset.y;
       }
       return pos;
    }
	
	function distance (p1, p2) {
	
		var dx = p1.x - p2.x,
			dy = p1.y - p2.y;
			
		return Math.sqrt(dx * dx + dy * dy);
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
			
		for (i = 0; i < antras.length; i += 1) {
		
			// Distance between tap and antra
			dist = distance({
				x: (antras[i].x + antras[i].getFrameWidth() / 2 * antras[i].scaleRatio),
				y: (antras[i].y + antras[i].getFrameWidth() / 2 * antras[i].scaleRatio)
			}, {
				x: loc.x,
				y: loc.y
			});
			
			// Check for tap collision with antra		
			if (dist < antras[i].getFrameWidth() / 2 * antras[i].scaleRatio) {
				antrasToDestroy.push(antras[i]);
			}
		}
		
		// Destroy tapped antras
		for (i = 0; i < antrasToDestroy.length; i += 1) {
		
			score += parseInt(antrasToDestroy[i].scaleRatio * 10, 10);
			destroyantra(antrasToDestroy[i]);	
			setTimeout(spawnantra, 1000);	
		}
		
		if (antrasToDestroy.length) {
			document.getElementById("score").innerHTML = score;
		}
	}
	
	// Get canvas
	canvas = document.getElementById("gameCanvas");
	canvas.width = 500;
	canvas.height = 400;
	
	for (i = 0; i < numantras; i += 1) {
	
		spawnantra();
	}
	
	gameLoop();
	
	canvas.addEventListener("touchstart", tap);
	canvas.addEventListener("mousedown", tap);
}