import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Categories({ baseUrl }) {
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

  return (
    <>
      {/* Category Section */}
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="category-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Categories</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody id="table-category">
                {categories.map((category, index) => {
                  return (
                    <tr>
                      <td scope="row">{index + 1}</td>
                      <td className="fw-bold">{category.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* End Category Section */}
    </>
  );
}
