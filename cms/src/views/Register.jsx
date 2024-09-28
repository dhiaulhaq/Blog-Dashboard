import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Register({ baseUrl }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = {
        username,
        email,
        password,
        phoneNumber,
        address,
      };

      const { data } = await axios.post(`${baseUrl}/apis/add-user`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      navigate("/");
      Toastify({
        text: `Success adding new user`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#008000",
        },
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#FF0000",
        },
      }).showToast();
    }
  }

  return (
    <>
      {/* New User Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="new-user-section"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <form onSubmit={handleSubmit} id="register-form">
                <h1 className="h3 mb-3 display-1">Register Staff</h1>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-username">Username</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="form-control"
                    id="register-username"
                    placeholder="Enter username ..."
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-email">Email</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="register-email"
                    placeholder="Enter email address ..."
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-password">Password</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="register-password"
                    placeholder="Enter password ..."
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-phone">Phone Number</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    className="form-control"
                    id="register-phone"
                    placeholder="Enter phone number ..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-address">Address</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <textarea
                    onChange={(e) => setAddress(e.target.value)}
                    id="register-address"
                    className="form-control"
                    rows={3}
                    placeholder="Enter address ..."
                    autoComplete="off"
                  />
                </div>
                <button
                  className="btn btn-lg btn-warning rounded-pill w-100 p-2 mt-3"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End New User Section */}
    </>
  );
}
