class Room {
    constructor(json) {
        var obj = JSON.parse(json);
        if (!obj.hasOwnProperty('region')) obj.region = 0;

        // posX and posY are the coordinates for the upper left corner
        this.posX = obj.posX;
        this.posY = obj.posY;
        // size in dimension X and Y
        this.dimX = obj.dimX;
        this.dimY = obj.dimY;

        // used to initialise the map
        this.region = obj.region

    }
}

function createArray(rows, columns) {
    let array = [];
    for (var i = 0; i < rows; i++) {
        array.push([]);
        for (var j = 0; j < columns; j++) {
            array[i].push(1);
        }
    }
    return array;
}

function createBoard(rows, columns) {
    let board = createArray(rows, columns);

    // Board Logic
    let roomMaxCount = 200;
    let roomWallMinLength = 3;
    let roomWallMaxLength = 10;
    let extraConnectorChance = 10;

    // Up, Down, Left, Right
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Add X scattered rooms, if a room overlaps another room it is discarded
    for (var i = 0; i < roomMaxCount; i++) {
        newRoom = createRoom(roomWallMinLength, roomWallMaxLength, i);
        newPos = randomMapPosition;
        // should we add the rooms directly on to the board? Or have room objects and store them in an array?

        let overlaps = false;
        // use newPos as top left corner of newRoom
        // if newRooms distance to an existing room would be <= 0 then discard it



    }

    // loop through the rooms and discard the room if it overlaps with an earlier one

    // create mazes in anything unused, but do not let it touch any rooms

    // walk through the map and find two unconnected tiles separated by 1 tile (=connectors)

    // choose a connector at random and open them (place door)
    // discard all other connectors for that room, except with a small chance of persisting(=avoid perfect maze)

    // remove some dead-ends (open tile that is closed on three sides)

    return board;
};

function createRoom(minLen, maxLen, region) {

    let dimX = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
    let dimY = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
    let region = region;

    let roomProp = {
        "dimX": dimX,
        "dimY": dimY,
        "region": region,
    }

    // what about position?

    return new Room(roomProp);


    // leftovers from when createRoom updated the board directly -- remove?
    //
    //let array = [];
    //for (var i = 0; i < dimX; i++) {
    //    array.push([]);
    //    for (var j = 0; j < dimY; j++) {
    //        array[i].push(0);
    //    }
    //}
    //return array;

}

function randomMapPosition(rows, columns) {
    let posX = Math.floor(Math.random() * rows);
    let posY = Math.floor(Math.random() * columns);

    return [posX, posY];
}

function checkOverlaps(newRoom, newPos, board) {
    // add logic to calculate room distances
}