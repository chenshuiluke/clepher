import Link from "next/link";

const DisplayTag = () => {
  return (
    <div className="py-3">
      <div className="bg-base-100 w-16 truncate rounded-md border border-base-300 px-2 py-[.32rem] text-base md:w-auto">
        <Link href={"/"} className="hover:underline">
          @hitunezofficial
        </Link>
      </div>
    </div>
  );
};

export default DisplayTag;
