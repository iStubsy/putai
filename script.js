window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".navigationBar").style.opacity = 0.1;
    } else {
        document.querySelector(".navigationBar").style.opacity = 1;
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");
        document.querySelector(".navigationBar").style.opacity = 1;

    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
    }
}

document.querySelector("#hamburgerMenu").onclick = function () {
    //document.querySelector(".overlayHide").classList.toggle("overlayShow");
    //document.getElementsByTagName("HTML")[0].style.overflow = "hidden";
    //document.querySelector("#closeButton").style.display = "flex";
}
