const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
  };

  return (
    <div className="mt-11">
      <form
        onSubmit={handleSubmit}
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

export default SimpleForm;
