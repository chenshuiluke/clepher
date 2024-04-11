"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {
  deleteAllSelected,
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
type PostEngagementsDataTableProps = {
  searchTerm: String;
};
const PostEngagementsDataTable = ({
  searchTerm = "",
}: PostEngagementsDataTableProps) => {
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
    const filteredRecords = data.filter((record) => {
      return record.name?.toLowerCase()?.includes(searchTerm.toLowerCase());
    });
    const currentRecords = filteredRecords.slice(
      indexOfFirstItem,
      indexOfLastItem,
    );
    setRecordsToDisplay(currentRecords);
  }, [data, currentPage, searchTerm]);

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
                    <div className="flex flex-row items-center  px-3">
                      <input
                        type="checkbox"
                        className="checkbox"
                        ref={headerCheckBoxRef}
                        onChange={() => handleSelectOrDeselectAll()}
                      />
                      <span
                        className="rounded-full p-2 hover:bg-gray-300"
                        onClick={() => dispatch(deleteAllSelected())}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-[18px] w-[18px]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
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
                      <ActionPopover record={item} />
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
