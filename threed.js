var scene, camera, renderer, cube;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')});
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  camera.position.z = 5;
  
  fetchData();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function fetchData() {
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      cube.rotation.x = data.ax;
      cube.rotation.y = data.ay;
      setTimeout(fetchData, 100); // Fetch new data every 100 ms
    })
    .catch(err => console.error('Error fetching data:', err));
}
