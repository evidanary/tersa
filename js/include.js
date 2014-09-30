//This is a helper function file
//This file provides implementation of functions to draw entities, pipies and regions
//on the canvas.
//
//"block" in a variable name generally refers to a particular block location
//"blocks" in a variable name reprents the number of blocks

//Returns a grid mesh that can be added to the scene
//Grid mesh is located in +x, +y, +z quadrant
function createGrid(blocksRowsColumns) {
    //Creates grid of a particular dimension measure in number of voxel block	
    var step = 50;
    var blocksX = blocksRowsColumns, blocksZ = blocksRowsColumns;
    var sizeX = blocksX * step;
    var sizeZ = blocksZ * step;

    var geometry = new THREE.Geometry();

    for ( var i = 0; i <= sizeX; i += step ) {
	geometry.vertices.push( new THREE.Vector3( 0, 0, i ) );
	geometry.vertices.push( new THREE.Vector3( sizeX, 0, i ) );
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

//Returns a cube mesh at the given location
function createEntity(blocksX, blocksY, locationX, locationY, locationZ, label) {
    //Adds an entity to the grid
    var cubeGeo, cubeMaterial;
    var voxelPosition = new THREE.Vector3();
    cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
    cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c, ambient: 0x00ff80 } );
    cubeMaterial.ambient = cubeMaterial.color;

    var voxel = new THREE.Mesh( cubeGeo, cubeMaterial );
    voxel.position.x = locationX * 50 + 25;
    voxel.position.y = locationY * 50 + 25;
    voxel.position.z = locationZ * 50 + 25;
    voxel.matrixAutoUpdate = false;
    voxel.updateMatrix();
    var labelMesh = new THREE.Mesh(new THREE.TextGeometry(label,
							{size: 12,
							 height: 4,
							 curveSegments: 0
							}), new THREE.MeshNormalMaterial());
    labelMesh.lookAt(camera.position);
    labelMesh.position.x = voxel.position.x;
    labelMesh.position.y = voxel.position.y + 50;
    labelMesh.position.z = voxel.position.z;
	
    var multi = new THREE.Object3D();	   
    multi.add(voxel);
    multi.add(labelMesh);
//    objects.push( multi );
    return multi;
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


