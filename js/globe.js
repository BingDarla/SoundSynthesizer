var camera, scene, renderer;
var mesh, meshMoon;
var earthTexture, sunTexture, mercuryTexture, venusTexture, marsTexture, jupiterTexture;
var planetTexture = [];
var theta = 0;
var dTheta = 2 * Math.PI / 1000;
var r = 200;
var dx = .01;
var dy = -0.1;
var dz = -.1;
var earthVec = new THREE.Vector3(0, 0, 0);
// if you would like the trigger only happen once in a second.
//set a globle var flag = 100, and in animate(){ if (flag ==0){something, flag = 60}, then flag -=1}






function init() {
  //set camera and scene
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene = new THREE.Scene();

  //set up texture Array
  earthTexture = new THREE.TextureLoader().load('images/earthmap.jpg');
  sunTexture = new THREE.TextureLoader().load('images/sunmap.jpg');
  mercuryTexture = new THREE.TextureLoader().load('images/mercurymap.jpg');
  venusTexture = new THREE.TextureLoader().load('images/venusmap.jpg');
  marsTexture = new THREE.TextureLoader().load('images/marsmap.jpg');
  jupiterTexture = new THREE.TextureLoader().load('images/jupitermap.jpg');
  planetTexture.push(sunTexture);
  planetTexture.push(earthTexture);
  planetTexture.push(mercuryTexture);
  planetTexture.push(venusTexture);
  planetTexture.push(marsTexture);
  planetTexture.push(jupiterTexture);

  //add earth globe
  var earthGeometry = new THREE.SphereGeometry(70, 40, 40);
  var earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture
  });

  earthMaterial.bumpMap = new THREE.TextureLoader().load('images/earthbump.jpg');
  earthMaterial.bumpScale = 0.1;

  mesh = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(mesh);

  //add moon
  var moonGeometry = new THREE.SphereGeometry(20, 20, 20);
  var moonTexture = new THREE.TextureLoader().load('images/moonmap.jpg');
  var moonMaterial = new THREE.MeshPhongMaterial({
    map: moonTexture
  });
  meshMoon = new THREE.Mesh(moonGeometry, moonMaterial);
  meshMoon.position.set(300, 0, 0);
  scene.add(meshMoon);


  // add light , otherwise MeshPhongMaterial is black
  var ambientLight = new THREE.AmbientLight(0xf1f1f1);
  scene.add(ambientLight);
  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 1, 1).normalize();
  scene.add(light);

  //add control


  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //
  window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  mesh.material.needsUpdate = true;

  let index = Math.floor(mesh.rotation.y % 6);
  let flag = index%4;
  console.log(mesh.rotation.y);
  if (flag==3 ){
    mesh.position.y = Math.random()*20;
    mesh.position.x = Math.random()*20;
    mesh.position.z = Math.random()*20;
    console.log(flag);
    BackgroundMusic.crazyMusic();
  }
  mesh.material.map = planetTexture[index];
  mesh.rotation.y += 0.01;

  //Moon orbit
  theta += dTheta;
  meshMoon.position.x = r * Math.cos(theta);
  meshMoon.position.z = r * Math.sin(theta);

  //flyby
  if (camera.position.z < 0) {
    dx *= -1;
  }
  camera.position.x += dx;
  camera.position.y += dy;
  camera.position.z += dz;
  camera.lookAt(earthVec);
  //Flyby reset
  if (camera.position.z < -100) {
    camera.position.set(0, 35, 70);
  }
  camera.lookAt(earthVec);

  renderer.render(scene, camera);
}
