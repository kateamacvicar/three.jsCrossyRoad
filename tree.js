var treeMaterials = [
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(108,125,73)")}), //light green 0
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(90,103,65)")}), //darker green 1
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(96,81,50)")}), //brown trunk 2

    //colors for low tree
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(165,168,92)")}), //light yellow 3
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(132,119,74)")}), //darker yellow 4
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(115,80,51)")}), //light trunk 5

];

/**
 * This creates our small tree. 
 * computes tree trunk and tree top, then adds them to the 3D object tree.
 *
 * return tree
 */
function createTreeSmall(){
 var tree = new THREE.Object3D();

 var trunk = new THREE.BoxGeometry(4,12,4);
 var trunkMesh = new THREE.Mesh(trunk, treeMaterials[2]);
 tree.add(trunkMesh);

 var treeBottom = new THREE.BoxGeometry(11,5,11);
 var treeBottomMesh = new THREE.Mesh(treeBottom, treeMaterials[1]);
 treeBottomMesh.position.set(0,2,0);
 tree.add(treeBottomMesh);


 var treeTop = new THREE.BoxGeometry(6,3,6);
 var treeTopMesh = new THREE.Mesh(treeTop, treeMaterials[0]);
 treeTopMesh.position.set(0,6,0);
 tree.add(treeTopMesh);

 return tree;
}

/**
 * This creates our low tree. 
 * computes tree trunk and tree top and their meshes,
 *  then adds them to the 3D object tree.
 *
 * return tree
 */
function createTreeLow(){
 var tree = new THREE.Object3D();

 var trunk = new THREE.BoxGeometry(3.5,9,3.5);
 var trunkMesh = new THREE.Mesh(trunk, treeMaterials[5]);
 tree.add(trunkMesh);

 var treeBottom = new THREE.BoxGeometry(10,4,10);
 var treeBottomMesh = new THREE.Mesh(treeBottom, treeMaterials[4]);
 treeBottomMesh.position.set(0,4,0);
 tree.add(treeBottomMesh);


 var treeTop = new THREE.BoxGeometry(6,2,6);
 var treeTopMesh = new THREE.Mesh(treeTop, treeMaterials[3]);
 treeTopMesh.position.set(0,6.5,0);
 tree.add(treeTopMesh);

 return tree;
}

/**
 * This creates our big tree. 
 * computes tree trunk, branches, and tree top, then adds them to the 3D object tree.
 *
 * return  tree
 */
function createTreeBig(){
    var tree = new THREE.Object3D();

    var trunk = new THREE.BoxGeometry(4,13,4);
    var trunkMesh = new THREE.Mesh(trunk, treeMaterials[5]);
    tree.add(trunkMesh);

    var branch1 = new THREE.BoxGeometry(1,1,3); //right side, horizontal branch
    var branch1Mesh = new THREE.Mesh(branch1, treeMaterials[5]);
    branch1Mesh.position.set(0,0,3.5);
    tree.add(branch1Mesh);

    var branch2 = new THREE.BoxGeometry(1,3,1); //right side, vertical branch
    var branch2Mesh = new THREE.Mesh(branch2, treeMaterials[5]);
    branch2Mesh.position.set(0,2,4.5);
    tree.add(branch2Mesh);

    var branch3 = new THREE.BoxGeometry(1,1,3); //left side, horizontal branch
    var branch3Mesh = new THREE.Mesh(branch3, treeMaterials[5]);
    branch3Mesh.position.set(0,0,-3.5);
    tree.add(branch3Mesh);

    var branch4 = new THREE.BoxGeometry(1,3,1); //left side, vertical branch
    var branch4Mesh = new THREE.Mesh(branch4, treeMaterials[5]);
    branch4Mesh.position.set(0,2,-4.5); 
    tree.add(branch4Mesh);
   
    var treeBottom = new THREE.BoxGeometry(12,7,12);
    var treeBottomMesh = new THREE.Mesh(treeBottom, treeMaterials[4]);
    treeBottomMesh.position.set(0,5,0);
    tree.add(treeBottomMesh);
   
   
    var treeTop = new THREE.BoxGeometry(8,2,8);
    var treeTopMesh = new THREE.Mesh(treeTop, treeMaterials[3]);
    treeTopMesh.position.set(0,9,0);
    tree.add(treeTopMesh);
   
    return tree;
}

