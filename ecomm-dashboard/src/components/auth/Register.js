import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { login, hideAuth } from "../../features";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const register = (e) => {
    e.preventDefault();
    let name = firstname + " " + lastname;
    axios
      .post("http://localhost:8000/api/register", { name, email, password })
      .then((response) => {
        dispatch(login({ user: response.data }));
        dispatch(hideAuth());
        navigate("/");
      });
  };

  return (
    <div className="my-5 w-full md:mt-20 md:w-1/2 mx-auto shadow-md border border-Black">
      <h1 className="ml-4 mt-4 text-4xl font-semibold text-Black">Register</h1>
      <form onSubmit={(e) => register(e)} method="POST">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First name"
                  className="mt-1  block w-full border border-Blue shadow-sm sm:text-sm p-2 rounded-md"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="mt-1  block w-full border border-Blue shadow-sm sm:text-sm p-2 rounded-md"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  placeholder="Email"
                  className="mt-1 block w-full border border-Blue shadow-sm sm:text-sm p-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mt-1 block w-full border border-Blue shadow-sm sm:text-sm p-2 rounded-md"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border-Blue border-2 shadow-sm text-sm font-medium rounded-md text-Blue bg-white hover:bg-Blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Blue"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
