import { type ReactNode } from "react";

const GlassCardWrapper = ({ children, width }: { children: ReactNode, width: string }) => {
  return (
    <div className="custom-glass-card w-fit">
      <div
        className="bg-[#0D0D0D] rounded-[16px]"
        style={{ width: `${width}px` }} 
      >
        {children}
      </div>
    </div>
  );
};


export default GlassCardWrapper;
