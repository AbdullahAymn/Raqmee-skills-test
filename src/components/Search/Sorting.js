import React, { useState } from "react";
import AddNewProduct from "../AddNewProduct";

export default function Sorting({
  value,
  setValue,
  sort,
  setSort,
  filterData,
  addProduct,
}) {
  const [openAdd, setOpenAddState] = useState(false);
  const toggelOpenAdd = () => {
    setOpenAddState((pre) => !pre);
  };
  return (
    <div className="  flex items-center gap-2  ">
      <select
        className=" hidden md:flex p-2 border border-[#E5E5E5] rounded-[4px] outline-none bg-white "
        value={value}
        onChange={setValue}
      >
        <option hidden>category</option>
        <option value={"shirt"}>shirt</option>
        <option value={"bags"}>bags</option>
        <option value={"shoes"}>shoes</option>
      </select>
      <section className=" flex items-center gap-1 ">
        <h4>sort by:</h4>
        <select
          className=" p-2 border border-[#E5E5E5] rounded-[4px] outline-none bg-white "
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option hidden>sort</option>
          <option value={"az"}>A - Z</option>
          <option value={"za"}>Z - A</option>
          <option value={"lh"}>Price: Low to High</option>
          <option value={"hl"}>Price: High to Low</option>
        </select>
        <button
          onClick={toggelOpenAdd}
          className=" bg-[#D9F99D] text-[#171717] py-2 px-4 rounded-[4px] "
        >
          + Sell item
        </button>
      </section>
      {openAdd && (
        <AddNewProduct
          changeData={filterData}
          addProduct={addProduct}
          close={toggelOpenAdd}
        />
      )}
    </div>
  );
}
