import React from "react";

const GradientTitle = ({ text }: { text: string }) => {
  return (
    <h1
      className="
        text-[64px]
        font-[500]
        leading-[110%]
        tracking-[-0.02em]
        font-kairos
        bg-[linear-gradient(182.52deg,_#EEEEF6_2.38%,_#8C8C90_126.37%)]
        text-transparent
        bg-clip-text
        gradien-tile
      "
    >
      {text}
    </h1>
  );
};

export default GradientTitle;
