export const menuSlide = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  enter: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] },
  },
};

export const slide = {
  initial: {
    x: "80px",
  },
  enter: {
    x: "0px",
    transition: { duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] },
  },
  exit: {
    x: "80px",
  },
};
