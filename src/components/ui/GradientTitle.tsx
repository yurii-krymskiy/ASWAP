import clsx from "clsx";

const GradientTitle = ({ text, classname }: { text: string, classname: string }) => {
  return (
    <p className={clsx("font-[500] leading-[110%] tracking-[-0.02em] font-kairos bg-[linear-gradient(182.52deg,_#EEEEF6_2.38%,_#8C8C90_126.37%)] text-transparent bg-clip-text gradien-tile", classname)}>
      {text}
    </p>
  );
};

export default GradientTitle;
