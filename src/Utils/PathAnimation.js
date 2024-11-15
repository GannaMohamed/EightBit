import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export const PathAnimations = () => {
  //   gsap.to(".Cube", {
  //     duration: 5,
  //     motionPath: {
  //       path: "#cubePath",
  //       align: "#cubePath",
  //       autoRotate: true, // Rotates the cube along the path's direction
  //     },
  //     ease: "power1.inOut",
  //   });
};
