import clsx from "clsx";

const LightRay = (
  {
    side = "left",
    className
  }: {
    side: string,
    className: string
  }
) => {

  const isLeft = side === "left";

  const sideClass = isLeft ? "rotate-[125deg]" : "-rotate-[125deg]";
  const gradient = isLeft
    ? "bg-gradient-to-r from-white/10 to-transparent"
    : "bg-gradient-to-l from-white/10 to-transparent";

  return (
    <div
      className={clsx(`
        absolute top-0 z-10 pointer-events-none
        shadow-[0_0_100px_40px_rgba(255,255,255,0.15)]
        ${gradient}
        ${sideClass}
        ${className}
      `)}
    />
  );
};

export default LightRay;
