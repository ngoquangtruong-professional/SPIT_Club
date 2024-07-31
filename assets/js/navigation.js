document.getElementById("showNavigation").addEventListener("click", function () {
    document.getElementById("navigation").classList.add("show");
    document.getElementById("navigationOverlay").classList.add("show");
    document.getElementById("showNavigation").classList.add("hide");
    document.getElementById("menuLogo").classList.add("hide");
});

document.getElementById("hideNavigation").addEventListener("click", function () {
    document.getElementById("navigation").classList.remove("show");
    document.getElementById("showNavigation").classList.remove("hide");
    document.getElementById("menuLogo").classList.remove("hide");
    document.getElementById("navigationOverlay").classList.remove("show");
});

