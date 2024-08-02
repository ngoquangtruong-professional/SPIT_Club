window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollTop >= documentHeight / 2) {
        document.getElementById("bottomButton").style.display = "none";
        document.getElementById("topButton").style.display = "flex";
    } else {
        document.getElementById("bottomButton").style.display = "flex";
        document.getElementById("topButton").style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function bottomFunction() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
}
