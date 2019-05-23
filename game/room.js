class Room {
    constructor(json) {
        var obj = JSON.parse(json);
        if (!obj.hasOwnProperty('region')) obj.region = -1;

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

function initialiseRooms(rows, columns) {
    // Board Logic
    let roomMaxCount = 50000;
    let roomWallMinLength = 3;
    let roomWallMaxLength = 10;
    let extraConnectorChance = 10;

    // Make a copy of the map full of not-rooms.
    let map = [];
    for (var i = 0; i < rows; i++) {
        map[i] = [];
        for (j = 0; j < columns; j++) {
            map[i][j] = -1;
        }
    }

    // And the array of created Rooms:
    let roomsArray = [];

    // Up, Down, Left, Right
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Add X scattered rooms, if a room overlaps another room it is discarded
    for (var i = 0; i < roomMaxCount; i++) {
        // generate a room
        newRoom = createRoom(roomWallMinLength, roomWallMaxLength, i);

        // add a random map position
        newPos = randomMapPosition(rows, columns);
        newRoom.posX = newPos[0];
        newRoom.posY = newPos[1];

        // validate the new room before adding it
        newRoomValid = validateRoom(newRoom, map)

        // and lastly add the new room to roomsArray if it is a valid room

        //        if (newRoomValid = true) { roomsArray.push(newRoom); }
        if (newRoomValid == true) { roomsArray.push(newRoom); }

    }
    //console.log("map that was used: ", map);

    // create mazes in anything unused, but do not let it touch any rooms

    // walk through the map and find two unconnected tiles separated by 1 tile (=connectors)

    // choose a connector at random and open them (place door)
    // discard all other connectors for that room, except with a small chance of persisting(=avoid perfect maze)

    // remove some dead-ends (open tile that is closed on three sides)

    //console.log("lengoth of roomsAray to be returned: ", roomsArray.length);
    //console.log("roomsAray to be returned: ", roomsArray);
    //console.log("grab some random rooms#1: ", roomsArray[25]);
    //console.log("grab some random rooms#2: ", roomsArray[75]);
    //console.log("grab some random rooms#3: ", roomsArray[125]);
    //console.log("grab some random rooms#4: ", roomsArray[1250]);
    //console.log("grab some random rooms#5: ", roomsArray[12500]);
    return roomsArray;
};

function createRoom(minLen, maxLen, region) {
    let dimX = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
    let dimY = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;

    let roomProp = '{ \
                "dimX": ' + dimX + ', \
                "dimY": ' + dimY + ', \
                "region": ' + region + ' \
            }';
    return new Room(roomProp);
}

function validateRoom(room, map) {
    let dimX = room.dimX;
    let dimY = room.dimY;
    let posX = room.posX;
    let posY = room.posY;
    let region = room.region;

    let validX = false;
    let validY = false;
    let validPos = true;

    // is posX + dimX less than #rows?
    // is posY + dimY less than #columns?
    if (dimX + posX < rows) { validX = true }
    if (dimY + posY < columns) { validY = true }

    // is the room at least 1 tile away from existing rooms?
    if (validX && validY) {
        for (var i = posX; i < posX + dimX + 2 && i < rows; i++) {
            for (var j = posY; j < posY + dimY + 2 && j < columns; j++) {
                if (map[i][j] != -1) { validPos = false }
            }
        }
    }
    if (validPos = true) {
        for (var i = posX; i < posX + dimX + 1 && i < rows; i++) {
            for (var j = posY; j < posY + dimY + 1 && j < columns; j++) {
                map[i][j] = region
            }
        }
    }
    return validX && validY && validPos;
};

function randomMapPosition(rows, columns) {
    let posX = Math.floor(Math.random() * rows);
    let posY = Math.floor(Math.random() * columns);
    return [posX, posY];
}

// const rows = 100;
// const columns = 200;
// initialiseRooms(rows, columns)
