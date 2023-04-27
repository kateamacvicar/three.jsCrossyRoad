//material array
var duckMaterials = [
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(43,77,31)")}), //dark green 0
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(66,59,46)")}), //dark gray 1
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(93,87,76)")}), //light gray 2
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(172,119,73)")}), //orange feet and legs 3
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(220,189,108)")}), //light orange beak 4
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(54,53,51)")}), //dark dark gray eye 5
];

/**
 * This creates our duck. 
 * computes the parts of the duck and their meshes, 
 * then adds them to the 3D object duck.
 *
 * return duck
 */
function createDuck() {
    var duck = new THREE.Object3D(); //parent object

    var duckHead = new THREE.BoxGeometry(2,2,2);
    var duckHeadMesh = new THREE.Mesh(duckHead, duckMaterials[0]);
    duck.add(duckHeadMesh);

    var beak = new THREE.BoxGeometry(0.5,0.5,1);
    var beakMesh = new THREE.Mesh(beak, duckMaterials[4]);
    beakMesh.rotation.set(0,Math.PI/2,0);
    beakMesh.position.set(1.5,-0.25,0);
    duck.add(beakMesh);

    var leftEye = new THREE.BoxGeometry(0.5,0.5,0.5);
    var leftEyeMesh = new THREE.Mesh(leftEye, duckMaterials[5]);
    leftEyeMesh.position.set(0,0,-1);
    duck.add(leftEyeMesh);

    var rightEye= new THREE.BoxGeometry(0.5,0.5,0.5);
    var rightEyeMesh = new THREE.Mesh(rightEye, duckMaterials[5]);
    rightEyeMesh.position.set(0,0,1);
    duck.add(rightEyeMesh);

    var duckBody = new THREE.BoxGeometry(3.5,2,2);
    var duckBodyMesh = new THREE.Mesh(duckBody, duckMaterials[1]);
    duckBodyMesh.position.set(-0.75,-2,0);
    duck.add(duckBodyMesh);

    var leftWing = new THREE.BoxGeometry(2,1,1);
    var leftWingMesh = new THREE.Mesh(leftWing, duckMaterials[2]);
    leftWingMesh.position.set(-1,-2.5,-1);
    duck.add(leftWingMesh);

    var rightWing = new THREE.BoxGeometry(2,1,1); 
    var rightWingMesh = new THREE.Mesh(rightWing, duckMaterials[2]);
    rightWingMesh.position.set(-1,-2.5,1);
    duck.add(rightWingMesh);

    var leftLeg= new THREE.BoxGeometry(0.3,1,0.3);
    var leftLegMesh = new THREE.Mesh(leftLeg, duckMaterials[3]);
    leftLegMesh.position.set(-0.5,-3.5,-0.5);
    duck.add(leftLegMesh);

    var leftFoot= new THREE.BoxGeometry(1,0.3,1);
    var leftFootMesh = new THREE.Mesh(leftFoot, duckMaterials[3]);
    leftFootMesh.position.set(-0.5,-4,-0.75);
    duck.add(leftFootMesh);

    var rightLeg= new THREE.BoxGeometry(0.3,1,0.3);
    var rightLegMesh = new THREE.Mesh(rightLeg, duckMaterials[3]);
    rightLegMesh.position.set(-0.5,-3.5,0.5);
    duck.add(rightLegMesh);

    var rightFoot= new THREE.BoxGeometry(1,0.3,1);
    var rightFootMesh = new THREE.Mesh(rightFoot, duckMaterials[3]);
    rightFootMesh.position.set(-0.5,-4,0.75);
    duck.add(rightFootMesh);

    duck.scale.set(0.7,0.7,0.7);

    return duck;
}



