"use client";

import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import EngagementTable from "./_components/EngagementTable";
import Pagination from "./_components/Pagination";
import { useAppSelector } from "@/lib/hooks/redux";

const PageRoot = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = useAppSelector((state) => {
    return state.themeSlice.theme;
  });
  return (
    <div id="page-root" className={`${theme} flex min-h-screen flex-row`}>
      <Header />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="flex-1 bg-content-bg pt-20">{children}</div>
      </div>
    </div>
  );
};

export default PageRoot;
