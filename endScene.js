var houseMaterials = [
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(120,68,66)")}), //brown 0
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(36,20,20)")}), //darker brown 1

];

/**
 * This creates the house in our end scene. 
 * computes the parts of the house and their meshes,
 * then adds them to the 3D object house.
 *
 * return house
 */
function createHouse(){
    var house = new THREE.Object3D();

    var houseBody = new THREE.BoxGeometry(7,20,10);
    var houseBodyMesh = new THREE.Mesh(houseBody, houseMaterials[0]);
    house.add(houseBodyMesh);
    
    var roof = new THREE.ConeGeometry(8,8,16);
    var roofMesh = new THREE.Mesh(roof, houseMaterials[1]);
    roofMesh.position.set(0,12.5,0);
    house.add(roofMesh);

    var windowCrossVer = new THREE.BoxGeometry(0.5,3,0.5);
    var windowCrossVerMesh = new THREE.Mesh(windowCrossVer, houseMaterials[1]);
    windowCrossVerMesh.position.set(-5,6,0);
    house.add(windowCrossVerMesh);

    var windowCrossHor = new THREE.BoxGeometry(0.5,0.5,3);
    var windowCrossHorMesh = new THREE.Mesh(windowCrossHor, houseMaterials[1]);
    windowCrossHorMesh.position.set(-5,6,0);
    house.add(windowCrossHorMesh);

    var windowLeft = new THREE.BoxGeometry(0.5,3,0.5);
    var windowLeftMesh = new THREE.Mesh(windowLeft, houseMaterials[1]);
    windowLeftMesh.position.set(-5,6,-1.5);
    house.add(windowLeftMesh);

    var windowRight = new THREE.BoxGeometry(0.5,3,0.5);
    var windowRightMesh = new THREE.Mesh(windowRight, houseMaterials[1]);
    windowRightMesh.position.set(-5,6,1.5);
    house.add(windowRightMesh);

    var windowTop = new THREE.BoxGeometry(0.5,0.5,3.5);
    var windowTopMesh = new THREE.Mesh(windowTop, houseMaterials[1]);
    windowTopMesh.position.set(-5,7.5,0);
    house.add(windowTopMesh);

    var windowBot = new THREE.BoxGeometry(0.5,0.5,3.5);
    var windowBotMesh = new THREE.Mesh(windowBot, houseMaterials[1]);
    windowBotMesh.position.set(-5,4.5,0);
    house.add(windowBotMesh);

    return house;
}



