window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    } else {

    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");
        document.querySelector("#hamburgerMenu").style.width = "65px";
        document.querySelector(".backToTop").classList.add("backToTopScrolled");

    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
        document.querySelector("#hamburgerMenu").style.width = "80px";
        document.querySelector(".backToTop").classList.remove("backToTopScrolled");
    }
}

document.querySelector("#hamburgerMenu").onclick = function () {
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
