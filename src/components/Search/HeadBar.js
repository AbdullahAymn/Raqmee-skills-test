import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sorting from "./Sorting";

export default function HeadBar({ filterData, allData, addProduct }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const setValue = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      let filtered = allData.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      filterData(filtered);
    } else {
      filterData(allData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, allData]);

  useEffect(() => {
    if (sort === "lh") {
      filterData((pre) => {
        let sorted = [...pre].sort((a, b) => a.price - b.price);
        return sorted;
      });
    }
    if (sort === "hl") {
      filterData((pre) => {
        let sorted = [...pre].sort((a, b) => b.price - a.price);
        return sorted;
      });
    }
    if (sort === "az") {
      filterData((pre) => {
        let sorted = [...pre].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        return sorted;
      });
    }
    if (sort === "za") {
      filterData((pre) => {
        let sorted = [...pre].sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        return sorted;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, allData]);
  return (
    <div className=" flex items-center justify-between gap-2 flex-wrap ">
      <Search value={search} setValue={setValue} />
      <Sorting
        filterData={filterData}
        addProduct={addProduct}
        value={search}
        setValue={setValue}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}
