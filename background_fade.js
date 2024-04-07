
var web_slider = document.getElementById("web_slider");
var web_desc = document.getElementById("web_description");
var sh_ht = document.getElementById("fade");

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = .38 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

function scrollHandler() {
    fadeOutOnScroll(web_slider);
    fadeOutOnScroll(web_desc);
    fadeOutOnScroll(sh_ht);
}

window.addEventListener('scroll', scrollHandler);