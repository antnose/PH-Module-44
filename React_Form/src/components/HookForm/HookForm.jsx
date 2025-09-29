import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnchange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name);
  };
  return (
    <div className="mt-11">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto"
      >
        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Name"
          onChange={nameOnchange}
          defaultValue={name}
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          onChange={emailOnChange}
          defaultValue={email}
        />

        <label className="label">Password</label>
        <input
          name="email"
          type="password"
          className="input"
          placeholder="Email"
          onChange={passwordOnChange}
          defaultValue={password}
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

export default HookForm;
