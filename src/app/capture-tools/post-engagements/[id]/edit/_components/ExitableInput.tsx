import React, { useState } from "react";
type ExitableInputProps = {
  onChange: (text: String) => void;
  onClear: () => void;
  defaultValue: String;
};
const ExitableInput = ({
  onChange,
  onClear,
  defaultValue = "",
}: ExitableInputProps) => {
  const [value, setValue] = useState(defaultValue);
  const clearInput = () => onClear();

  return (
    <div className="flex w-full items-center overflow-hidden rounded-lg border-2 border-gray-300">
      <input
        type="text"
        value={value?.toString()}
        // TODO: Add debouncing
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="w-full p-2 pl-4 text-gray-700 focus:outline-none"
        placeholder="Type here..."
      />
      <button
        onClick={clearInput}
        className="px-4 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

export default ExitableInput;
