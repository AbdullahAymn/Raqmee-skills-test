import React, { useState } from "react";

export default function AddNewProduct({ addProduct, close }) {
  const [productInfo, setProductInfo] = useState({
    name: "",
    describtion: "",
    price: 0,
    category: "",
    img: "",
  });
  const hadleChangeInfo = (e) => {
    const { value, name } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      setProductInfo({ ...productInfo, img: reader.result });
    };
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errs = {};
    if (!productInfo.name) {
      errs.name = "please enter name of product";
    }
    if (!productInfo.describtion) {
      errs.describtion = "please enter describtion of product";
    }
    if (!productInfo.category) {
      errs.category = "please enter category of product";
    }
    if (!productInfo.img) {
      errs.img = "please choose image of product";
    }
    if (productInfo.price === 0 || !productInfo.price) {
      errs.price = "please enter price of product";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const addProductHandeller = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addProduct(productInfo);
      close();
    }
  };
  return (
    <div className=" z-[10] fixed top-0 left-0 w-full h-screen bg-black/40 fade-in flex items-center justify-center p-8 ">
      <div className=" max-h-[95vh] overflow-auto bg-white w-full max-w-[770px] rounded-[4px] p-4 text-[#171717] ">
        <section className=" text-end ">
          <button onClick={close}>X</button>
        </section>
        <h1 className=" text-[28px] font-[500] leading-[35px] ">
          Sell an item
        </h1>
        <form onSubmit={addProductHandeller}>
          <section className=" my-1 ">
            <h4 className=" text-[14px] font-[300] leading-[22px] ">
              Upload photos
            </h4>
            {productInfo.img ? (
              <>
                <img
                  src={productInfo.img}
                  alt="new product"
                  className=" mx-auto h-[160px] "
                />
              </>
            ) : (
              <section className=" flex items-center gap-2 ">
                <label
                  htmlFor="file"
                  className=" w-full h-[160px] rounded-[4px] border border-[#E5E5E5] flex items-center justify-center "
                >
                  <h1 className=" px-4 py-2 border border-[#D9F99D] ">
                    Upload photo
                  </h1>
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </section>
            )}
            <p className="error">{errors.img}</p>
          </section>
          <section className="my-1">
            <h4 className=" text-[14px] font-[300] leading-[22px] ">Title</h4>
            <input
              type="text"
              value={productInfo.name}
              name="name"
              onChange={hadleChangeInfo}
              className=" outline-none w-full p-2 border border-[#E5E5E5] rounded-[4px] "
            />
            <p className="error">{errors.name}</p>
          </section>
          <section className="my-1">
            <h4 className=" text-[14px] font-[300] leading-[22px] ">
              Describe your item
            </h4>
            <textarea
              rows={5}
              value={productInfo.describtion}
              name="describtion"
              onChange={hadleChangeInfo}
              className=" outline-none w-full p-2 border border-[#E5E5E5] rounded-[4px] "
            />
            <p className="error">{errors.describtion}</p>
          </section>
          <section className="my-1">
            <h4 className=" text-[14px] font-[300] leading-[22px] ">
              Category
            </h4>
            <select
              value={productInfo.category}
              name="category"
              onChange={hadleChangeInfo}
              className=" text-[#171717] font-[300] outline-none w-full p-2 border border-[#E5E5E5] rounded-[4px] "
            >
              <option hidden>select</option>
              <option value={"shirt"}>shirt</option>
              <option value={"bags"}>bags</option>
              <option value={"shoes"}>shoes</option>
            </select>

            <p className="error">{errors.category}</p>
          </section>
          <section className="my-1">
            <h4 className=" text-[14px] font-[300] leading-[22px] ">
              Item price
            </h4>
            <section className=" outline-none w-full p-2 border border-[#E5E5E5] rounded-[4px] flex items-center justify-between ">
              <h1>&pound;</h1>
              <input
                min={1}
                type="number"
                value={productInfo.price}
                name="price"
                onChange={hadleChangeInfo}
                className=" outline-none w-[68px] "
              />
            </section>

            <p className="error">{errors.price}</p>
          </section>
          <button className=" my-1 w-full h-[44px] rounded-[4px] bg-[#D9F99D]  ">
            Upload item
          </button>
        </form>
      </div>
    </div>
  );
}
