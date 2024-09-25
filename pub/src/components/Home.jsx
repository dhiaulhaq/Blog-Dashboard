import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";

export default function Home({ setPage, baseUrl }) {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${baseUrl}/apis/pub/blog/posts?q=${search}&i=${filter}&sort=${sort}`
      );
      console.log(data.data);

      setPosts(data.data.query);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${baseUrl}/apis/pub/blog/categories`);
      console.log(data.data);

      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, [search, sort, filter]);

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Main */}
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="flex justify-between mb-10">
            <div className="w-full space-y-3 mr-5">
              <input
                type="text"
                className="h-12 border border-gray-300 text-gray-900 pl-7 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
                placeholder="Search post here..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="relative mr-5">
              <select
                id="Offer"
                className="h-12 border border-gray-300 text-gray-900 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value={""}>Sort by Category</option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                  stroke="#111827"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative">
              <svg
                className="absolute top-1/2 -translate-y-1/2 left-4 z-50"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <select
                id="Offer"
                className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <b className="text-4xl">Loading....</b>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* CARD */}
              {posts.map((post) => {
                return <Card post={post} key={post.id} />;
              })}
            </div>
          )}

          <div className="mt-10 flow-root">
            <a
              href="/"
              className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
            >
              Previous
            </a>
            <a
              href="/"
              className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
            >
              Next
            </a>
            <div className="flex justify-center">
              <a
                href="/"
                className="bg-white font-semibold py-2 px-4 border rounded shadow-md text-neutral-800 cursor-pointer hover:bg-slate-100"
              >
                1
              </a>
              <a
                href="/"
                className="bg-white font-semibold py-2 px-4 border rounded shadow-md text-neutral-800 cursor-pointer hover:bg-slate-100"
              >
                2
              </a>
              <a
                href="/"
                className="bg-white font-semibold py-2 px-4 border rounded shadow-md text-neutral-800 cursor-pointer hover:bg-slate-100"
              >
                3
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
