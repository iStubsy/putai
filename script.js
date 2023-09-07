 $(window).on("load", function () {
     $(".loader-wrapper").fadeOut("slow");
     document.getElementsByTagName("HTML")[0].style.overflow = "auto";

     for (var y = 0; y < document.querySelectorAll(".overlayAnimation").length; y++) {
         for (var x = 0; x < document.querySelectorAll(".overlayAnimation")[y].children.length; x++) {
             document.querySelectorAll(".overlayAnimation")[y].children[x].classList.add("troi");
         }
     }
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
         var elementVisible = 80;
         if (elementTop < windowHeight - elementVisible) {
             reveals[i].classList.add("active");
         } else {
             //reveals[i].classList.remove("active");
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
         var elementVisible = 80;
         if (elementTop < windowHeight - elementVisible) {
             for (var x = 0; x < moveUpReveals[i].getElementsByTagName("*").length; x++) {
                 //moveUpReveals[i].getElementsByTagName("*")[x].parentNode.style.overflow = "hidden";
                 moveUpReveals[i].getElementsByTagName("*")[x].style.transitionDelay = x / 2 + "s";
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

 /*
  function revealo() {
      var reveals = document.querySelectorAll(".lineTestAnimation");
      for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
          if (elementTop < windowHeight - elementVisible) {
              for (var x = 0; x < document.querySelectorAll(".lineTestAnimation").length; x++) {
                  document.querySelectorAll(".lineTestInner")[x].classList.add("lineTestInnerAni");
                  document.querySelectorAll(".lineTestInner2")[x].classList.add("lineTestInnerAni2");
                  document.querySelectorAll(".lineTest2")[x].classList.add("lineTestAni");
              }
          } else {
           
          }
      }
  }
 */

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





 document.addEventListener("keypress", function (event) {
     if (event.key == "Enter") {
         document.body.scrollTop = 0; // For Safari
         document.documentElement.scrollTop = 0;
     }
 });






 window.addEventListener("scroll", reveal);
 window.addEventListener("scroll", revealo);
 window.addEventListener("scroll", moveUpRevealFun);

 // To check the scroll position on page load
 reveal();
 moveUpRevealFun();
