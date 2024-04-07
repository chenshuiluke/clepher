import Link from "next/link";

const DisplayTag = () => {
  return (
    <div className="border-base-300 bg-base-100 w-16 truncate rounded-md border px-2 py-[.32rem] md:w-auto">
      <Link href={"/"} className="hover:underline">
        @hitunezofficial
      </Link>
    </div>
  );
};

export default DisplayTag;
