import { useState } from "react";

const ControlField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleChangedValue = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    } else {
      setError("");
    }
  };
  return (
    <div className="mt-11">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <label className="label">Name</label>
        <input name="name" type="text" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          onChange={handleChangedValue}
          defaultValue={password}
        />

        <input
          className="join-item btn mt-4"
          type="submit"
          name="options"
          aria-label="Submit"
        />
      </form>
      <p className="text-red-500">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlField;
