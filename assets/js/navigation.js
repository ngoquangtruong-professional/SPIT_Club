window.addEventListener('scroll', function () {
    var menu = document.querySelector('.menu');
    var menuWrapper = document.querySelector('.menu-wrapper');
    var menuHeight = menuWrapper.offsetHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;
    var navigation = document.getElementById("navigation");

    if (scrollPosition > menuHeight) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});

document.getElementById("showNavigation").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    var overlay = document.getElementById("navigationOverlay");

    navigation.classList.add("show");
    overlay.classList.add("show");

    document.getElementById("bottomButton").style.visibility = "hidden";
    document.getElementById("topButton").style.visibility = "hidden";
    
    navigation.classList.remove("swipeOutRight");
    navigation.classList.add("swipeInRight");

    overlay.classList.remove("hide");
    overlay.classList.add("show");
});

document.getElementById("hideNavigation").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    var overlay = document.getElementById("navigationOverlay");

    navigation.classList.remove("swipeInRight");
    navigation.classList.add("swipeOutRight");
    overlay.classList.add("hide");

    document.getElementById("bottomButton").style.visibility = "visible";
    document.getElementById("topButton").style.visibility = "visible";

    setTimeout(function () {
        navigation.classList.remove("show");
        overlay.classList.remove("show");
    }, 750);
});
