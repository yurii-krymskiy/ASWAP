import { useState } from "react";

const TagInput = ({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: (tags: string[]) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className="bg-[#1D1D1D] border border-[#181818] rounded-[8px] px-3 py-2 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center bg-[#C5C300] text-black px-2 py-full rounded-full text-sm"
        >
          <span>{tag}</span>
          <button
            onClick={() => removeTag(index)}
            className="ml-1 text-black hover:text-gray-500 cursor-pointer h-full"
          >
            x
          </button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Type and press Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent text-[#7B7B7B] outline-none flex-1 min-w-[100px]"
      />
    </div>
  );
};

export default TagInput;
