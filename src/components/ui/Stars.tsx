import React from "react";

const Stars = () => {
  return (
    <div className="flex flex-row items-center gap-[1px]">
      {[...Array(5)].map((_, index) => (
        <img key={index} src="/icons/star.svg" alt="star" />
      ))}
    </div>
  );
};

export default Stars;
