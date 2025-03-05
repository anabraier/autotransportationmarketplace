import React from "react";

export const Spotlight = ({ className = "", fill = "white" }) => {
  return (
    <div
      className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
      style={{ backgroundColor: fill }}
    />
  );
};
