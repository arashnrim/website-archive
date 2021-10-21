import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  const [reference, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const usesReducedMotion = useReducedMotion();
  const animations = {
    normalMotion: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 },
    },
    reducedMotion: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
  };

  return (
    <motion.section
      className={
        "flex flex-col justify-center items-center px-10 pt-20 space-y-10 h-auto min-h-screen text-center min-w-screen md:px-12 lg:px-20 lg:text-left"
      }
      ref={reference}
      variants={
        usesReducedMotion ? animations.reducedMotion : animations.normalMotion
      }
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
