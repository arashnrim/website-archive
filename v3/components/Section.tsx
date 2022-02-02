import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section
      className={
        "flex flex-col justify-center items-center px-10 py-40 space-y-10 h-auto min-h-screen text-center min-w-screen md:px-20 lg:px-36 md:text-left"
      }
      id={id && id}
    >
      {children}
    </section>
  );
};

export default Section;
