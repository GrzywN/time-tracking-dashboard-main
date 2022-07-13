export const createOpacityVariants = (number = 1) => {
  const variants = [];
  // for (let i = 0; i < number; i += 1) {
  //   variants.push({
  //     initial: { opacity: 0 },
  //     animate: {
  //       opacity: 1,
  //       transition: {
  //         duration: 1,
  //         delay: i * 0.25 + 0.5,
  //       },
  //     },
  //   });
  // }
  return variants;
};

export const scaleFromBottom = {
  // initial: { scaleY: 0, transformOrigin: "bottom" },
  // animate: {
  //   scaleY: 1,
  //   transition: { duration: 1, type: "spring" },
  // },
};

export const scaleFromTop = {
  // initial: { scaleY: 0, transformOrigin: "top" },
  // animate: {
  //   scaleY: 1,
  //   transition: { duration: 1, type: "spring" },
  // },
};

export const cardHover = {
  whileHover: {
    backgroundColor: "hsl(234,41%,33%)",
  },
};
