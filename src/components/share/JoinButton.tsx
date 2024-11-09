"use client";
import React, { ReactNode } from "react";
import { scrollToSection } from "@/helper/common.helper";

type propsType = {
  children?: ReactNode;
  className: string;
  destinationID?: string;
};
const JoinButton = ({
  children = <p>Join With Us</p>,
  className,
  destinationID = "email",
}: propsType) => {
  return (
    <button
      onClick={() => scrollToSection(destinationID)}
      className={className}
    >
      {children}
    </button>
  );
};

export default JoinButton;
