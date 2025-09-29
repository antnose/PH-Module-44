const ProductForm = () => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.name.value;
    const productPrice = form.price.value;
    const productQuantity = form.quantity.value;

    const newProduct = {
      productName,
      productPrice,
      productQuantity,
    };

    console.log(newProduct);
  };

  return (
    <div className="mt-11">
      <form
        onSubmit={handleProductSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto"
      >
        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Product Name"
        />

        <label className="label">Price</label>
        <input
          name="price"
          type="text"
          className="input"
          placeholder="Product Price"
        />

        <label className="label">Product Quantity</label>
        <input
          name="quantity"
          type="text"
          className="input"
          placeholder="Product Quantity"
        />

        <input
          className="join-item btn mt-4"
          type="submit"
          name="options"
          aria-label="Submit"
        />
      </form>
    </div>
  );
};

export default ProductForm;
