import { useAppDispatch } from "@/lib/hooks/redux";
import {
  gotoFirstPage,
  gotoLastPage,
  gotoNextPage,
  gotoPreviousPage,
} from "@/lib/slices/postEngagementSlice";

type SkipToLastOrFirstPageProps = {
  left?: boolean;
  disabled: boolean;
};

const SkipToLastOrFirstPage = ({
  left = false,
  disabled = false,
}: SkipToLastOrFirstPageProps) => {
  const dispatch = useAppDispatch();
  const gotoLastOrFirstPage = () => {
    if (left) {
      dispatch(gotoFirstPage());
    } else {
      dispatch(gotoLastPage());
    }
  };
  return (
    <>
      <button
        className={`${left ? "rotate-180" : ""} ${disabled ? "bg-base-300" : "bg-data-table-btn-bg-color"}  flex h-8 w-8 items-center justify-center rounded-full normal-case text-white`}
        disabled={disabled}
        onClick={() => gotoLastOrFirstPage()}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className="h-5 w-5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z"></path>
        </svg>
      </button>
    </>
  );
};

export default SkipToLastOrFirstPage;
