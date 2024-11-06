/***************************************************              HERO  ANIMA           ***************************************************/
var heroTL = gsap.timeline();
heroTL
  .from(".hero__logo", { opacity: 0, duration: 2 })
  .to(".hero_bg_1", { x: "-100%", duration: 2 }, 1)
  .to(".hero_bg_2", { x: "100%", duration: 2 }, 1)
  .from(".gsap_hero", { opacity: 0, duration: 2 }, 2)
  .from(".hero__line", { x: "24%", opacity: 0, duration: 2 }, 2)
  .from(".gsap_header", { y: -50, duration: 1, stagger: 0.17 }, 3);

const bg = document.querySelector(".hero__bg");

gsap.to(bg, {
  scale: 2,
  y: -90,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 0px",
    end: "bottom 20%",
    scrub: 1,
    pin: true,
    onLeave: () => {
      gsap.to(".hero_bg_0", { opacity: 1, duration: 1.5 });
      gsap.to(".hero_bg_1", { x: 0, duration: 1 });
      gsap.to(".hero_bg_2", { x: 0, duration: 1 });
    },
    onEnterBack: () => {
      gsap.to(".hero_bg_0", { opacity: 0, duration: 1 });
      gsap.to(".hero_bg_1", { x: "-100%", duration: 1 });
      gsap.to(".hero_bg_2", { x: "100%", duration: 1 });
    },
  },
});

/***************************************************              ABOUT  ANIMA           ***************************************************/
gsap.to(".hero__bottom", {
  y: -200,
  scrollTrigger: {
    trigger: ".about",
    start: "top 90%",
    end: "top 20%",
    scrub: 1,
  },
});

gsap.from(".about__left > h3", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
  },
});
gsap.from(".gsap_about", {
  y: -90,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.to(".about_bg_1", {
  x: "-100%",
  scrollTrigger: {
    trigger: ".about",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.to(".about_bg_2", {
  x: "100%",
  scrollTrigger: {
    trigger: ".about",
    start: "top 90%",
    end: "top 20%",
    scrub: 1,
  },
});
/***************************************************              PARTNERS  ANIMA           ***************************************************/
gsap.to(".partners__list", {
  x: "-20%",
  scrollTrigger: {
    trigger: ".partners",
    start: "top 90%",
    end: "top -10%",
    scrub: 1,
  },
});
/***************************************************              PARTNERS  ANIMA           ***************************************************/
gsap.from(".rate__number", {
  y: 60,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".rate",
    start: "top 90%",
    end: "top 40%",
    scrub: 1,
    onLeave() {
      console.log(1);
      gsap.to(".rate__text", {
        opacity: 1,
        duration: 1,
      });
    },
    onEnterBack() {
      console.log(1);
      gsap.to(".rate__text", {
        opacity: 0,
        duration: 1,
      });
    },
  },
});
/***************************************************              COOPERATION  ANIMA           ***************************************************/
gsap.from(".cooperation__item", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".cooperation",
    start: "top 60%",
    end: "top -10%",
    scrub: 1,
  },
});
/***************************************************              TITLE  ANIMA           ***************************************************/
gsap.utils.toArray(".title").forEach((title, index) => {
  gsap.from(title, {
    opacity: 0,
    duration: 2,
    y: -70,
    scrollTrigger: {
      trigger: title,
      start: "top 70%",
      end: "top 40%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        title.style.opacity = progress;
      },
    },
  });
});
/***************************************************              SERVICES  ANIMA           ***************************************************/
gsap.from(".lalala", {
  opacity: 0,
  x: 50,
  y: -50,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".services",
    start: "top 60%",
    end: "top -10%",
    scrub: 1,
  },
});
/***************************************************              BURGER  ANIMA           ***************************************************/
const burgerBtns = document.querySelectorAll(".burger__btn");
const burgerContents = document.querySelectorAll(".burger__content");

burgerBtns.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    const isActive = elem.classList.contains("active");

    burgerContents.forEach((contentElem) => {
      contentElem.classList.remove("active");
    });

    burgerBtns.forEach((btnElem) => {
      btnElem.classList.remove("active");
    });

    if (!isActive) {
      elem.classList.add("active");
      burgerContents[index].classList.add("active");
    }
  });
});
/***************************************************             PRODUCT ANIME           ***************************************************/
const products = document.querySelectorAll(".product__item");

if (window.innerWidth > 768) {
  products[0].classList.add("active");
  products.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      products.forEach((elem) => {
        elem.classList.remove("active");
      });
      elem.classList.add("active");
    });
  });
} else {
  products.forEach((elem) => {
    elem.classList.add("active");
  });
}

/***************************************************             BURGER MENU           ***************************************************/
const burger_btn = document.querySelector(".menu");
const burger_content = document.querySelector(".burger-popup");
const body = document.querySelector("body");

burger_btn.addEventListener("click", function () {
  burger_btn.classList.toggle("opened");
  doBurger();
});

function doBurger() {
  if (burger_btn.classList.contains("opened")) {
    gsap.to(burger_content, {
      top: "0",
      ease: "power3.out",
      duration: 1,
    });
    body.classList.add("lock");
  } else {
    gsap.to(burger_content, {
      top: "-120%",
      ease: "power3.out",
      duration: 1,
    });
    body.classList.remove("lock");
  }
}

/***************************************************             BURGER MENU IN MOBILE MENU          ***************************************************/
const burgerButtons = document.querySelectorAll(".burgerBtn");
const burgerContent = document.querySelectorAll(".burgerContent");

burgerButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    burgerButtons.forEach((element) => {
      element.classList.remove("active");
    });
    burgerContent.forEach((element) => {
      element.classList.remove("active");
    });

    elem.classList.toggle("active");
    burgerContent[index].classList.toggle("active");
  });
});
