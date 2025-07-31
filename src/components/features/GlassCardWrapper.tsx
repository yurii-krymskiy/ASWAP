import { type ReactNode } from "react";

const GlassCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="custom-glass-card rounded-[16px] md:rounded-[16px] p-2 md:p-3 w-[100%] max-w-[450px] md:max-w-[100%] md:w-[500px] z-10">
      <div className="bg-[#0D0D0D] rounded-[9px] md:rounded-[16px] w-full">
        {children}
      </div>
    </div>
  );
};


export default GlassCardWrapper;
