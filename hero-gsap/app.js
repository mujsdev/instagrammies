// GSAP TIMELINE FOR THE ENTIRE HOMEPAGE
var t1 = gsap.timeline({ defaults: { duration: 0.5 } });
var imageContainer = document.querySelector(".image");

t1.from(".header", { y: "-100vh", ease: "circ.out" })
  .to(".header__logo", {
    y: 0,
    opacity: 1,
    ease: "circ.out",
  })
  .to(
    ".header__nav",
    {
      y: 0,
      opacity: 1,
      ease: "circ.out",
      stagger: ".2",
    },
    "-=0.4"
  )
  .from(
    ".line span",
    {
      duration: 1,
      y: 240,
      skewY: 20,
      ease: "power4.out",
      stagger: 0.1,
    },
    "-=0.8"
  )
  .from(
    ".hero-animation",
    {
      opacity: 0,
      y: -20,
      skewY: 5,
      skewX: 20,
      stagger: 0.2,
    },
    "-=1"
  )
  .from(
    imageContainer,
    1,
    {
      opacity: 0,
      y: "120%",
      skewX: 20,
      skewY: 10,
      ease: "power4.out",
    },
    "-=1.2"
  );

// CTA ONCLICK REVERSE TIMELINE
document.getElementById("cta").addEventListener("click", () => {
  t1.reversed() ? t1.play() : t1.reverse();
});

var t2 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "power2.easeInOut",
  },
});
const menu = document.querySelector(".header__nav__menu");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

t2.paused(true);
t2.to(".overlay", { y: 0 }).to(".menu-container", { opacity: 1, y: "0", skewY: 0, stagger: 0.2 }, "-=0.5");

menu.addEventListener("click", () => {
  t2.play();
});

close.addEventListener("click", () => {
  t2.reverse(0.3);
});
