"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {
  deselectAll,
  selectAll,
  toggleSelected,
} from "@/lib/slices/postEngagementSlice";
import Record from "@/lib/types/Record";
import React, { useEffect, useRef, useState } from "react";

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
  }, [numSelected]);

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
                    className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-500"
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      ref={headerCheckBoxRef}
                      onChange={() => handleSelectOrDeselectAll()}
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-500"
                  >
                    Engaged / Unique
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-500"
                  >
                    Acquired
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-500"
                  >
                    Conversion
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-500"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recordsToDisplay.map((item) => (
                  <tr key={item.id} className="bg-white">
                    <td>
                      <div
                        className="px-1"
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
                    <td className="whitespace-nowrap px-6 py-4 text-sm ">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      {item.engaged} / {item.unique}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm ">
                      {item.acquired}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm ">
                      {item.conversion}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm ">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Actions
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEngagementsDataTable;
