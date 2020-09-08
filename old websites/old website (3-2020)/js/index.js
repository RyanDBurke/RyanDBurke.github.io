/* index.js */

// modal, container, state, github-link
var modal = document.getElementById("modal");
var container = document.getElementById("container");
var modalState = "closed";
var githubLink;


// handle our modal if coronavirus project is clicked
function covidClick() {

    var name = "Coronavirus Genome Variant [C]";
    var desc = "An efficient seed-search alignment tool \
                to compare read-variants to the COVID-19 \
                virus genome using Burrows-Wheeler transform, \
                suffix arrays, the FM-Index, and core dynamic \
                programming principles.";

    // fade out container
    container.style.opacity = 0.1;

    // bring modal to front
    modal.style.display = "block";

    // adjust modal information and set github link
    document.getElementById("projectName").innerHTML = name;
    document.getElementById("projectDescription").innerHTML = desc;
    document.getElementById("projectImage").src = "./images/PNG/IGV-10K-small.png";
    document.getElementById("github-icon").style.display = "block";
    githubLink = "https://github.com/RyanDBurke/coronavirus-genome-variant";

    // set modal state
    modalState = "open";
}

// handle our modal if RNA Sequence project is clicked
function rnaClick() {

    var name = "RNA Sequence Quantification [Python]";
    var desc = "Implements the EM algorithm for transcript \
                quantification from RNA-alignments, takes in \
                a transcript-alignment file, and returns \
                estimated read-counts for each transcript in the \
                transcriptome.";

    // fade out container
    container.style.opacity = 0.1;

    // bring modal to front
    modal.style.display = "block";

    // adjust modal information and set github link
    document.getElementById("projectName").innerHTML = name;
    document.getElementById("projectDescription").innerHTML = desc;
    document.getElementById("projectImage").src = "./images/PNG/rna-small.png";
    document.getElementById("github-icon").style.display = "block";
    githubLink = "https://github.com/RyanDBurke/EM-Algorithm";

    // set modal state
    modalState = "open";
}

// handle our modal if Abstract Syn Struct project is clicked
function absClick() {

    var name = "Abstract Syntactic Structure [OCaml]";
    var desc = "Designed, built, and debugged a lexer, parser,\
                and interpreter for small-scale C programs using \
                abstract syntactic structure and imperative programming. \
                Then, fed the interpreter a C program to evaluate \
                and output.";

    // fade out container
    container.style.opacity = 0.1;

    // bring modal to front
    modal.style.display = "block";

    // adjust modal information and set github link
    document.getElementById("projectName").innerHTML = name;
    document.getElementById("projectDescription").innerHTML = desc;
    document.getElementById("projectImage").src = "./images/PNG/abstract-syntactic-structure-small.png";
    document.getElementById("github-icon").style.display = "none";

    // set modal state
    modalState = "open";
}

// open github link w/ icon
function github() {
    window.open(githubLink);
}

// close modal if (X) is clicked
function modalClose() {

    // fade out container
    container.style.opacity = 1.0;

    // bring modal to front
    modal.style.display = "none";

    // set modal state
    modalState = "closed";
}

// adjust based on screen res
function getResolution() {
    var width = window.screen.width * window.devicePixelRatio;
    var height = window.screen.height * window.devicePixelRatio;
    var modal = document.getElementById("modal");

    if (width >= 1920) {
        modal.style.left = '20%';
        modal.style.right = '20%';
    } else {
        modal.style.left = '0%';
        modal.style.right = '0%';
    }
}

function showPics() {

    var width = window.screen.width * window.devicePixelRatio;
    var picsNavID = document.getElementById("pics");

    if (width >= 1920) {
        picsNavID.style.display = "block";
    }
}