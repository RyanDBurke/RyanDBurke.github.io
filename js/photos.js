var body = document.body;
var modalState = false;

function openModal(src) {

    // IDs
    var containerID = document.getElementById("container");
    var modalID = document.getElementById("modal");
    var setModalImage = document.getElementById("modalImage");
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

    // scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// close modal
function modalClose() {

    // IDs
    var containerID = document.getElementById("container");
    var modalID = document.getElementById("modal");

    // closing modal
    containerID.style.opacity = 1.0;
    modalID.style.display = "none";


}
