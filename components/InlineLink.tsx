import React, { ReactNode } from "react";

interface InlineLinkProps {
  link: string;
  redirect: boolean;
  color: string;
  children: ReactNode;
}

const InlineLink = ({ link, redirect, color, children }: InlineLinkProps) => (
  <a
    href={link}
    target={redirect ? "_blank" : ""}
    rel="noreferrer"
    className={`transition-all text-${color}-400 hover:text-${color}-300 font-bold`}
  >
    {children}
  </a>
);

export default InlineLink;
