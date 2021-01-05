

function mobile() {
    var width = window.innerWidth;

    // IDs
    var hrTopID = document.getElementById("hr-top");
    var bgImgID = document.getElementById("bg-img");
    var nameID = document.getElementById("name");
    var teardropID = document.getElementById("teardrop");
    var nounID = document.getElementById("noun");
    var aboutID = document.getElementById("about");
    var cornyID = document.getElementById("corny");
    var japaneseID = document.getElementById("japanese");
    var githubID = document.getElementById("github");
    var linkedinID = document.getElementById("linkedin");
    var dateID = document.getElementById("date");
    var birthID = document.getElementById("birth");
    var birthTextID = document.getElementById("birth-text");
    var morseID = document.getElementById("morse");
    var floatingID = document.getElementById("floating");
    var floatingTextID = document.getElementById("floating-text");

    if (width < 1000) {
        hrTopID.style.left = "30%"
        hrTopID.style.right = "30%"

        bgImgID.style.top = "25%"

        nameID.style.fontSize = "25px"
        nameID.style.left = "7%"

        teardropID.style.width = "20px"
        teardropID.style.left = "42%"
        teardropID.style.top = "34%"

        nounID.style.fontSize = "7px"
        nounID.style.top = "36%"
        nounID.style.left = "7%"

        aboutID.style.fontSize = "9px"
        aboutID.style.top = "39%"
        aboutID.style.left = "7%"

        cornyID.style.fontSize = "9px"
        cornyID.style.top = "90%"

        japaneseID.style.fontSize = "9px"
        japaneseID.style.top = "92%"

        githubID.style.fontSize = "26px"
        githubID.style.top = "50%"
        githubID.style.left = "7%"

        linkedinID.style.fontSize = "26px"
        linkedinID.style.top = "50%"
        linkedinID.style.left = "16%"

        dateID.style.fontSize = "12px"
        dateID.style.top = "50%"
        dateID.style.left = "92%"

        birthID.style.fontSize = "8px"
        birthID.style.left = "1%"

        birthTextID.style.fontSize = "8px"

        morseID.style.display = "none"

        floatingID.style.top = "10%"
        floatingID.style.left = "70%"
        floatingTextID.style.fontSize = "14px"
    }
}

function github() {
    window.open("https://github.com/RyanDBurke");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/ryanburke96/");
}

function morse() {
    var morseID = document.getElementById("morse");
    morseID.style.display = "none"

    var englishID = document.getElementById("english");
    var englishIDText = document.getElementById("english-text");
    englishID.style.display = "block"
    englishIDText.style.color = "white"
}

function morseOut() {
    var morseID = document.getElementById("morse");
    morseID.style.display = "block"

    var englishID = document.getElementById("english");
    englishID.style.display = "none"
}