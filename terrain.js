/**
 * This creates our grass plane. 
 * computes our grass and its mesh
 *
 * return grass Mesh
 */
function createGrass(){
    var grass = new THREE.PlaneGeometry(20, 1500);
    var grassMaterial = new THREE.MeshPhongMaterial( {color: "rgb(88,151,75)", side: THREE.DoubleSide,
                                                  } );
    var grassMesh = new THREE.Mesh(grass, grassMaterial );
    grassMesh.rotation.set(Math.PI/2,0,0);
    return grassMesh;
}

/**
 * This creates our water plane. 
 * computes our water and its mesh.
 *
 * return waterMesh
 */
function createWater(){

var water = new THREE.PlaneGeometry(2500, 2500 );
var waterMaterial = new THREE.MeshPhongMaterial( {color: "rgb(124,187,206)", 
                                                  side: THREE.DoubleSide,
                                                } );
var waterMesh = new THREE.Mesh(water, waterMaterial );
waterMesh.rotation.set(Math.PI/2,0,0);

return waterMesh;
}