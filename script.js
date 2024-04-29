// Initialize Three.js variables for the background
const threeContainer = document.getElementById('three-container');
const threeScene = new THREE.Scene();
const threeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const threeRenderer = new THREE.WebGLRenderer({ alpha: true });
threeRenderer.setSize(window.innerWidth / 2, window.innerHeight / 1); // Adjust size as needed
threeContainer.appendChild(threeRenderer.domElement);

// Load texture for the planet
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/your/texture.jpg'); // Replace 'path/to/your/texture.jpg' with the actual path to your texture image

// Create and position your Three.js objects (e.g., planet mesh)
const geometry = new THREE.SphereGeometry(5, 32, 32); // Adjust radius and segments for smoother surface
const material = new THREE.MeshPhongMaterial({ map: texture }); // Apply texture to material
const planet = new THREE.Mesh(geometry, material);
planet.castShadow = true; // Enable shadow casting
planet.receiveShadow = true; // Enable shadow receiving
threeScene.add(planet);

// Set light for shadow
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Soft white light
threeScene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
dirLight.castShadow = true; // Cast shadow
threeScene.add(dirLight);

// Set camera position
threeCamera.position.z = 15;

// Function to rotate the planet
function rotatePlanet() {
    const radius = 10; // Radius of the circular path
    const speed = 0.0002; // Rotation speed
    const angle = Date.now() * speed; // Calculate current angle based on time
    const x = Math.cos(angle) * radius; // Calculate x position
    const y = Math.sin(angle) * radius; // Calculate z position
    planet.position.set(x, y, 0); // Set planet position
}

// Function to render the Three.js scene
function renderThree() {
    requestAnimationFrame(renderThree);
    rotatePlanet(); // Rotate the planet
    threeRenderer.render(threeScene, threeCamera);
}

// Initial render of the Three.js scene
renderThree();








/////////////////////////////////////////  moouse shadows




