var body = document.body;
var modalState = "closed";
var photoSources = ['./images/JPG/home', './images/JPG/monument', 
                    './images/JPG/dawn', './images/JPG/shadow', 
                    './images/JPG/cherry blossom', './images/JPG/dusk', 
                    './images/JPG/crabs', './images/JPG/fall', 
                    './images/JPG/stLucia'];
var currentImg = 0;

function openModal(index) {

    // set current image
    currentImg = index;

    // src for photo
    src = photoSources[index];

    // IDs
    var containerID = document.getElementById("container");
    var modalID = document.getElementById("modal");
    var setModalImage = document.getElementById("modalImage");
    var prevID = document.getElementById("prev");
    var nextID = document.getElementById("next");
    var width = window.screen.width * window.devicePixelRatio;

    /* format for mobile or desktop */
    if (width < 1400) {
        setModalImage.className = "mx-auto d-block";    // change img-fluid
        setModalImage.src = src + '-mobile.jpg';        // add mobile image
    } else {
        setModalImage.src = src + '.jpg';               // desktop image
    }

    // always do this
    containerID.style.opacity = 0.2;
    modalID.style.display = "block";
    prevID.style.display = "block";
    nextID.style.display = "block";
    prevID.style.opacity = 1.0;
    nextID.style.opacity = 1.0;

    // scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // change modal state
    modalState = "open";
}


// close modal
function modalClose() {

    // IDs
    var containerID = document.getElementById("container");
    var modalID = document.getElementById("modal");
    var prevID = document.getElementById("prev");
    var nextID = document.getElementById("next");

    // closing modal
    containerID.style.opacity = 1.0;
    modalID.style.display = "none";
    prevID.style.display = "none";
    nextID.style.display = "none";

    // changed modal state
    modalState = "closed";
}

// move to next photo
function nextPhoto() {
    next = currentImg + 1;

    if (next >= photoSources.length) {
        next = 0;
    }

    currentImg = next;
    openModal(currentImg);
}


// move to previous photo
function prevPhoto() {
    prev = currentImg - 1;

    if (prev < 0) {
        prev = photoSources.length - 1;
    }

    currentImg = prev;
    openModal(currentImg);
}
