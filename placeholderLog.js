
var loader = new THREE.TextureLoader();
var texture = loader.load("./woodImg.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1,1);


var logMaterials = [
    new THREE.MeshPhongMaterial({map: texture}), //main trunk 0
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(105,85,86)")}), //ends of trunk 1
];

/**
 * This creates our log. 
 * computes the log and its mesh, 
 * then adds them to the 3D object log.
 *
 * return log
 */
function createPlaceholderLog(texture){
    var log = new THREE.BoxGeometry(4,4,14);

    var logMesh = new THREE.Mesh(log, logMaterials[0]);
    
    return logMesh;
    
}

