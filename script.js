//story data
const markerStories = {
    'marker-scar-rightknee': {
        title: 'scar; right-knee',
        content: 'My dad taught me many things. One of them was him teaching me how to ride a bike. Often he would take me to <a href="https://ko.wikipedia.org/wiki/%EA%B3%B5%EB%A6%89%EC%B2%9C" target="blank">trail along the lake</a> for a bike ride. It was intense. Everytime I was falling behind, he kept convincing me that I am not that weak. One day I fell from the bike and hurt my knee BAD. It was bleeding a lot and dad took me to hospital right away. I had to see a doctor once a week for a month. Now the scar mostly faded away and I honestly don’t even remember which knee it was, but my dad still says sorry for that moment that he should have been more attentive and not pushed me too hard. ',
        position: {top: '58%', right: '30px'}
    },
    'marker-scar-leftknee': {
        title: 'scar; left-knee',
        content: 'I have scars on both of my knees but I can’t remember which is from which. I think I always get it mixed up. One’s from riding a bike with my dad and one’s from middle school gym class. My knee shows me I have been a competitive kid since young.',
        position: {top: '75%', right: '1000px'}
    },
    'marker-scar-bellybutton': {
        title: 'scar; first-ever-scar',
        content: '<a href="https://en.wikipedia.org/wiki/Navel" target="_blank">*</a>',
        position: {top: `50%`, right: `400px`}
    },
    'marker-mole-butt': {
        title: 'mole; butt',
        content: 'I had my <a href="https://en.wikipedia.org/wiki/Mongolian_spot">mongolian spot</a> for a long time. Some people say that theirs faded during their childhood, but I remember noticing mine even until my high school years. Now it is almost gone I am sure, I can’t quite distinguish where it is, but I still like to believe that they are still there, not yet faded.',
        position: {top: '30%', right: '100px'}
    },
    'marker-mole-leftbackneck': {
        title: 'mole; left-back-neck',
        content: 'I have a mole right behind my neck. In Korea, especially when I was young, there was a myth, “if there’s a person without a mole on the back of one’s neck, that person’s a ghost.” My dad also has a mole here. ',
        position: {top: '30%', right: '850px'}
    },
    'marker-mole-lefthandpalm': {
        title: 'mole; left-hand-palm',
        content: 'I honestly don’t know if this counts as a mole or a scar. When I was in elementary school, I somehow got a bit of mechanical pencil lead slightly poked me through my palm and it just stayed as a mole.',
        position: {top: '50%', right: '900px'}
    },
    'marker-mole-rightbackarm': {
        title: 'mole; right-back-arm',
        content: 'I actually have two moles here. And did you know, if you pinch right between two moles, you can make an elephant? <br> <video id = "two-moles-elephant" width="160" autoplay loop muted> <source src="assets/videos/two-moles-elephant.mp4" type="video/mp4"> </video> <br> Welp. If you don’t see it, that’s on you.',
        position: {top: '60%', right: '120px'}
    },
    'marker-mole-righthand': {
        title: 'mole; right-hand',
        content: 'I have a birthmark on my right hand. Dad told me <br><p id="text-decor-01">he would never lose me cuz he can always check right hands for birthmarks. </p> <p>Now that I am older and I can see my birthmark has become larger and faded then when I was younger.</p>',
        position: {top: '62%', right: '200px'}
    },
    'marker-mole-rightundereye': {
        title: 'mole; right-under-eye',
        content: 'this is my fav <3',
        position: {top: '40%', right: '430px'}
    },
    'marker-tattoo-leftchest': {
        title: 'tattoo; left-chest',
        content: '<img src="assets/images/water.png">',
        position: {top: '10%', right: '430px'}
    },
    'marker-scar-leftarm': {
        title: '',
        content: '<a href="https://en.wikipedia.org/wiki/BCG_vaccine" target="blank"> BCG Vaccines </a> <br><br> <input type="radio"><input type="radio"><input type="radio"><br><input type="radio"><input type="radio"><input type="radio"><br><input type="radio"><input type="radio"><input type="radio"><br>,<br><input type="radio"><input type="radio"><input type="radio"><br><input type="radio"><input type="radio"><input type="radio"><br><input type="radio"><input type="radio"><input type="radio">',
        position: {top: '10%', right: '900px'}
    },
    'marker-tattoo-leftwrist': {
        title: 'tattoo; left-wrist',
        content: 'One night, my friend and I got bored and stupid, we decided to get pick&poke tattoo with a crappy kit. I drew a little face on my left wrist, thinking it would fade away – my friend told me so – but of course it didn’t. I couldn’t get caught with a tattoo by my dad, I had to get a laser removal. It was the most expensive shit I ever paid for to make up my own mistake.',
        position: {top: '33%', right: '980px'}
    },
    'marker-piercing-leftear01': {
        title: '',
        content: '<iframe width="360" height="200" src="https://www.youtube.com/embed/MAdQyx88k7E?si=eDlwso-qUhn4q7c7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
        position: {top: '63%', right: '875px'}
    },
    'marker-piercing-leftear02': {
        title: '',
        content: '<iframe width="240" height="135" src="https://www.youtube.com/embed/zd_hIT6YUpw?si=Ev4SqJkq9NzdfZlc&amp;start=106" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
        position: {top: '3%', right: '850px'}
    },
    'marker-piercing-leftear03': {
        title: '',
        content: '<iframe width="160" height="90" src="https://www.youtube.com/embed/pz7OMGzoYaw?si=hHoXyHPJArbfI08l&amp;start=56" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
        position: {top: '55%', right: '1200px'}
    },
    'marker-piercing-rightear01': {
        title: '',
        content: '<iframe width="240" height="135" src="https://www.youtube.com/embed/xsNmRhiahKs?si=B4R7CEH0XgKEcnqD&amp;start=144" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        position: {top: '15%', right: '23px'}
    },
    'marker-piercing-rightear02': {
        title: '',
        content: '<iframe width="360" height="200" src="https://www.youtube.com/embed/92yGX34mqUs?si=7tbAmxsvB_u3H1iJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        position: {top: '65%', right: '270px'}
    },
    'marker-piercing-rightear03': {
        title: '',
        content: '<iframe width="360" height="200" src="https://www.youtube.com/embed/Kb_DWC7MHXk?si=d2_yFPnlgXJLB-XV&amp;start=88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        position: {top: '2%', right: '100px'}
    }
};

const storyBoxes = {};

function toggleStory(markerName) {
    const storyBox = storyBoxes[markerName];

    if(storyBox) {
        Object.values(storyBoxes).forEach(box => {
            box.classList.remove('front');
        });

        storyBox.classList.toggle('visible');

        if(storyBox.classList.contains('visible')) {
            storyBox.classList.add('front');
        }
        
        const markerElement = markerEl.find(m => m.object3D.name === markerName);
        if(markerElement) {
            markerElement.element.classList.toggle('active');
        }
    }
}

//setting up scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//setting up camera
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(5,2,3);

//setting up renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
    //renderer will fill the entire browser window
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('viewer').appendChild(renderer.domElement);

//orbit controls: allowing users to rotate around the model with mouse/trackpad
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
// controls.dampingFactor = 0.05;
controls.minDistance = 0.5;
controls.maxDistance = 10;

//lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 0.4);
pointLight.position.set(0,5,0);
scene.add(pointLight);

//loading model
const loader = new THREE.GLTFLoader();

let loadedModel;

let markerObjs = {};

loader.load(
    '3d-figure/figure-final.glb',

    function(gltf) {
        loadedModel = gltf.scene;

        const box = new THREE.Box3().setFromObject(loadedModel);

        //centering the model
        const center = box.getCenter(new THREE.Vector3());
        loadedModel.position.sub(center);

        //scaling the model
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3/maxDim;
        loadedModel.scale.multiplyScalar(scale);

        loadedModel.position.y -= 0.6;

        //finding markers
        loadedModel.traverse(function(child){
            if(child.name && child.name.startsWith(`marker-`)) {
                markerObjs[child.name] = child;
                console.log(`marker:`, child.name, `at position:`, child.position);
            }
        });

        scene.add(loadedModel);
        createMarkersFromBlender();
    },

    //progress callback; runs during loading
    function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + `% loaded`);
    },

    function(error) {
        console.error(`an error occurred loading the model:`, error);
    }
);

//marker system
const markerIcons = {
    'mole': 'assets/markers/mole.png',
    'scar': 'assets/markers/scar.png',
    'piercing': 'assets/markers/piercing.png',
    'tattoo': 'assets/markers/tattoo.png',
    'void': '&#10683;'
};

const markerEl = [];

function getMarkerType(markerName) {
    const parts = markerName.split('-');
    if(parts.length >= 2) {
        return parts[1];
    }
    return 'mole';
}

function createMarkersFromBlender() {
    const markersContainer = document.getElementById('markers-container');
    const storyBoxesContainer = document.getElementById('stories-container');

    for (const markerName in markerObjs) {
        const markerObject = markerObjs[markerName];
        
        const markerType = getMarkerType(markerName);

        const iconPath = markerIcons[markerType] || markerIcons['void'];

        const markerDiv = document.createElement('div');
        markerDiv.className = 'marker';
        markerDiv.title = markerName;

        const icon = document.createElement('img');
        icon.src = iconPath;
        icon.alt = markerType;
        icon.style.width = '150%';
        icon.style.height = '150%';
        icon.style.display = 'block';

        markerDiv.appendChild(icon);
        

        //look up the story for this marker
        const story = markerStories[markerName];

        if(story) {
            const storyBox = document.createElement('div');

            storyBox.innerHTML = `
            <p class = "story-box-title">${story.title}</p>
            <p>${story.content}</p>
            `;

            //position each stories 
            if (story.position) {
                if (story.position.top) storyBox.style.top = story.position.top;
                if (story.position.bottom) storyBox.style.bottom = story.position.bottom;
                if (story.position.left) storyBox.style.left = story.position.left;
                if (story.position.right) storyBox.style.right = story.position.right;
            }

            storyBox.addEventListener('click', () => {
            Object.values(storyBoxes).forEach(box => {
            box.classList.remove('front');
            });
            storyBox.classList.add('front');
             });

            storyBoxesContainer.appendChild(storyBox);
            storyBoxes[markerName] = storyBox;
        }

        //add click->event to marker button
        markerDiv.addEventListener(`click`, () => {
            toggleStory(markerName);
        });

        //add marker button to the HTML page
        markersContainer.appendChild(markerDiv);

        markerEl.push({
            element: markerDiv,
            object3D: markerObject,
            type: markerType
        });

        console.log(`created ${markerType} marker for ${markerName}`);
    }
    let lastChecked = null;
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('click', e => {
            if(lastChecked === e.target) {
                e.target.checked = false;
                lastChecked = null;
            } else {
                lastChecked = e.target;
            }
        });
    });
    
}

//updating marker positions: runs every frame to keep marker buttons to the right place on the figure
//lowkey had to get help here
    //ight check here again. fixed like magic but idk how.
function updateMarkers() {
    const raycaster = new THREE.Raycaster();
    
    markerEl.forEach(marker => {
        if(!marker.object3D) return;

        const worldPosition = new THREE.Vector3();
        marker.object3D.getWorldPosition(worldPosition);

        const vector = worldPosition.clone();
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * -0.5 + 0.5) * window.innerHeight;
        
        // Check if marker is behind camera
        const isBehindCamera = vector.z > 1;
        
        // Check if marker is occluded by the model
        const direction = worldPosition.clone().sub(camera.position).normalize();
        const distance = worldPosition.distanceTo(camera.position);
        
        raycaster.set(camera.position, direction);
        const intersects = raycaster.intersectObject(loadedModel, true);
        
        // If there's an intersection closer than the marker, it's occluded
        const isOccluded = intersects.length > 0 && intersects[0].distance < distance - 0.1;
        
        marker.element.style.left = x + 'px';
        marker.element.style.top = y + 'px';
        
        // Hide if behind camera OR occluded by model
        const shouldHide = isBehindCamera || isOccluded;
        marker.element.style.display = shouldHide ? 'none' : 'block';
        marker.element.style.opacity = shouldHide ? '0' : '1';
    });
}

//animating the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    updateMarkers();
    renderer.render(scene, camera);
}

// Start the animation
animate();

//for in case of resizing window
window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const okayButton = document.getElementById('okay-button');
const aboutBox = document.getElementById('about');
const bottomButtonAbout = document.getElementById('bottom-button-about')

okayButton.addEventListener('click', () => {
    aboutBox.style.opacity = '0';
    bottomButtonAbout.style.display = 'block';
});

bottomButtonAbout.addEventListener('click', () => {
    aboutBox.style.display = 'block';
    aboutBox.style.opacity  = '1';
    bottomButtonAbout.style.display = 'none';
});

const getStartedButton = document.getElementById('get-started-button');
const howToBox = document.getElementById('how-to');
const bottomButtonHowTo = document.getElementById('bottom-button-how-to');

getStartedButton.addEventListener('click', () => {
    howToBox.style.opacity = '0';
    bottomButtonHowTo.style.display = 'block';
});

bottomButtonHowTo.addEventListener('click', () => {
    howToBox.style.display = 'block';
    howToBox.style.opacity = '1';
    bottomButtonHowTo.style.display = 'none';
});