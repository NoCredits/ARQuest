
var speed=3;

var TO_RADIANS = Math.PI/180; 
var viewPortX=0;
var viewPortY=0;


var gridSizeX=15;
var gridSizeY=15;

var gridVisibleX=9;
var gridVisibleY=9;
var gridStartX=4;
var gridStartY=4;
var gridOldStartX=4;
var gridOldStartY=4;
var tileSizeX=50;
var tileSizeY=50;

var heroes=new Array;
var foes=new Array;

var NOWHERE=0;
var MOVENORTH=100;
var MOVEEAST=101;
var MOVESOUTH=102;
var MOVEWEST=103;

var IMGNORTH=3;
var IMGEAST=2;
var IMGSOUTH=0;
var IMGWEST=1;

var wallNorth = new Image();	
var wallEast = new Image();	
var wallSouth = new Image();	
var wallWest = new Image();	
var heroImage = new Image();
var bearImage = new Image();
var werewolvesImage = new Image();

var images = new Array();
var activeHero;
var floorImg = new Image();	

