//This is a helper function file
//This file provides implementation of functions to draw entities, pipies and regions
//on the canvas.
//
//"block" in a variable name generally refers to a particular block location
//"blocks" in a variable name reprents the number of blocks

//Returns a grid mesh that can be added to the scene
function createGrid(blocksX, blocksZ) {
    //Creates grid of a particular dimension measure in number of voxel block	
    var step = 50;
    var sizeX = blocksX * step;
    var sizeZ = blocksZ * step;

    var geometry = new THREE.Geometry();

    for ( var i = 0; i <= sizeX; i += step ) {
	geometry.vertices.push( new THREE.Vector3( 0, 0, i ) );
	geometry.vertices.push( new THREE.Vector3(   sizeX, 0, i ) );
    }

    for ( var i = 0; i <= sizeZ; i += step ) {
	geometry.vertices.push( new THREE.Vector3( i, 0, 0 ) );
	geometry.vertices.push( new THREE.Vector3( i, 0, sizeZ ) );
    }

    var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2, transparent: true } );
    var line = new THREE.Line( geometry, material );
    line.type = THREE.LinePieces;

    return line;

}


function createEntity(blocksX, blocksY, locationX, locationY, name) {
    //Adds an entity to the grid
}

function createPipe(blockX, blockY, name, fromEntity, toEntity, length) {
    //Adds a pipe from blockX to blockY
}

function createRegion(blockX, blockY, name) {
    //Adds a region in the global plane

}

function createView(name, entity) {
    //Creates a view for a given entity
}

function executeFlyBy(flyByEquation) {
    //Executes the fly by equation so the camera x, y changes as per eqaution

}


