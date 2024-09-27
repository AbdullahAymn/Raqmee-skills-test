import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Search({ value, setValue }) {
  return (
    <div className=" w-full md:max-w-[350px] lg:max-w-[500px] border border-[#E5E5E5] rounded-[4px] p-2 flex gap-1 items-center justify-between ">
      <input
        value={value}
        onChange={setValue}
        className=" flex-1 outline-none text-[#737373] "
        placeholder="search..."
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}
