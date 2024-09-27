import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import { useEffect, useState } from "react";

export default function UpdateImage({ baseUrl }) {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const { id } = useParams();

  async function handleUpload(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await axios.patch(
        `${baseUrl}/apis/blog/posts/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      navigate("/");

      Toastify({
        text: `Success update image`,
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

  // useEffect(() => {
  //   console.log(file);
  // }, [file]);

  return (
    <>
      {/* Update Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="update-product-section"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pt-3 pb-2 mb-3">
              <form onSubmit={handleUpload} id="register-form">
                <h1 className="h3 mb-3 display-1">Update Image</h1>
                {/* <div class="mb-3"> */}
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    className="form-control pb-2"
                    id="inputGroupFile02"
                    autoComplete="off"
                    required=""
                  />
                </div>
                <button
                  className="btn btn-lg btn-warning rounded-pill w-100 p-2 mt-3"
                  type="submit"
                >
                  Update Image
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Update Section */}
    </>
  );
}
