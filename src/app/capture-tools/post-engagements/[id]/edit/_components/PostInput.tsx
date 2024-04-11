import React, { useState } from "react";
type PostInputProps = {};
const PostInput = ({}: PostInputProps) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleAddKeyword = () => {
    setKeyword(""); // Clear the input after adding
  };

  return (
    <div className="flex w-full items-center">
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        placeholder="Post ID / URL"
        className="h-10 flex-1 rounded-l-md border border-gray-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        onClick={handleAddKeyword}
        className="h-10 rounded-r-md bg-blue-600 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Grab Post
      </button>
    </div>
  );
};

export default PostInput;
