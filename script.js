 $(window).on("load", function () {
     $(".loader-wrapper").fadeOut("slow");
     document.getElementsByTagName("HTML")[0].style.overflow = "auto";

     /**for (var y = 0; y < document.querySelectorAll(".overlayAnimation").length; y++) {
         for (var x = 0; x < document.querySelectorAll(".overlayAnimation")[y].children.length; x++) {
             document.querySelectorAll(".overlayAnimation")[y].children[x].classList.add("troi");
         }
     } **/
 });

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

     //moveUpRevealFunOverlay();
     for (var y = 0; y < document.querySelectorAll(".overlayAnimation").length; y++) {
         for (var x = 0; x < document.querySelectorAll(".overlayAnimation")[y].children.length; x++) {
             //document.querySelectorAll(".overlayAnimation")[x].getElementsByTagName("*")[x].style.opacity = "1";
             //console.log(document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*").length);

             document.querySelectorAll(".overlayAnimation")[y].children[x].classList.add("tro");
             //document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*")[x].style.transition = "1s";
             document.querySelectorAll(".overlayAnimation")[y].children[x].style.transitionDelay = x / 4 + "s";

             //document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*")[x].style.border = "solid 2px green";
             //console.log(document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*").length);
         }

     }


     for (var i = 0; i < document.querySelectorAll(".hamburgerMenuLine").length; i++) {
         document.querySelectorAll(".hamburgerMenuLine")[i].style.margin = "8px auto";
     }
 }

 document.querySelector(".closeButton").onclick = function () {
     document.querySelector(".hmlTransform1").style.transform = "rotate(0)";
     document.querySelector(".hmlTransform2").style.transform = "rotate(0)";


     document.querySelector(".overlay").classList.remove("overlayShow");
     document.getElementsByTagName("HTML")[0].style.overflow = "auto";

     for (var y = 0; y < document.querySelectorAll(".overlayAnimation").length; y++) {
         for (var x = 0; x < document.querySelectorAll(".overlayAnimation")[y].children.length; x++) {
             document.querySelectorAll(".overlayAnimation")[y].children[x].classList.remove("tro");
             document.querySelectorAll(".overlayAnimation")[y].children[x].style.transitionDelay = "0s";
         }
     }


     for (var i = 0; i < document.querySelectorAll(".hamburgerMenuLine").length; i++) {
         document.querySelectorAll(".hamburgerMenuLine")[i].style.margin = "4px auto";
     }

 }

 document.querySelector(".backToTop").onclick = function () {
     document.querySelector("html").style.scrollBehavior = "smooth";
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0;
 }


 /******* ANIMATION ON THE FRONTPAGE FOR THE CARD ********/

 function cardAnimation() {
     var cardAnimation = document.querySelector(".content-2-cardWrapper");




     var windowHeight = window.innerHeight;
     var elementTop = cardAnimation.getBoundingClientRect().top;
     var elementVisible = 100;
     if (elementTop < windowHeight - elementVisible) {

         for (var i = 0; i < cardAnimation.children.length; i++) {
             //cardAnimation.children[i].style.opacity = "1";
             //cardAnimation.children[i].style.transform = "translateX(0px)";
             cardAnimation.children[i].style.transitionDelay = i / 4 + "s";
             cardAnimation.children[i].classList.add("show");
         }
     }
 }




 function moveUpRevealFun() {
     var moveUpReveals = document.querySelectorAll(".moveUpReveal");
     for (var i = 0; i < moveUpReveals.length; i++) {
         for (var x = 0; x < moveUpReveals[i].getElementsByTagName("*").length; x++) {
             moveUpReveals[i].getElementsByTagName("*")[x].classList.add("moveUpReveals");

         }
         var windowHeight = window.innerHeight;
         var elementTop = moveUpReveals[i].getBoundingClientRect().top;
         var elementVisible = 100;
         if (elementTop < windowHeight - elementVisible) {
             for (var x = 0; x < moveUpReveals[i].getElementsByTagName("*").length; x++) {
                 //moveUpReveals[i].getElementsByTagName("*")[x].parentNode.style.overflow = "hidden";
                 moveUpReveals[i].getElementsByTagName("*")[x].style.transitionDelay = x / 3 + "s";
                 moveUpReveals[i].getElementsByTagName("*")[x].classList.add("active");
             }
         }
     }
 }

 function moveUpRevealFunOverlay() {
     var moveUpReveals = document.querySelectorAll(".moveUpRevealOverlay");
     for (var i = 0; i < moveUpReveals.length; i++) {
         for (var x = 0; x < moveUpReveals[i].getElementsByTagName("*").length; x++) {
             moveUpReveals[i].getElementsByTagName("*")[x].classList.add("moveUpReveals");

         }
         var windowHeight = window.innerHeight;
         var elementTop = moveUpReveals[i].getBoundingClientRect().top;
         var elementVisible = 80;
         if (elementTop < windowHeight - elementVisible) {
             for (var x = 0; x < moveUpReveals[i].getElementsByTagName("*").length; x++) {
                 //moveUpReveals[i].getElementsByTagName("*")[x].parentNode.style.overflow = "hidden";
                 moveUpReveals[i].getElementsByTagName("*")[x].style.transitionDelay = x / 4 + "s";
                 moveUpReveals[i].getElementsByTagName("*")[x].classList.add("active");
             }
         }
     }
 }

 function moveLeftAnimationFunc() {
     var moveLefts = document.querySelectorAll(".moveLeftAnimation");
     for (var i = 0; i < moveLefts.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = moveLefts[i].getBoundingClientRect().top;
         var elementVisible = 180;
         if (elementTop < windowHeight - elementVisible) {
             moveLefts[i].classList.add("active");
         } else {
             //reveals[i].classList.remove("active");
         }
     }
 }

 function moveRightAnimationFunc() {
     var moveRights = document.querySelectorAll(".moveRightAnimation");
     for (var i = 0; i < moveRights.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = moveRights[i].getBoundingClientRect().top;
         var elementVisible = 180;
         if (elementTop < windowHeight - elementVisible) {
             moveRights[i].classList.add("active");
         } else {
             //reveals[i].classList.remove("active");
         }
     }
 }


 function widthiFunc() {
     var widthi = document.querySelectorAll(".motdWrapper");
     for (var i = 0; i < widthi.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = widthi[i].getBoundingClientRect().top;
         var elementVisible = 320;
         if (elementTop < windowHeight - elementVisible) {
             widthi[i].classList.add("motdWrapper100");
         } else {
             //widthi[i].classList.remove("motdWrapper100");
         }
     }
 }

 function revealo() {
     var reveals = document.querySelectorAll(".revealo");
     for (var i = 0; i < reveals.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = reveals[i].getBoundingClientRect().top;
         var elementVisible = 80;
         if (elementTop < windowHeight - elementVisible) {
             reveals[i].querySelector(".lineTestInner").classList.add("lineTestInnerAni");
             reveals[i].querySelector(".lineTestInner2").classList.add("lineTestInnerAni2");
             reveals[i].classList.add("lineTestAni");

         } else {
             //reveals[i].classList.remove("active");
         }
     }
 }

 function opacityReveal() {
     var reveals = document.querySelectorAll(".opacityReveal");
     for (var i = 0; i < reveals.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = reveals[i].getBoundingClientRect().top;
         var elementVisible = 200;
         if (elementTop < windowHeight - elementVisible) {
             reveals[i].classList.add("active");
         } else {
             reveals[i].classList.remove("active");
         }
     }
 }

 function fromDark() {
     var reveals = document.querySelectorAll(".fromDark");
     for (var i = 0; i < reveals.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = reveals[i].getBoundingClientRect().top;
         var elementVisible = 150;
         if (elementTop < windowHeight - elementVisible) {
             reveals[i].classList.add("active");
         } else {
             //reveals[i].classList.remove("active");
         }
     }
 }


 document.addEventListener("keypress", function (event) {
     if (event.key == "Enter") {
         document.querySelector("html").style.scrollBehavior = "smooth";
         document.body.scrollTop = 0; // For Safari
         document.documentElement.scrollTop = 0;
     }
 });






 //window.addEventListener("scroll", reveal);
 //window.addEventListener("scroll", revealo);

 window.addEventListener("scroll", widthiFunc);
 window.addEventListener("scroll", cardAnimation);
 window.addEventListener("scroll", moveUpRevealFun);
 window.addEventListener("scroll", opacityReveal);
 window.addEventListener("scroll", moveLeftAnimationFunc);
 window.addEventListener("scroll", moveRightAnimationFunc);
 //window.addEventListener("scroll", fromDark);
 window.addEventListener("scroll", function () {
     document.querySelector("html").style.scrollBehavior = "auto";
 });

 // To check the scroll position on page load
 reveal();
 moveUpRevealFun();
 opacityReveal();
 fromDark();
 cardAnimation();
