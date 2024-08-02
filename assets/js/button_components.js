window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > documentHeight / 2 - 100) {
        document.getElementById("bottomButton").classList.add("hide");
        document.getElementById("topButton").classList.remove("hide");
        document.getElementById("topButton").classList.add("show");
    } else {
        document.getElementById("bottomButton").classList.remove("hide");
        document.getElementById("topButton").classList.remove("show");
        document.getElementById("topButton").classList.add("hide");
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
