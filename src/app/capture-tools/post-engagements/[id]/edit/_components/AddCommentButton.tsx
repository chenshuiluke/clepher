import React from "react";
type AddCommentButtonProps = { onClick: () => void };
const AddCommentButton = ({ onClick }: AddCommentButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="focus:shadow-outline inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
      type="button"
    >
      Add Comment
    </button>
  );
};

export default AddCommentButton;

// Usage example:
// <AddCommentButton onClick={() => console.log('Button clicked')} />
