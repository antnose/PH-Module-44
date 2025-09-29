const ProductTable = ({ productData }) => {
  console.log(productData);
  return (
    <div className="max-w-7xl px-14 sm:px-0">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((data, idx) => (
              <tr key={idx} className="bg-base-200">
                <th> {idx + 1} </th>
                <td> {data.productName} </td>
                <td> {data.productQuantity} </td>
                <td> {data.productPrice} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
