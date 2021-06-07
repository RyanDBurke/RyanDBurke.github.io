

function mobile() {
    var width = window.innerWidth;
    var height = window.innerHeight

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
    var morseTextID = document.getElementById("morse-text");
    var englishID = document.getElementById("english");
    var englishTextID = document.getElementById("english-text");
    var floatingID = document.getElementById("floating");
    var floatingTextID = document.getElementById("floating-text-number");
    var quotesID = document.getElementById("quotes");
    var quotes2ID = document.getElementById("quotes2");

    /* so if it's on a desktop */
    if (width > 1000) {
        bgImgID.style.width = "50%"
    }

    /* normal iPhones */
    if (width < 1000) {
        hrTopID.style.left = "30%"
        hrTopID.style.right = "30%"

        bgImgID.style.top = "25%"

        nameID.style.fontSize = "25px"
        nameID.style.top = "28%"
        nameID.style.left = "7%"

        teardropID.style.width = "20px"
        teardropID.style.left = "42%"
        teardropID.style.top = "32%"

        nounID.style.fontSize = "10px"
        nounID.style.top = "34%"
        nounID.style.left = "7%"

        aboutID.style.fontSize = "11px"
        aboutID.style.top = "37%"
        aboutID.style.left = "7%"
        about.innerHTML =   "Hey, I'm Ryan. I'm a software engineer based <br> \
                            in Washington, D.C. with interests in bioinformatics, <br> \
                            computer vision, and other cool stuff."

        cornyID.style.fontSize = "11px"
        cornyID.style.top = "88%"

        japaneseID.style.fontSize = "11px"
        japaneseID.style.top = "92%"

        githubID.style.fontSize = "30px"
        githubID.style.top = "58%"
        githubID.style.left = "9%"

        linkedinID.style.fontSize = "30px"
        linkedinID.style.top = "58%"
        linkedinID.style.left = "19%"

        dateID.style.fontSize = "12px"
        dateID.style.top = "52%"
        dateID.style.left = "95%"

        birthID.style.fontSize = "10px"
        birthID.style.left = "1%"
        birthTextID.style.fontSize = "7px"

        morseID.style.width = "15%"
        morseID.style.height = "7%"
        morseID.style.top = "2%"
        morseID.style.left = "82%"
        morseTextID.style.fontSize = "20px"

        englishID.style.width = "15%"
        englishID.style.top = "2%"
        englishID.style.left = "82%"
        englishTextID.style.fontSize = "20px"

        floatingID.style.top = "23.5%"
        floatingID.style.left = "76%"
        floatingTextID.style.fontSize = "14px"

        quotesID.style.fontSize = "20px"
        quotes2ID.style.fontSize = "20px"
    }
    
    /* iPhone 8+  */
    if (width > 400 && width < 1000) {
        nameID.style.left = "9%"

        teardropID.style.width = "20px"
        teardropID.style.left = "41%"
        teardropID.style.top = "31%"

        nounID.style.top = "33%"
        nounID.style.left = "9%"

        cornyID.style.fontSize = "13px"
        cornyID.style.top = "88%"

        japaneseID.style.fontSize = "13px"
        japaneseID.style.top = "92%"

        aboutID.style.fontSize = "13px"
        aboutID.style.top = "36%"
        aboutID.style.left = "9%"

        birthID.style.fontSize = "10px"
        birthID.style.left = "1%"
        birthID.style.top = "10%"

        birthTextID.style.fontSize = "7px"
        birthTextID.style.top = "10%"
    }

    /* iphone X */
    if (width < 400 && height > 800) {

        teardropID.style.width = "20px"
        teardropID.style.left = "42%"
        teardropID.style.top = "31%"

        nounID.style.top = "32%"
        nounID.style.left = "7%"

        aboutID.style.fontSize = "13px"
        aboutID.style.top = "35%"
        aboutID.style.left = "7%"

        birthID.style.fontSize = "10px"
        birthID.style.left = "1%"
        birthID.style.top = "12%"

        birthTextID.style.fontSize = "7px"

        githubID.style.fontSize = "30px"
        githubID.style.top = "52%"
        githubID.style.left = "7%"

        linkedinID.style.fontSize = "30px"
        linkedinID.style.top = "52%"
        linkedinID.style.left = "17%"
    }
}

function github() {
    window.open("https://github.com/RyanDBurke");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/ryanburke96/");
}