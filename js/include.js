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
function createEntity(blocksX, blocksY, blocksZ, locationX, locationY, locationZ, label) {
    //Adds an entity to the grid
    var cubeGeo, cubeMaterial;
    var blockSize = 50;
    var voxelPosition = new THREE.Vector3();
    cubeGeo = new THREE.BoxGeometry( blockSize * blocksX, blockSize * blocksY, blockSize * blocksZ );
    cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c, ambient: 0x00ff80 } );
    // Lookout Colors 
    //cubeMaterial = new THREE.MeshLambertMaterial( { color: 0x66E066, ambient: 0x00ff80 } );
    cubeMaterial.ambient = cubeMaterial.color;

    var voxel = new THREE.Mesh( cubeGeo, cubeMaterial );
    voxel.position.x = locationX * 50 + (blockSize * blocksX)/2;
    voxel.position.y = locationY + (blockSize * blocksY)/2;
    voxel.position.z = locationZ * 50 + (blockSize * blocksZ)/2;
    voxel.matrixAutoUpdate = false;
    voxel.updateMatrix();
    var labelMesh = new THREE.Mesh(new THREE.TextGeometry(label,
							{size: 12,
							 height: 4,
							 curveSegments: 0
							}), new THREE.MeshNormalMaterial());
    labelMesh.lookAt(camera.position);
    labelMesh.position.x = voxel.position.x;
    labelMesh.position.y = blocksY * blockSize + 50;//voxel.position.y + 50;
    labelMesh.position.z = voxel.position.z;
	
//    objects.push( multi );
    return [voxel, labelMesh];
}

//Returns an array of cylindermesh and labelmesh
function createPipeUsingCylinder(locationStart, locationEnd, label) {
    //Adds a pipe from locationX to locationY
    var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 200, 50, 50, false), 
				    new THREE.MeshBasicMaterial({ color: 0xff0000}));
    cylinder.overdraw = true;
    // The rotation will make sure that we have a diagram where blocks are added on x axis
    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = Math.PI / 2; 								
    cylinder.visible = true;
    cylinder.position.x = (locationStart.x - locationEnd.x)/2;
    cylinder.position.y = (locationStart.y - locationEnd.y)/2;
    cylinder.position.z = (locationStart.z - locationEnd.z)/2;
	
    var labelMesh = new THREE.Mesh(new THREE.TextGeometry(label,
							{size: 12,
							 height: 4,
							 curveSegments: 0
							}), new THREE.MeshNormalMaterial());
    labelMesh.lookAt(camera.position);
    labelMesh.position.x = cylinder.position.x;
    labelMesh.position.y = cylinder.position.y + 50;
    labelMesh.position.z = cylinder.position.z;
							
    return [cylinder, labelMesh];
}

//Returns an array of lineMesh and labelMesh
//This is the preferred method of generating a line
//locationStart are Vectors
function createPipe(startVector, endVector, label) {
    var lineGeo = new THREE.Geometry();
    lineGeo.vertices.push(startVector);
    lineGeo.vertices.push(endVector);
    var lineMaterial = new THREE.LineBasicMaterial({
			color: 0xff0000,
			linewidth: 50 
		    });
    var lineMesh = new THREE.Line(lineGeo, lineMaterial); 
	
    var labelMesh = new THREE.Mesh(new THREE.TextGeometry(label,
							{size: 12,
							 height: 4,
							 curveSegments: 0
							}), new THREE.MeshNormalMaterial());
    labelMesh.lookAt(camera.position);
    labelMesh.position.x = Math.abs(endVector.x + startVector.x) / 2;
    labelMesh.position.y = Math.abs(endVector.y + startVector.y) / 2 + 25;
    labelMesh.position.z = Math.abs(endVector.z + startVector.z) / 2;
    if(labelMesh.position.x == 0) {
	labelMesh.position.x = endVector.x;
    }
    if(labelMesh.position.y == 25) {
	labelMesh.position.y = endVector.y + 25;
    }
    if(labelMesh.position.z == 0) {
	labelMesh.position.z = endVector.z;
    }
    return [lineMesh, labelMesh];
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


