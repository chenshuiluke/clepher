"use client";

import { usePathname } from "next/navigation";
import CaptureTools from "./_components/CaptureTools";

const CaptureToolsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/capture-tools/post-engagements" ? (
        <>
          <div className="grid w-full grid-cols-9 gap-2">
            <div className="col-span-2 px-6">
              <CaptureTools />
            </div>
            <div className="col-span-7 px-6">{children}</div>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default CaptureToolsLayout;
