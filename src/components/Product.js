import React, { useState } from "react";
import owner from "./imgs/owner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";

export default function Product({ data }) {
  const [clicked, setClicked] = useState(false);

  const handleAddFav = () => {
    setClicked(!clicked);
    //the function
  };
  return (
    <div className="  transition-all ease-in-out duration-500 hover:shadow-xl hover:scale-[1.02] rounded-[4px] ">
      <section className="w-full h-[320px]">
        {/* ProductCover */}
        <img
          className={` h-full w-full rounded-[4px] object-cover `}
          src={data.img}
          alt={`Product ${data.name}`}
        />
      </section>
      {/* ProductInfo */}
      <section className=" my-1 flex items-start justify-between ">
        <section>
          <h4 className=" text-[14px] font-[300] text-[#171717] leading-[18px] ">
            {data.name}
          </h4>
          <h4 className=" text-[19px] font-[400] text-[#171717] leading-[28px] ">
            &pound;{data.price}
          </h4>
          {/* owner Of Product */}
          <section className=" flex items-center gap-2 mt-3 ">
            <img
              className="h-[25px] w-[25px] rounded-full "
              alt="owner"
              src={owner}
            />
            <h1 className=" text-[13px] text-[#171717] font-[400] ">
              Josie Parker
            </h1>
          </section>
        </section>
        <section>
          <button
            onClick={handleAddFav}
            className=" h-[36px] w-[36px] rounded-[4px] border border-[#E5E5E5] mt-1 "
          >
            {clicked ? (
              <FontAwesomeIcon className=" text-red-500 " icon={solid} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </button>
        </section>
      </section>
    </div>
  );
}
