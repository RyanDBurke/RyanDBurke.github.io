function mobile() {
    var width = window.innerWidth;
    var profileID = document.getElementById("profilepic");
    var nameID = document.getElementById("name");
    var rowID1 = document.getElementById("project-rows1");
    var rowID2 = document.getElementById("project-rows2");
    var rnaID = document.getElementById("rna");
    var heatID = document.getElementById("heatMap");

    if (width < 1000) {
        profileID.style.display = "none";
        nameID.style.fontSize = "3rem";
        rowID1.className = "row mt-5 bg-white";
        rowID2.className = "row mt-5 bg-white";
        rnaID.className = "img-fluid m-5";
        heatID.className = "img-fluid m-5"
    }
}


function github(link) {
    window.open(link);
}

function linkedin() {
    window.open("https://www.linkedin.com/in/ryanburke96/");
}

/* handles projects on the left */
function projectMouseOverLeft(projectID, descID) {
    var project = document.getElementById(projectID);
    var description = document.getElementById(descID);

    project.className = "col bg-light d-none align-items-center justify-content-center";
    description.className = "col bg-white d-flex align-items-center justify-content-center";
}

function projectMouseOutLeft(projectID, descID) {
    var project = document.getElementById(projectID);
    var description = document.getElementById(descID);

    project.className = "col bg-light d-flex align-items-center justify-content-center";
    description.className = "col bg-white d-none align-items-center justify-content-center";
}


/* handles projects on the right */
function projectMouseOverRight(projectID, descID) {
    var project = document.getElementById(projectID);
    var description = document.getElementById(descID);

    project.className = "col bg-light d-none align-items-center justify-content-center";
    description.className = "col bg-white d-flex align-items-center justify-content-center";
}

function projectMouseOutRight(projectID, descID) {
    var project = document.getElementById(projectID);
    var description = document.getElementById(descID);

    project.className = "col bg-light d-flex align-items-center justify-content-center";
    description.className = "col bg-white d-none align-items-center justify-content-center";
}