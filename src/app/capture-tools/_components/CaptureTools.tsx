import Link from "next/link";
import PostEngagements from "../post-engagements/page";
import PostEngagement from "@/app/_components/menu_icons/PostEngagement";

const CaptureTools = () => {
  return (
    <div className="rounded-xl bg-white p-2">
      <ul>
        <li role="menuitem">
          {/* TODO: Add logic for changing bg color etc when active */}
          <Link
            href={""}
            className="flex flex-row items-center gap-2 rounded-lg bg-sidebar-bg-active-color px-4 py-2 text-sidebar-active-color "
          >
            <PostEngagement />
            <p className="w-full text-sm">Post Engagement</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CaptureTools;
