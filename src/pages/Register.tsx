import { TextInput } from "../components/textInput";
import Logo from "../assets/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

type credential = {
  name: string;
  email: string;
  password: string;
  birth_date: string;
  gender: string;
  phone_number: Number;
  address: string;
};

const Register = () => {
  document.title = "TakTuku - Register ";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    await registerUser({
      name: name,
      email: email,
      password: password,
      birth_date: birth,
      gender: gender,
      phone_number: Number(phone),
      address: address,
    });
  };

  const registerUser = async (credential: credential) => {
    await axios
      .post("http://108.136.245.45:8080/users", credential)
      .then((res) => {
        console.log(res);
        Navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <div className="register">
      <div className="container mt-3 mb-5">
        <div className="row justify-content-center">
          <div className="col-11 col-md-6 col-lg-4">
            <div className="logo text-center">
              <NavLink to="/">
                <img src={Logo} className="mb-4" alt="" />
              </NavLink>
              <h4 className="register">Daftar Sekarang</h4>
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <TextInput
                label="Full Name"
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <TextInput
                label="Email Address"
                type="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <TextInput
                label="Password"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <TextInput
                label="Birth Date"
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setBirth(e.target.value)
                }
              />
              <TextInput
                label="Phone Number"
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              />
              <TextInput
                label="Address"
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
              />
              <div className="form-group mt-2">
                <p>
                  Gender
                  <span className="input text-danger">*</span>
                </p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
              <div className="col d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-sign-in text-white">
                  Sign Up Now
                </button>
                <NavLink to="/login" className="btn btn-light">
                  Sign In
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
