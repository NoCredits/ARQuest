class tile{

    constructor (json){
        var obj=JSON.parse(json);
        if( !obj.hasOwnProperty('north')) obj.north=0;
        if( !obj.hasOwnProperty('east')) obj.east=0;
        if( !obj.hasOwnProperty('south')) obj.south=0;
        if( !obj.hasOwnProperty('west')) obj.west=0;
        if( !obj.hasOwnProperty('tile')) obj.type=0;
        if( !obj.hasOwnProperty('animation')) obj.animation=0;

        this.tile=obj.tile;
        this.north=obj.north;
        this.east=obj.east;
        this.south=obj.south;
        this.west=obj.west;
        this.animation=obj.animation;
        
    }

}