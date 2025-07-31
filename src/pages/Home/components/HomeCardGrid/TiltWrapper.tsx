import { useState, useRef, type MouseEvent, type ReactNode } from "react";

export const TiltWrapper = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const [transform, setTransform] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (y - 0.5) * 10; 
    const tiltY = (x - 0.5) * -10;

    setTransform(`perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const onMouseLeave = () => setTransform("");

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform, transition: transform ? "transform 0.1s ease-out" : "transform 0.5s ease-in" }}
    >
      {children}
    </div>
  );
};
