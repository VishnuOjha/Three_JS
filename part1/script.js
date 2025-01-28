

// for craeting a scene we need 3 things
const scene = new THREE.Scene();

// creating a geometry
const geometrey = new THREE.BoxGeometry(2, 2, 2);

//creating material
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

// creating a mesh
const mesh = new THREE.Mesh(geometrey, material);

// ading mesh to the scene
scene.add(mesh);

// setting the size of the scene
const size = {
    width: 800,
    height: 600
}

// creating a camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);

// adjusting the camera position
camera.position.z = 4;
camera.position.x = 2;
// adding camera to the scene   
scene.add(camera);


//selecing the canvas
const targetCanvas = document.querySelector('.webgl');
//creating a renderer   
const renderer = new THREE.WebGLRenderer({ canvas: targetCanvas });
//setting the size of the renderer
renderer.setSize(size.width, size.height);

//rendering the scene
renderer.render(scene, camera);