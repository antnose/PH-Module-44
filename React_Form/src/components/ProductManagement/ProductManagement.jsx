import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [productData, setProductData] = useState([]);
  const handleAddProduct = (product) => {
    setProductData([...productData, product]);
    console.log(product.length);
  };
  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct} />
      <ProductTable productData={productData} />
    </div>
  );
};

export default ProductManagement;
