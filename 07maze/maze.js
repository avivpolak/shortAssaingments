function createMaze(levels) {
    let Rums = numOfRums(levels); //thr number of rooms
    let maze = [];
    for (let i = 2; i < Rums + 2; i++) {
        let rand = Math.floor(Math.random() * levels);
        let newRoom = [];
        newRoom[i] = i;
        let roomToInsert = maze;
        //console.log(roomToInsert.length);
        while (roomToInsert.length > levels) {
            roomToInsert = roomToInsert[rand];
        }

        roomToInsert[i] = newRoom;
    }
    //console.log(maze);
}
function numOfRums(levels) {
    let count = 1;
    let rums = 0;
    for (let i = 0; i < levels; i++) {
        count *= 2;
        rums += count;
        //console.log(rums);
    }
    return rums;
}
console.log(numOfRums(5));
createMaze(5);
