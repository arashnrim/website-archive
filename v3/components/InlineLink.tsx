import React, { ReactNode } from "react";

interface InlineLinkProps {
  link: string;
  redirect: boolean;
  children: ReactNode;
}

const InlineLink = ({ link, redirect, children }: InlineLinkProps) => (
  <a
    href={link}
    target={redirect ? "_blank" : ""}
    rel="noreferrer"
    className="transition dotted"
  >
    {children}
  </a>
);

export default InlineLink;
