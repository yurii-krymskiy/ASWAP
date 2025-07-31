import { useState } from "react";

interface CustomTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
}

export default function CustomTextArea({
  value: controlledValue,
  onChange,
  placeholder = "Enter your referral link",
  maxLength = 200,
  rows = 4,
}: CustomTextAreaProps) {
  const [internalValue, setInternalValue] = useState("");

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        className="bg-[#1D1D1D] border border-[#181818] text-[#7B7B7B] rounded-[8px] p-4 w-full resize-none outline-none"
        rows={rows}
      />
      <div className="absolute bottom-4 right-4 text-xs text-[#7B7B7B]">
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
