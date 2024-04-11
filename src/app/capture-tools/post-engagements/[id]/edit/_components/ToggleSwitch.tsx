"use client";
import React, { useState } from "react";

type ToggleSwitchProps = {
  onSwitch: (checked: boolean) => void;
  defaultVal: boolean;
};
const ToggleSwitch = ({ onSwitch, defaultVal }: ToggleSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(defaultVal);
  const handleSwitch = () => {
    onSwitch(!isEnabled);
    setIsEnabled(!isEnabled);
  };
  return (
    <div
      className={`flex h-7 w-14 cursor-pointer items-center rounded-full border-2 p-1 transition-colors ${
        isEnabled ? " border-blue-600 bg-white" : "border-gray-300 bg-white"
      }`}
      onClick={() => handleSwitch()}
    >
      {/* Knob */}
      <div
        className={`h-5 w-5 transform rounded-full shadow-md transition-transform ${
          isEnabled ? "translate-x-7 bg-blue-600" : "bg-gray-300"
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
