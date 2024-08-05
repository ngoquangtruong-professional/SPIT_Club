window.onscroll = debounce(scrollFunction, 100);

function scrollFunction() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > documentHeight / 2) {
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
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
