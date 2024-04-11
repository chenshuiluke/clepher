import React from "react";

interface SmallButtonProps {
  onClick: () => void;
  text: string;
}

const SmallButton: React.FC<SmallButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700 focus:outline-none"
      type="button"
    >
      {text}
    </button>
  );
};

export default SmallButton;
