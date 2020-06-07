export const pageVarients = {
  initial: {
    opacity: 0,
    y: "-100vh",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "100vh",
    scale: 0.8,
  },
};

export const pageTransitions = {
  duration: 0.6,
  ease: "easeOut",
};

export const pageStyle = {
  position: "absolute",
};
