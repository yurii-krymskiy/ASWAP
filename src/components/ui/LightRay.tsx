import React from "react";

const LightRay = (
  {
    side = "left",
    width = 400,
  }: {
    side: string,
    width: number
  }
) => {

  const isLeft = side === "left";

  const sideClass = isLeft ? "left-50 rotate-[125deg]" : "right-75 -rotate-[125deg]";
  const gradient = isLeft
    ? "bg-gradient-to-r from-white/10 to-transparent"
    : "bg-gradient-to-l from-white/10 to-transparent";

  return (
    <div
      className={`
        absolute top-0 z-10 pointer-events-none
        shadow-[0_0_100px_40px_rgba(255,255,255,0.15)]
        ${gradient}
        ${sideClass}
      `}
      style={{ width: `${width}px` }}
    />
  );
};

export default LightRay;
