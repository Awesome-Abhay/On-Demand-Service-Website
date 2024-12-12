let main_carousel=document.querySelector(".main_carousel");
let container = main_carousel.querySelector(".wrapper");
function goleft() {
    container.scrollTo({
        left: container.scrollLeft - (container.offsetWidth) / 2,
        behavior: 'smooth'
    });

}

function goright() {

    container.scrollTo({
        left: container.scrollLeft + (container.querySelector(".image").clientWidth) * 1.5,
        behavior: 'smooth'

    });

}

setInterval(() => {
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        main_carousel.querySelector(".right").style.display = "none";
    } else {
        main_carousel.querySelector(".right").style.display = "flex";
    }

    if (container.scrollLeft == 0) {
        main_carousel.querySelector(".left").style.display = "none";
    } else {
        main_carousel.querySelector(".left").style.display = "flex";
    }
}, 0);