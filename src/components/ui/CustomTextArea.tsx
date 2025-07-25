import { useState } from "react";

export default function CustomTextArea() {
  const [value, setValue] = useState("");
  const maxLength = 200; 

  return (
    <div className="relative w-full">
      <textarea
        placeholder="Enter your referral link"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className="bg-[#1D1D1D] border border-[#181818] text-[#7B7B7B] rounded-[8px] p-4 w-full resize-none outline-none"
        rows={4}
      />
      <div className="absolute bottom-4 right-4 text-xs text-[#7B7B7B]">
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
