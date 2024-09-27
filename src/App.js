import "./App.css";
import { products } from "./assets/TempData";
import HeadBar from "./components/Search/HeadBar";
import { useState } from "react";
import PaginatedProducts from "./components/Pagination";

function App() {
  const storedProducts = localStorage.getItem("product");
  const [filterd, setFilterd] = useState(
    storedProducts ? JSON.parse(storedProducts) : products
  );
  const [allProducts, setAllProducts] = useState(
    storedProducts ? JSON.parse(storedProducts) : products
  );
  if (!storedProducts) {
    localStorage.setItem("product", JSON.stringify(products));
  }
  const addProduct = (product) => {
    setFilterd([...filterd, product]);
    setAllProducts([...allProducts, product]);
    localStorage.setItem("product", JSON.stringify([...allProducts, product]));
  };
  return (
    <div className=" lexend-deca-regular p-4 md:p-10 lg:p-16 ">
      <HeadBar
        allData={allProducts}
        addProduct={addProduct}
        filterData={setFilterd}
      />
      {filterd.length === 0 && (
        <h1 className=" text-red-800 text-xl text-center my-12 ">
          No products matches
        </h1>
      )}
      <PaginatedProducts products={filterd} />
    </div>
  );
}

export default App;
