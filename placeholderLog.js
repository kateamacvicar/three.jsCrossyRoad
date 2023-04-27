var logMaterials = [
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(120,68,66)")}), //main trunk 0
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(105,85,86)")}), //ends of trunk 1
];

/**
 * This creates our log. 
 * computes the log and its mesh, 
 * then adds them to the 3D object log.
 *
 * return log
 */
function createPlaceholderLog(){
    var log = new THREE.Object3D();

    var loggy = new THREE.BoxGeometry(4,4,14);
    var logMesh = new THREE.Mesh(loggy, logMaterials[0]);
    log.add(logMesh);
    
    return log;
}

/**
 * This function animates the logs. 
 * iterates through the log array and updates their z position. 
 * If they get to a certain z position- off screen- then we reset their
 * z position to the leftmost z coordinate of the screen. 
 *
 */
function logMove(){
    for(var i = 0; i < logArray.length; i++){
          logArray[i].position.z += 0.05;
 
       if(logArray[i].position.z >= 65){ 
             logArray[i].position.z = -60;
          } 
       }
 }