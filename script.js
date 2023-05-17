window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    } else {

    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");

    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
    }
}

document.querySelector("#hamburgerMenu").onclick = function () {
    document.querySelector(".overlay").classList.toggle("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "hidden";

    //document.querySelector(".hmlTransform1").style.transform = "rotate(45deg)";
    //document.querySelector(".hmlTransform2").style.transform = "rotate(-45deg)";
}

document.querySelector(".closeButton").onclick = function () {
    document.querySelector(".overlay").classList.toggle("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "auto";

    for (let i = 0; i < document.querySelectorAll(".hamburgerMenuLine").length; i++) {
        document.querySelectorAll(".hamburgerMenuLine")[i].style.margin = "10px";
    }
}
