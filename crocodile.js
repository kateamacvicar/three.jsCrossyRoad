var crocMaterials = [
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(65,82,59)")}), //dark green 0
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(54,53,51)")}), //dark dark gray eye 1
    new THREE.MeshPhongMaterial({color:new THREE.Color("grey")}), //white 2
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(39,49,36)")}), //dark green 3
    new THREE.MeshPhongMaterial({color:new THREE.Color("rgb(103,127,95)")}), //light green 4
  
  ];
  
  /**
   * This creates our crocodile. 
   * computes parts of the crocodile and their meshes,
   * then adds them to the 3D object croc.
   *
   * return croc
   */
  function createCrocodile () {
    var croc = new THREE.Object3D();
  
  
    //body
    var crocBody =  new THREE.BoxGeometry(3,5,1);
    var crocBodyMesh = new THREE.Mesh(crocBody, crocMaterials[0]);
    crocBodyMesh.castShadow = true;
    crocBodyMesh.receiveShadow = true;
  
    crocBodyMesh.rotation.set(Math.PI/2,0,0);
    croc.add(crocBodyMesh);
  
    //snout
    var crocSnout =  new THREE.BoxGeometry(3,3,0.5);
    var crocSnoutBottom =  new THREE.BoxGeometry(3,1.75,0.25);
  
    var crocSnoutMesh = new THREE.Mesh(crocSnout, crocMaterials[0]);
    var crocSnoutBottomMesh = new THREE.Mesh(crocSnoutBottom, crocMaterials[4]);
  
    crocSnoutMesh.rotation.set(Math.PI/2,0,0);
    crocSnoutBottomMesh.rotation.set(Math.PI/2,0,0);
  
    crocSnoutMesh.position.set(0,0.5,3);
    crocSnoutBottomMesh.position.set(0,-0.35,3.25);
  
    croc.add(crocSnoutMesh);
    croc.add(crocSnoutBottomMesh);
  
  
    //teeth
    var crocTeeth1=  new THREE.BoxGeometry(0.5,0.75,0.5);
    var crocTeeth2=  new THREE.BoxGeometry(0.5,0.75,0.5);
    var crocTeeth3=  new THREE.BoxGeometry(0.5,0.75,0.5);
    var crocTeeth4=  new THREE.BoxGeometry(0.5,0.75,0.5);
  
    var crocTeethMesh1 = new THREE.Mesh(crocTeeth1, crocMaterials[2]);
    var crocTeethMesh2 = new THREE.Mesh(crocTeeth2, crocMaterials[2]);
    var crocTeethMesh3 = new THREE.Mesh(crocTeeth3, crocMaterials[2]);
    var crocTeethMesh4 = new THREE.Mesh(crocTeeth4, crocMaterials[2]);
  
    crocTeethMesh1.position.set(-1,0,3.75);
    crocTeethMesh2.position.set(1,0,3.75);
    crocTeethMesh3.position.set(-1,0,3);
    crocTeethMesh4.position.set(1,0,3);
  
    croc.add(crocTeethMesh1);
    croc.add(crocTeethMesh2);
    croc.add(crocTeethMesh3);
    croc.add(crocTeethMesh4);
  
  
    //left eye and socket
    var crocLeftEye =  new THREE.BoxGeometry(0.5,0.75,1.5); 
    var crocLeftEyeMesh = new THREE.Mesh(crocLeftEye, crocMaterials[0]);
    crocLeftEyeMesh.position.set(1.25,0.75,1.75);
    croc.add(crocLeftEyeMesh);
  
    var crocLeftEyeBall =  new THREE.BoxGeometry(0.25,0.35,0.5);
    var crocLeftEyeBallMesh = new THREE.Mesh(crocLeftEyeBall, crocMaterials[1]);
    crocLeftEyeBallMesh.position.set(1.5,0.5,1.75);
    croc.add(crocLeftEyeBallMesh);
  
    //right eye and socket
    var crocRightEye =  new THREE.BoxGeometry(0.5,0.75,1.5);
    var crocRightEyeMesh = new THREE.Mesh(crocRightEye, crocMaterials[0]);
    crocRightEyeMesh.position.set(-1.25,0.75,1.75);
    croc.add(crocRightEyeMesh);
  
    var crocRightEyeBall =  new THREE.BoxGeometry(0.25,0.35,0.5);
    var crocRightEyeBallMesh = new THREE.Mesh(crocRightEyeBall, crocMaterials[1]);
    crocRightEyeBallMesh.position.set(-1.5,0.5,1.75);
    croc.add(crocRightEyeBallMesh);
  
    //tail
    var crocTail =  new THREE.BoxGeometry(1.25,0.25,4.5);
    var crocTailTop =  new THREE.BoxGeometry(1.75,0.75,3);
  
    var crocTailMesh = new THREE.Mesh(crocTail, crocMaterials[0]);
    var crocTailTopMesh = new THREE.Mesh(crocTailTop, crocMaterials[0]);
  
    crocTailMesh.position.set(0,-0.3,-4);
    crocTailTopMesh.position.set(0,-0.05,-3); 
  
    croc.add(crocTailMesh);
    croc.add(crocTailTopMesh);
  
    var crocLeftFrontFoot =  new THREE.BoxGeometry(0.5,0.25,0.75);
    var crocLFFootMesh = new THREE.Mesh(crocLeftFrontFoot, crocMaterials[3]);
    crocLFFootMesh.position.set(-1.75,-0.25,1.5);
    croc.add(crocLFFootMesh);
  
    var crocRightFrontFoot =  new THREE.BoxGeometry(0.5,0.25,0.75);
    var crocRFFootMesh = new THREE.Mesh(crocRightFrontFoot, crocMaterials[3]);
    crocRFFootMesh.position.set(1.75,-0.25,1.5);
    croc.add(crocRFFootMesh);
  
  
    var crocLeftBackFoot =  new THREE.BoxGeometry(0.5,0.25,0.75);
    var crocLBFootMesh = new THREE.Mesh(crocLeftBackFoot, crocMaterials[3]);
    crocLBFootMesh.position.set(-1.75,-0.25,-1.5);
    croc.add(crocLBFootMesh);
  
    
    var crocRightBackFoot =  new THREE.BoxGeometry(0.5,0.25,0.75);
    var crocRBFootMesh = new THREE.Mesh(crocRightBackFoot, crocMaterials[3]);
    crocRBFootMesh.position.set(1.75,-0.25,-1.5);
    croc.add(crocRBFootMesh);
  
    //spikes
    var crocSpike1 =  new THREE.BoxGeometry(0.5,0.5,0.75);
    var crocSpike2 =  new THREE.BoxGeometry(0.5,0.5,0.75);
    var crocSpike3 =  new THREE.BoxGeometry(0.5,0.5,0.75);
    var crocSpike4 =  new THREE.BoxGeometry(0.5,0.5,0.75);
    var crocSpike5 =  new THREE.BoxGeometry(0.5,0.5,0.75);
    var crocSpike6 =  new THREE.BoxGeometry(0.5,0.5,0.75);
  
    var crocSpikeMesh1 = new THREE.Mesh(crocSpike1, crocMaterials[3]);
    var crocSpikeMesh2 = new THREE.Mesh(crocSpike2, crocMaterials[3]);
    var crocSpikeMesh3 = new THREE.Mesh(crocSpike3, crocMaterials[3]);
    var crocSpikeMesh4 = new THREE.Mesh(crocSpike4, crocMaterials[3]);
    var crocSpikeMesh5 = new THREE.Mesh(crocSpike5, crocMaterials[3]);
    var crocSpikeMesh6 = new THREE.Mesh(crocSpike6, crocMaterials[3]);
  
    crocSpikeMesh1.position.set(-1.25,0.75,0.5);
    crocSpikeMesh2.position.set(1.25,0.75,0.5);
    crocSpikeMesh3.position.set(-1.25,0.75,-0.75);
    crocSpikeMesh4.position.set(1.25,0.75,-0.75);
    crocSpikeMesh5.position.set(-1.25,0.75,-2);
    crocSpikeMesh6.position.set(1.25,0.75,-2);
  
    croc.add(crocSpikeMesh1);
    croc.add(crocSpikeMesh2);
    croc.add(crocSpikeMesh3);
    croc.add(crocSpikeMesh4);
    croc.add(crocSpikeMesh5);
    croc.add(crocSpikeMesh6);
  
    croc.scale.set(2,2,2);
  
    return croc;
  }
  
  
  