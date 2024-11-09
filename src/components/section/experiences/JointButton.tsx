"use client";
import React from "react";
import { scrollToSection } from "@/helper/common.helper";

type propsType = {
  label?: string;
  className: string;
};
const JoinButton = ({ label = "Join With Us", className }: propsType) => {
  return (
    <button onClick={() => scrollToSection("email")} className={className}>
      {label}
    </button>
  );
};

export default JoinButton;
