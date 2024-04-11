import React, { useState } from "react";

interface DropdownProps {
  options: String[];
  label: String;
  value: String;
  onChange: (selection: String) => void;
}

const Dropdown = ({ options, label, onChange, value }: DropdownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="">{label}</label>
      <select
        value={value.toString()}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border border-gray-300 py-3 pl-4 pr-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500"
      >
        {options.map((option, idx) => (
          <option
            key={idx}
            value={option.toString()}
            selected={option === value}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
