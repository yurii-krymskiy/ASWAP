import { useEffect, useRef, type ReactNode } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const CustomModalWrapper = ({ isOpen, onClose, children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef as React.RefObject<HTMLElement>, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20"
      style={{
        background: "#0F0F0F38",
        backdropFilter: "blur(10px)",
      }}
    >
      <div ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default CustomModalWrapper;
