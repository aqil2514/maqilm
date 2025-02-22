// Utils for frame-motion library

export const fadeUpVariant = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  export const fadeInVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  
  export const slideLeftVariant = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  export const scaleUpVariant = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  