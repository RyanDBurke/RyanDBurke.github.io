
function getResolution() {
    var width = window.screen.width * window.devicePixelRatio;
    var modal = document.getElementById("modal");
    var github = document.getElementById("github-icon");
    var linkedin = document.getElementById("linkedin-icon");

    if (width >= 1920) {
        modal.style.left = '20%';
        modal.style.right = '20%';
    }

    // for mobile
    else {
        modal.style.left = '0%';
        modal.style.right = '0%';
        modal.style.top = '7%';
        modal.className = "projectModalContainer bg-dark";
        github.className = "fa fa-github mt-2 mb-5 ml-3";
        linkedin.className = "fa fa-linkedin mt-2 mb-5 ml-3";
    }
}

function github() {
    window.open("https://github.com/RyanDBurke");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/ryanburke96/");
}

function email() {

    var bubbleID = document.getElementById("bubble");
    var emailIconID = document.getElementById("email-icon");

    emailIconID.style.opacity = 0.5;
    bubbleID.style.display = "block";
}

function emailReset() {
    var bubbleID = document.getElementById("bubble");
    var emailIconID = document.getElementById("email-icon");

    emailIconID.style.opacity = 1.0;
    bubbleID.style.display = "none";
}

function showPics() {

    var width = window.screen.width * window.devicePixelRatio;
    var picsNavID = document.getElementById("pics");

    if (width >= 1920) {
        picsNavID.style.display = "block";
    }
}

function highlight(id,color,seconds){
    var element = document.getElementById(id)
    var origcolor = element.style.backgroundColor
    element.style.backgroundColor = color;
    var t = setTimeout(function(){
       element.style.backgroundColor = origcolor;
    },(seconds*1000));
}