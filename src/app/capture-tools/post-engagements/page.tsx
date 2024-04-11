import CaptureTools from "@/app/capture-tools/_components/CaptureTools";
import PostEngagementsDataTable from "./_components/PostEngagementsDataTable";

const PostEngagements = () => {
  return (
    <div className="px-2">
      <div className="mb-2 flex flex-row items-end gap-2">
        <div className="grow truncate">
          <h4 className="truncate text-xl">Post Engagements</h4>
        </div>
      </div>
      <PostEngagementsDataTable />
    </div>
  );
};

export default PostEngagements;
