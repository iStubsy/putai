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
}

document.querySelector(".closeButton").onclick = function () {
    document.querySelector(".overlay").classList.toggle("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "auto";
}
