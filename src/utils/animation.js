export const fadeInAnimation = ({
  x = 0,
  y = 0,
  scale = 1,
  delay = 0,
  duration = 1,
}) => ({
  hidden: {
    opacity: 0,
    transform: `translate3d(${x}px, ${y}px, 0) scale3d(${scale}, ${scale}, 1)`,
    willChange: "opacity, transform",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)",
    transition: { duration, delay, ease: "easeOut" },
  },
});

export const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};
