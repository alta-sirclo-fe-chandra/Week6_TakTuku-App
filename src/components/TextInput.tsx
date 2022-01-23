import { ChangeEventHandler } from "react";

type register = {
  label: string;
  type: string;
  onChange: ChangeEventHandler;
};

const TextInput = (register: register) => {
  return (
    <div className="form-group mt-3">
      <p>
        {register.label}
        <span className="input text-danger">*</span>
      </p>
      <input
        className="form-control"
        type={register.type}
        onChange={register.onChange}
        required
      />
    </div>
  );
};

export { TextInput };
