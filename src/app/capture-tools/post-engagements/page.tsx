import CaptureTools from "@/app/capture-tools/_components/CaptureTools";
import PostEngagementsDataTable from "./_components/PostEngagementsDataTable";

const PostEngagements = () => {
  return (
    <div className="px-2">
      <div className="mb-2 flex flex-row items-end gap-2">
        <div className="grow truncate">
          <h4 className="truncate text-xl">Post Engagements</h4>
        </div>
        {/* <div className="form-control hidden md:flex">
          <div className="join border-neutral bg-base-100 items-center border">
            <input
              placeholder="Search…"
              type="text"
              className="input input-sm join-item h-[30px] border-0 focus:outline-none"
              value=""
            />
            <span className="join-item px-1">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
          </div>
        </div> */}
        {/* <div role="listbox" className="dropdown dropdown-end">
          <label tabIndex={0}>
            <button className="btn btn-sm btn-outline">
              Bulk Actions{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.998 17 7-8h-14z"></path>
              </svg>
            </button>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48 p-2 shadow"
            role="menu"
          >
            <li role="menuitem">
              <a>Delete</a>
            </li>
          </ul>
        </div> */}
      </div>
      <PostEngagementsDataTable />
    </div>
  );
};

export default PostEngagements;
