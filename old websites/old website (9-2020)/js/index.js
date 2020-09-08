/* index.js */

/* formats page depending if the user is mobile or desktop */
function mobile() {

    /* on load, scroll to top */
    window.scrollTo(0, 0);

    /* window width */
    var width = window.screen.width * window.devicePixelRatio;
    var height = window.screen.height * window.devicePixelRatio;

    /* all IDs of elements changing */
    var nameID = document.getElementById("name");
    var rnaID = document.getElementById("rna");
    var containerID = document.getElementById("container");
    var heroPicID = document.getElementById("heroPic");
    var heroButtonID = document.getElementById("heroButton");
    var bottomBoxID = document.getElementById("bottomBox");
    var breakID = document.getElementById("break");
    // var projCardID = document.getElementById("projectCard");

    /* desktop */
    if (width > 1300) {
        rnaID.src ='./images/PNG/rna.png';
        containerID.style.marginBottom = '7%';
    } 
    
    /* mobile */
    else {
        rnaID.src ='./images/PNG/rna-mobile.png';
        containerID.style.marginBottom = '0%';
        heroPicID.src = './images/PNG/boat-mobile.PNG';
        heroButtonID.style.width = '20%';
        bottomBoxID.style.display = "block";
        breakID.style.display = "none";
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
    var heroID = document.getElementById("heroDiv");
    var bottomBoxID = document.getElementById("bottomBox");

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

    /* heroID */
    heroID.style.display = 'none';

    /* bottomBoxID */
    bottomBoxID.style.display = "none";
}

/* bad coding, doing this as a bandaid */
function navbarToggleRestore() {

    /* IDs */
    var dimID = document.getElementById("dim");
    var closeID = document.getElementById("close");
    var navID = document.getElementById("nav");
    var containerID = document.getElementById("container");
    var projectID = document.getElementById("projects");
    var heroID = document.getElementById("heroDiv");
    var bottomBoxID = document.getElementById("bottomBox");

    /* closeID */
    closeID.style.display = 'none';

    /* dimID */
    dimID.style.display = 'none';

    /* navID */
    navID.style.display = 'block';

    /* containerID */
    containerID.style.display = 'block';

    /* projectID */
    projectID.style.display = 'block';

    /* heroID */
    heroID.style.display = 'block';

    /* bottomBoxID */
    bottomBoxID.style.display = "block";

    hero();
    
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

    window.open(links[linkIndex]);
    
}

function github(projName) {
    if (projName == 'corona') {
        window.open('https://github.com/RyanDBurke/coronavirus-genome-variant');
    } else if (projName == 'rna') {
        window.open('https://github.com/RyanDBurke/RNA-seq-quantification-using-the-EM-algorithm');
    }
}

/* hover-oo hero button */
function heroButton() {

    // IDs
    var heroButtonID = document.getElementById("heroButton");
    var heroTextID = document.getElementById("heroText");

    heroButtonID.style.backgroundColor = 'white';
    heroTextID.style.color = 'black';
    // heroTextID.innerHTML = "more";
}

/* hover-out hero button */
function heroButtonReset() {

    // IDs
    var heroButtonID = document.getElementById("heroButton");
    var heroTextID = document.getElementById("heroText");

    heroButtonID.style.backgroundColor = 'transparent';
    heroTextID.style.color = 'white';
    //heroTextID.innerHTML = "もっと";
}

/* scroll to bottom when clicking hero button */
function hero() {

    var width = window.screen.width * window.devicePixelRatio;
    var navID = document.getElementById("nav");

    if (width > 1300) {
        window.scrollTo(0,document.body.scrollHeight);
    } else {
        navID.scrollIntoView();
    }
    
    heroButtonReset();
}