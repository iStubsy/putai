document.getElementsByTagName("HTML")[0].style.overflow = "hidden";

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");
        document.querySelector(".navigationBarInner").classList.add("navigationBarInnerScrolled");
        document.querySelector(".hamburgerMenu").classList.add("hamburgerMenuScrolled");
        document.querySelectorAll(".hamburgerMenuLine")[0].classList.add("hamburgerMenuLineScrolled");
        document.querySelectorAll(".hamburgerMenuLine")[1].classList.add("hamburgerMenuLineScrolled");
        document.querySelectorAll(".hamburgerMenuLine")[2].classList.add("hamburgerMenuLineScrolled");
        document.querySelector(".backToTop").classList.add("backToTopScrolled");
    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
        document.querySelector(".navigationBarInner").classList.remove("navigationBarInnerScrolled");

        document.querySelector(".hamburgerMenu").classList.remove("hamburgerMenuScrolled");
        document.querySelectorAll(".hamburgerMenuLine")[0].classList.remove("hamburgerMenuLineScrolled");
        document.querySelectorAll(".hamburgerMenuLine")[1].classList.remove("hamburgerMenuLineScrolled");
        document.querySelectorAll(".hamburgerMenuLine")[2].classList.remove("hamburgerMenuLineScrolled");
        document.querySelector(".backToTop").classList.remove("backToTopScrolled");
    }
}

document.querySelector(".hamburgerMenu").onclick = function () {
    document.querySelector(".overlay").classList.add("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "hidden";

    document.querySelector(".hmlTransform1").style.transform = "rotate(45deg)";
    document.querySelector(".hmlTransform2").style.transform = "rotate(-45deg)";

    for (let i = 0; i < document.querySelectorAll(".hamburgerMenuLine").length; i++) {
        document.querySelectorAll(".hamburgerMenuLine")[i].style.margin = "8px auto";
    }
}

document.querySelector(".closeButton").onclick = function () {
    document.querySelector(".hmlTransform1").style.transform = "rotate(0)";
    document.querySelector(".hmlTransform2").style.transform = "rotate(0)";
    

    document.querySelector(".overlay").classList.remove("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "auto";

    for (let i = 0; i < document.querySelectorAll(".hamburgerMenuLine").length; i++) {
        document.querySelectorAll(".hamburgerMenuLine")[i].style.margin = "4px auto";
    }

}

document.querySelector(".backToTop").onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

/*
$(document).ready(function () {
    $(document).scroll(function (evt) {
        var v2 = Math.abs($('.cardImage-1').position().top - $(window).height() / 2 + 100);
        var v1 = $(this).scrollTop();
        if (v1 > v2) {
            $('.card').css("opacity", "1");
            $('.cardImage-1').addClass("cardImageFinal");
            $('.cardImage-2').addClass("cardImageFinal");
            $('.cardImage-3').addClass("cardImageFinal");
        }
    });
});
*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            //reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
