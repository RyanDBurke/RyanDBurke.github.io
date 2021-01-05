

function mobile() {
    var width = window.innerWidth;
    var desktopID = document.getElementById("desktop");
    var topBarID = document.getElementById("top-bar");
    var leftBarID = document.getElementById("left-bar");
    var rightBarID = document.getElementById("right-bar");
    var bottomBarID = document.getElementById("bottom-bar");

    var mobileID = document.getElementById("mobile");

    if (width < 1000) {
        desktopID.style.display = "none";
        topBarID.style.display = "none";
        leftBarID.style.display = "none";
        rightBarID.style.display = "none";
        bottomBarID.style.display = "none";

        mobileID.style.display = "block";
    }
}

function projectClick(projectName) {

    switch (projectName) {
        case 'cgv':
            window.open("https://github.com/RyanDBurke/coronavirus-genome-variant");
        case "chm":
            window.open("https://github.com/RyanDBurke/coronavirus-heat-map");
        case "mtt":
            window.open("https://github.com/RyanDBurke/mini-twitter-tui");
        case "rsq":
            window.open("https://github.com/RyanDBurke/rna-seq-quantification");
    }
}

function github() {
    window.open("https://github.com/RyanDBurke");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/ryanburke96/");
}