// document.getElementById("showNavigation").addEventListener("click", function () {
//     document.getElementById("navigation").classList.add("show");
//     document.getElementById("navigationOverlay").classList.add("show");
//     document.getElementById("showNavigation").classList.add("hide");
//     document.getElementById("menuLogo").classList.add("hide");
// });

// document.getElementById("hideNavigation").addEventListener("click", function () {
//     document.getElementById("navigation").classList.remove("show");
//     document.getElementById("showNavigation").classList.remove("hide");
//     document.getElementById("menuLogo").classList.remove("hide");
//     document.getElementById("navigationOverlay").classList.remove("show");
// });

window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    var menuHeight = menu.offsetHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > menuHeight) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});

document.getElementById("showNavigation").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    var overlay = document.getElementById("navigationOverlay");

    if (!navigation.classList.contains("show")) {
        navigation.classList.add("show");
        overlay.classList.add("show");
        document.getElementById("showNavigation").classList.add("hide");
        document.getElementById("menuLogo").classList.add("hide");

        // Thêm lớp hoạt hình khi hiển thị
        navigation.classList.remove("swipeOutRight");
        navigation.classList.add("swipeInRight");

        // Đảm bảo overlay hiển thị
        overlay.classList.remove("hide");
        overlay.classList.add("show");
    }
});

document.getElementById("hideNavigation").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    var overlay = document.getElementById("navigationOverlay");

    if (navigation.classList.contains("show")) {
        navigation.classList.remove("swipeInRight");
        navigation.classList.add("swipeOutRight");

        overlay.classList.add("hide");

        document.getElementById("showNavigation").classList.remove("hide");
        document.getElementById("menuLogo").classList.remove("hide");

        setTimeout(function() {
            navigation.classList.remove("show");
            // Đảm bảo overlay không còn lớp show
            
            overlay.classList.remove("show");
        }, 1000);
        
    }
});



