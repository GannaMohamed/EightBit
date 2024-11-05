import { Animation } from "react-scroll-motion";

export const CubeHome = () =>
  ({
    in: {
      moveElement: 1,
    },
    out: {
      moveElement: 2,
    },
  } as Animation);
