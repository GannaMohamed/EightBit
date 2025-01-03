//                          USE THIS IF
// ResizeObserver loop completed with undelivered notifications
//                          ERR OCCURED

// import { useState, useEffect } from "react";

// const useDebouncedResize = () => {
//   const [size, setSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setSize({ width: window.innerWidth, height: window.innerHeight });
//     };

//     const debouncedResize = debounce(handleResize, 150); // 150ms debounce
//     window.addEventListener("resize", debouncedResize);

//     return () => {
//       window.removeEventListener("resize", debouncedResize);
//     };
//   }, []);

//   return size;
// };

// function debounce(fn, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// }

// export default useDebouncedResize;

// const { width } = useDebouncedResize();

// useEffect(() => {
//   console.log("Viewport width:", width);
// }, [width]);
