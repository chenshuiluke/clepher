"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
type SearchInputProps = {
  searchTerm: String;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
const SearchInput = ({ searchTerm, setSearchTerm }: SearchInputProps) => {
  return (
    <div className="relative rounded-full border-2 border-gray-300 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm.toString()}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full py-2 pl-10 pr-3 outline-none"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
