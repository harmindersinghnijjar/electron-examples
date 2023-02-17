// Element
var darkmodeBtn = document.getElementById("darkmode-btn");
var btnIcon = document.getElementById("btn-icon");
var bgMask = document.getElementById("bg-mask");
var mainBg = document.getElementById("main");

// Element Content
var darkColor = "#0e0e0e";
var lightColor = "#fff";

var bgDark = "#191919";
var bgLight = "#f2f2f2";

// Status
var status = 0; // 0 = Light mode, 1 = Dark mode
var duration = 400;

function switchMode() {

    if (status == 0) {

        bgMask.style.backgroundColor = darkColor;
        setTimeout(function() {
            mainBg.style.backgroundColor = darkColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-moon fa-2x");
        btnIcon.style.color = lightColor;
        darkmodeBtn.style.backgroundColor = bgDark;
        
        status = 1;

    } else if (status == 1) {

        bgMask.style.backgroundColor = lightColor;
        setTimeout(function() {
            mainBg.style.backgroundColor = lightColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-sun fa-2x");
        btnIcon.style.color = darkColor;
        darkmodeBtn.style.backgroundColor = bgLight;

        status = 0;

    }

    restartAnimation();

}

function restartAnimation() {

    bgMask.classList.remove("animation");
    void bgMask.offsetWidth;
    bgMask.classList.add("animation");
    
}