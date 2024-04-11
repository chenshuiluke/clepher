"use client";

import { Children, ReactElement, useEffect, useState } from "react";
import { TabProps } from "./Tab";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {
  setActivePostSelectionTab,
  setActiveTab,
} from "@/lib/slices/editEngagementSlice";
type TabProp = { title: String; isForPostSelection?: boolean };
type TabsProps = {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  tabs: Array<TabProp>;
  postSelection?: boolean;
};

const Tabs = ({ children, tabs, postSelection = false }: TabsProps) => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => {
    if (!postSelection) {
      return state.editEngagementSlice.activeTab;
    }
    return state.editEngagementSlice.activePostSelectionTab;
  });
  const widthClassName = `w-${100 / tabs.length}%`;

  const changeActiveTab = (tab: TabProp) => {
    if (!tab.isForPostSelection) {
      dispatch(setActiveTab(tab.title));
    } else {
      dispatch(setActivePostSelectionTab(tab.title));
    }
  };
  useEffect(() => {
    if (tabs.length > 0) {
      changeActiveTab(tabs[0]);
    }
  }, []);
  return (
    <>
      <div className={`flex h-12 w-full flex-row justify-between self-stretch`}>
        {tabs.map((tab) => {
          const isActive = tab.title === activeTab;
          return (
            <div
              key={tab.title.toString()}
              className={`bg-white ${widthClassName} text-md  flex flex-1 items-center justify-center border-b ${isActive ? "border-black" : ""}`}
              onClick={() => changeActiveTab(tab)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>

      {children}
    </>
  );
};

export default Tabs;
