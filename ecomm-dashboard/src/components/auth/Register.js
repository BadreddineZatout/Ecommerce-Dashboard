import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { login, hideAuth, showProducts } from "../../features";
import protectRoute from "../../helpers/protectRoute";

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
        dispatch(showProducts());
        dispatch(hideAuth());
        navigate("/");
      });
  };

  return (
    <div className="my-5 mx-auto w-full border border-Black shadow-md md:mt-20 md:w-1/2">
      <h1 className="ml-4 mt-4 text-4xl font-semibold text-Black">Register</h1>
      <form onSubmit={(e) => register(e)} method="POST">
        <div className="overflow-hidden sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First name"
                  className="mt-1  block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
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
                  className="mt-1  block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
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
                  className="mt-1 block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mt-1 block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border-2 border-Blue bg-white py-2 px-4 text-sm font-medium text-Blue shadow-sm hover:bg-Blue hover:text-white focus:outline-none focus:ring-2 focus:ring-Blue focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default protectRoute(Register, "auth");
