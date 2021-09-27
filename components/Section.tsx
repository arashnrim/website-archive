import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <section
    className={
      "flex flex-col justify-center items-center min-h-screen h-auto min-w-screen px-10 md:px-12 lg:px-20 pt-20 space-y-10 text-center lg:text-left"
    }
  >
    {children}
  </section>
);

export default Section;
