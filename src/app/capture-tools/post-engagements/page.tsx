"use client";
import CaptureTools from "@/app/capture-tools/_components/CaptureTools";
import PostEngagementsDataTable from "./_components/PostEngagementsDataTable";
import SearchInput from "./_components/SearchInput";
import { useState } from "react";

const PostEngagements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-2">
      <div className="mb-2 flex flex-row items-end gap-2">
        <div className="grow truncate">
          <h4 className="truncate text-xl">Post Engagements</h4>
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <PostEngagementsDataTable searchTerm={searchTerm} />
    </div>
  );
};

export default PostEngagements;
