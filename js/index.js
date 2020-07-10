/* index.js */

/* formats page depending if the user is mobile or desktop */
function mobile() {

    /* window width */
    var width = window.screen.width * window.devicePixelRatio;

    /* all IDs of elements changing */
    var nameID = document.getElementById("name");
    var rnaID = document.getElementById("rna");

    /* desktop */
    if (width > 1300) {
        rnaID.src ='./images/PNG/rna.png';
    } 
    
    /* mobile */
    else {
        // rnaID.src ='./images/PNG/rna-mobile.png';
        rnaID.src ='./images/PNG/rna.png';
    }
}

/* showcase blown-up navbar links */
function navbarToggle() {

    /* IDs */
    var dimID = document.getElementById("dim");
    var closeID = document.getElementById("close");
    var navID = document.getElementById("nav");
    var containerID = document.getElementById("container");
    var projectID = document.getElementById("projects");

    /* dimID */
    dimID.style.display = 'block';

    /* closeID */
    closeID.style.display = 'block';

    /* navID */
    navID.style.display = 'none';

    /* containerID */
    containerID.style.display = 'none';

    /* projectID */
    projectID.style.display = 'none';
}

/* bad coding, doing this as a bandaid */
function navbarToggleRestore() {

    location.reload();

     /* IDs */
     var dimID = document.getElementById("dim");
     var closeID = document.getElementById("close");
     var navID = document.getElementById("nav");

     /* dimID
    dimID.style.display = 'none';

    /* closeID
    closeID.style.display = 'none';

    navID.style.display = 'block';

    */
    
}

function readmore() {

    /* IDs */
    var bioID = document.getElementById("bioText");
    var readmoreID = document.getElementById("readmore");

    /* updating */
    bioID.style.display = 'block';
    readmoreID.style.display = 'none';

}

function openLink(linkIndex) {

    var links = ['https://github.com/ryandburke', 
                'https://www.linkedin.com/in/ryanburke96/'];

    if (linkIndex == 2) {
        var projectID = document.getElementById("projects");
        projectID.scrollIntoView();
        return;
    }

    window.open(links[linkIndex]);
    
}

function github(projName) {
    if (projName == 'corona') {
        window.open('https://github.com/RyanDBurke/coronavirus-genome-variant');
    } else if (projName == 'rna') {
        window.open('https://github.com/RyanDBurke/RNA-seq-quantification-using-the-EM-algorithm');
    }
}