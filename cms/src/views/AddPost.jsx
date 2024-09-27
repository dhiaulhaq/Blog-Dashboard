import Form from "../components/Form";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddPost({ baseUrl }) {
  const navigate = useNavigate();

  async function handleSubmit(e, title, content, imgUrl, categoryId) {
    e.preventDefault();
    try {
      const body = {
        title,
        content,
        imgUrl,
        categoryId: +categoryId,
      };

      const { data } = await axios.post(`${baseUrl}/apis/blog/posts`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      navigate("/");
      Toastify({
        text: `Success adding ${data.data.title}`,
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
      {/* New Product Section */}
      <Form
        baseUrl={baseUrl}
        handleSubmit={handleSubmit}
        nameProp="New Post"
        btnNameProp="Submit"
      />
      {/* End New Product Section */}
    </>
  );
}
