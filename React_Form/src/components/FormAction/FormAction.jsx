const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div className="mt-11">
      <form
        action={handleFormAction}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto"
      >
        <label className="label">Name</label>
        <input name="name" type="text" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
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

export default FormAction;
