import React, { useState } from "react";
import Product from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PaginatedProducts({ products }) {
  const [currentPage, setCurrentPage] = useState(0);
  const screenWidth = window.innerWidth;
  let itemsPerPage = 4;
  if (screenWidth > 768 && screenWidth < 1024) {
    itemsPerPage = 3;
  }
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const renderPageNumbers = () => {
    const pages = [];
    const ellipsis = (
      <span key="ellipsis" className="px-4 py-2">
        ...
      </span>
    );
    if (totalPages > 3) {
      // Show ellipsis or current page number
      if (currentPage >= 2 && currentPage < totalPages - 1) {
        pages.push(
          <button
            key={0}
            onClick={() => handlePageClick(0)}
            className={`px-4 py-2  ${
              currentPage === 0 && "border border-[#D9F99D]"
            } rounded-[4px] `}
          >
            {1}
          </button>
        );
        pages.push(
          <button
            key={currentPage}
            onClick={() => handlePageClick(currentPage)}
            className={`px-4 py-2 border border-[#D9F99D] rounded-[4px]`}
          >
            {currentPage + 1}
          </button>
        );
        pages.push(ellipsis);
      } else {
        for (let i = 0; i < 2; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`px-4 py-2 ${
                currentPage === i && "border border-[#D9F99D]"
              } rounded-[4px]`}
            >
              {i + 1}
            </button>
          );
        }
        pages.push(ellipsis);
      }

      // Show last page
      pages.push(
        <button
          key={totalPages - 1}
          onClick={() => handlePageClick(totalPages - 1)}
          className={`px-4 py-2 ${
            currentPage === totalPages - 1 && "border border-[#D9F99D]"
          } rounded-[4px]`}
        >
          {totalPages}
        </button>
      );
    } else {
      for (let i = 0; i < totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-4 py-2  ${
              currentPage === i && "border border-[#D9F99D]"
            } rounded-[4px]`}
          >
            {i + 1}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div>
      <div className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {currentItems.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
      <div className=" flex items-center justify-between gap-2 ">
        <button
          disabled={currentPage === 0}
          onClick={handlePrevious}
          className=" disabled:opacity-70 flex items-center gap-2 text-[#171717] text-[14px] font-[400] "
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Previous
        </button>
        <section>{renderPageNumbers()}</section>

        <button
          disabled={currentPage === totalPages - 1}
          onClick={handleNext}
          className=" disabled:opacity-70 flex items-center gap-2 text-[#171717] text-[14px] font-[400] "
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
