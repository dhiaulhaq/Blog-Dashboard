import { useEffect, useState } from "react";
import axios from "axios";

export default function Form({
  baseUrl,
  post,
  handleSubmit,
  nameProp,
  btnNameProp,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${baseUrl}/apis/blog/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImgUrl(post.imgUrl);
      setCategoryId(post.categoryId);
    }
  }, [post]);

  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="new-product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">{nameProp}</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <form
              onSubmit={(e) =>
                handleSubmit(e, title, content, imgUrl, categoryId)
              }
              id="product-form"
            >
              <div className="mb-3">
                <label htmlFor="product-name">
                  Title <span className="text-danger fw-bold">*</span>
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  className="form-control"
                  id="product-name"
                  placeholder="Enter post title"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-category">
                  Category <span className="text-danger fw-bold">*</span>
                </label>
                <select
                  id="post-category"
                  name="category"
                  className="form-select"
                  onChange={(e) => setCategoryId(e.target.value)}
                  value={categoryId}
                >
                  <option>-- Select Category --</option>
                  {categories?.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="product-desc">
                  Content <span className="text-danger fw-bold">*</span>
                </label>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  className="form-control"
                  name="post-content"
                  id="post-content"
                  placeholder="Enter post content"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="product-image">Image</label>
                <input
                  onChange={(e) => setImgUrl(e.target.value)}
                  value={imgUrl}
                  type="text"
                  className="form-control"
                  id="product-image"
                  placeholder="Enter product image url"
                  autoComplete="off"
                />
              </div>
              <div>
                <button
                  className="btn btn-lg btn-warning rounded-pill w-100 p-2"
                  type="submit"
                  href=""
                >
                  {btnNameProp}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
