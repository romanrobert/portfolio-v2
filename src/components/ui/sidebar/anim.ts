export const menuSlide = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] },
  },
};

export const slide = {
  initial: {
    y: "80px",
  },
  enter: {
    y: "0px",
    transition: { duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] },
  },
  exit: {
    y: "80px",
  },
};
