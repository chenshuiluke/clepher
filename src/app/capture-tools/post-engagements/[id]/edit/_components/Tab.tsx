"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { ReactElement, ReactNode } from "react";

export type TabProps = {
  title: string;
  children: ReactNode;
  postSelection?: boolean;
};
const Tab = ({ title, children, postSelection = false }: TabProps) => {
  const activeTab = useAppSelector((state) => {
    if (!postSelection) {
      return state.editEngagementSlice.activeTab;
    } else {
      return state.editEngagementSlice.activePostSelectionTab;
    }
  });
  if (title != activeTab) {
    return <></>;
  }
  return <>{children}</>;
};

export default Tab;
