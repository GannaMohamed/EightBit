import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // frame1: 8BIT APPEARS
  // gsap.to(".HomeContainer", {
  //   scrollTrigger: ".Home", // start the animation when ".box" enters the viewport (once)
  //   y: -500,
  // });

  // frame2: CubeHome to CubeAbout
  gsap.to(".Cube", {
    duration: 0.7,
    // y: "35vh",
    y: "+=60vh", // Moves 60vh from the last position
    x: "+=30vw",
    scrollTrigger: {
      trigger: ".AboutPage",
      start: "top 60%",
      end: "top 40%",
      toggleActions: "play none reverse none",
      onEnter: () => {
        document.querySelector(".cube1").classList.add("move");
      },
      onLeaveBack: () => {
        document.querySelector(".cube1").classList.remove("move");
      },
    },
  });

  // frame3: CubeAbout to CubeAbout2
  gsap.to(".Cube", {
    duration: 0.9,
    y: "+=225vh",
    width: "10vw",
    height: "10vw",
    scrub: true,
    scrollTrigger: {
      trigger: ".About2Page",
      start: "top 60%",
      end: "top 10%",
      toggleActions: "play none reverse none",
      onEnter: () => {
        document.querySelector(".cube1").classList.add("move");
      },
      onLeaveBack: () => {
        document.querySelector(".cube1").classList.remove("move");
      },
    },
  });

  // frame4: CubeAbout2 to CubePortfolio
  gsap.to(".Cube", {
    duration: 0.7,
    y: "+=235.255vh",
    x: "+=5.787vw",
    width: "13vw",
    height: "13vw",
    scrub: true,

    scrollTrigger: {
      trigger: ".PortfolioPage",
      start: "top 60%",
      end: "top 40%",
      toggleActions: "play none reverse none",
      onEnter: () => {
        document.querySelector(".cube1 ").classList.remove("move");
        document.querySelector(".cube5 ").classList.add("move");
      },
      onLeaveBack: () => {
        document.querySelector(".cube5").classList.remove("move");
      },
    },
  });

  // frame5: CubePortfolio to CubeServices
  gsap.to(".Cube", {
    duration: 0.7,
    y: "46.296vw",
    scrub: true,

    scrollTrigger: {
      trigger: ".ServicesInfo",
      start: "top 60%",
      end: "top 0%",
      toggleActions: "play none reverse none",
    },
  });

  // frame6: CubeServices to CubeContact
  gsap.to(".Cube", {
    duration: 0.7,
    y: "46.296vw",
    scrub: true,

    scrollTrigger: {
      trigger: ".ServicesInfo",
      start: "top 60%",
      end: "top 0%",
      toggleActions: "play none reverse none",
    },
  });
};
