"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {
  deselectAll,
  gotoPage,
  selectAll,
  toggleSelected,
} from "@/lib/slices/postEngagementSlice";
import Record from "@/lib/types/record";
import React, { useEffect, useRef, useState } from "react";
import NextPage from "./NextOrPreviousPage";
import NextOrPreviousPage from "./NextOrPreviousPage";
import SkipToLastOrFirstPage from "./SkipToLastOrFirstPage";
import MessengerIcon from "./MessengerIcon";
import ActionPopover from "./ActionPopover";

const PostEngagementsDataTable: React.FC = () => {
  const itemsPerPage = 10;
  const [recordsToDisplay, setRecordsToDisplay] = useState<Array<Record>>([]);
  const data = useAppSelector((state) => {
    return state.postEngagementSlice.data;
  });
  const currentPage = useAppSelector((state) => {
    return state.postEngagementSlice.currentPage;
  });
  const lastPage = useAppSelector((state) => {
    return state.postEngagementSlice.lastPage;
  });
  const numSelected = useAppSelector((state) => {
    return state.postEngagementSlice.numSelected;
  });
  const dispatch = useAppDispatch();
  const headerCheckBoxRef = useRef<HTMLInputElement>(null);

  const handleSelectOrDeselectAll = () => {
    const checked = headerCheckBoxRef.current?.checked;
    if (checked) {
      dispatch(selectAll());
    } else {
      dispatch(deselectAll());
    }
  };

  const handleGotoPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const destinationPage = parseInt(e.target.value);
      dispatch(gotoPage(destinationPage));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (headerCheckBoxRef.current != null) {
      if (numSelected == data.length) {
        headerCheckBoxRef.current.checked = true;
      } else if (numSelected > 0) {
        headerCheckBoxRef.current.indeterminate = true;
      } else {
        headerCheckBoxRef.current.checked = false;
        headerCheckBoxRef.current.indeterminate = false;
      }
    }
  }, [numSelected, data]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRecords = data.slice(indexOfFirstItem, indexOfLastItem);
    setRecordsToDisplay(currentRecords);
  }, [data, currentPage]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border-b border-gray-200 shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="w-[20px]  py-3 text-left text-xs  font-medium tracking-wider "
                  >
                    <div className="px-3">
                      <input
                        type="checkbox"
                        className="checkbox"
                        ref={headerCheckBoxRef}
                        onChange={() => handleSelectOrDeselectAll()}
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-[20px]  py-3 text-left text-xs  font-medium tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="w-[150px]  py-3 text-left text-xs  font-medium tracking-wider text-gray-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[150px]  py-3 text-left text-xs  font-medium tracking-wider text-gray-500"
                  >
                    Engaged / Unique
                  </th>
                  <th
                    scope="col"
                    className="w-[150px]  py-3 text-left text-xs  font-medium tracking-wider text-gray-500"
                  >
                    Acquired
                  </th>
                  <th
                    scope="col"
                    className="w-[150px]  py-3 text-left text-xs  font-medium tracking-wider text-gray-500"
                  >
                    Conversion
                  </th>
                  <th
                    scope="col"
                    className="w-[150px]  py-3 text-left text-xs  font-medium tracking-wider text-gray-500"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recordsToDisplay.map((item) => (
                  <tr key={item.id} className="bg-white">
                    <td className="w-[20px]">
                      <div
                        className="w-[20px] px-3"
                        onClick={() => {
                          dispatch(toggleSelected(item.id));
                        }}
                      >
                        <input
                          type="checkbox"
                          className="checkbox pointer-events-none"
                          checked={item.selected}
                        />
                      </div>
                    </td>
                    <td className="w-[20px] whitespace-nowrap  py-4 text-sm ">
                      <MessengerIcon />
                    </td>
                    <td className="w-[150px] whitespace-nowrap  py-4 text-sm ">
                      {item.name}
                    </td>
                    <td className="w-[150px] whitespace-nowrap  py-4 text-sm">
                      {item.engaged} / {item.unique}
                    </td>
                    <td className="w-[150px] whitespace-nowrap  py-4  text-sm">
                      {item.acquired}
                    </td>
                    <td className="w-[150px] whitespace-nowrap  py-4 text-sm">
                      {item.conversion}
                    </td>
                    <td className="w-[150px] whitespace-nowrap  py-4 text-sm">
                      <ActionPopover />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 py-3.5">
        <SkipToLastOrFirstPage left={true} disabled={currentPage <= 1} />
        <NextOrPreviousPage left={true} disabled={currentPage <= 1} />
        <NextOrPreviousPage disabled={currentPage >= lastPage} />
        <SkipToLastOrFirstPage disabled={currentPage >= lastPage} />
        <p>
          Page{" "}
          <strong>
            {currentPage} of {lastPage}
          </strong>
        </p>
        <div className="flex flex-row items-center justify-center gap-1">
          <p>Go to page: </p>
          <input
            type="number"
            min={1}
            max={lastPage}
            onChange={(e) => handleGotoPage(e)}
            className="input input-sm input-bordered w-16 p-1 focus:outline-offset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default PostEngagementsDataTable;
