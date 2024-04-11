import { useAppDispatch } from "@/lib/hooks/redux";
import {
  gotoNextPage,
  gotoPreviousPage,
} from "@/lib/slices/postEngagementSlice";

type NextOrPreviousPageProps = {
  left?: boolean;
  disabled: boolean;
};

const NextOrPreviousPage = ({
  left = false,
  disabled = false,
}: NextOrPreviousPageProps) => {
  const dispatch = useAppDispatch();
  const gotoNextOrPreviousPage = () => {
    if (left) {
      dispatch(gotoPreviousPage());
    } else {
      dispatch(gotoNextPage());
    }
  };
  return (
    <>
      <button
        className={`${left ? "rotate-180" : ""} ${disabled ? "bg-base-300" : "bg-data-table-btn-bg-color"}  flex h-8 w-8 items-center justify-center rounded-full normal-case text-white`}
        disabled={disabled}
        onClick={() => gotoNextOrPreviousPage()}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
        </svg>
      </button>
    </>
  );
};

export default NextOrPreviousPage;
