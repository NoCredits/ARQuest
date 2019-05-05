
var speed=3;
var scaleFactor=1;
var TO_RADIANS = Math.PI/180; 
var canvasSizeX=450;
var canvasSizeY=450;

var activeCreatureX=0;
var activeCreatureY=0;
var translateX=0;
var translateY=0;

var gridSizeX=29;
var gridSizeY=29;

var tileSizeX=50;
var tileSizeY=50;
var mousePos;

var heroes=new Array;
var foes=new Array;
var items=new Array;

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
var floorImg = new Image();	

