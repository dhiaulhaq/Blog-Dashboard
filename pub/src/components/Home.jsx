import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

export default function Home({ setPage }) {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const { data } = await axios.get("https://server.dhiaulhaq.my.id/pub");
      console.log(data.data);

      setPosts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Main */}
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* CARD */}
            {posts.map((post) => {
              return (
                <>
                  <div className="rounded overflow-hidden shadow-lg flex flex-col">
                    <a href="#" />
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src={post.imgUrl}
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                      <a href="#!">
                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          Cooking
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                      <a
                        href="#"
                        className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                      >
                        Simplest Salad Recipe ever
                      </a>
                      <p className="text-gray-500 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                      <span
                        href="#"
                        className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                      >
                        <span className="ml-1">DM Naufal</span>
                      </span>
                      <span
                        href="#"
                        className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                      >
                        <span className="ml-1">1 September 2024</span>
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="mt-3 flow-root">
            <a
              href="/"
              className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
            >
              Previous
            </a>
            <a
              href="/"
              className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer text-opacity-100"
            >
              Next
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
