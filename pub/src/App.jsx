import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <header
        id="header"
        className="bg-white w-full px-6 py-5 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500"
      >
        <div className="max-w-5xl mx-auto flex items-center flex-wrap justify-between">
          <div className="sm:mr-8">
            <a className="flex items-center" href="/">
              <span className="text-xl text-orange-500 font-bold self-center">
                Hacktiv Blog
              </span>
            </a>
          </div>
          <nav
            id="menu"
            className="order-last md:order-none items-center flex-grow w-full md:w-auto md:flex justify-end hidden mt-2 md:mt-0"
          >
            <a
              href="/"
              className="block mt-4 md:inline-block md:mt-0 font-medium text-neutral-900 hover:text-orange-400 text-base mr-4"
            >
              Login
            </a>
          </nav>
          <div
            id="menu-toggle"
            className="flex items-center md:hidden text-slate-700 hover:text-teal-600 cursor-pointer sm:ml-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </div>
        </div>
      </header>
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            {/* CARD 2 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                  Best FastFood Ideas (Yummy)
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
            {/* CARD 3 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                  Why to eat salad?
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
      <footer className="mt-20 px-10 py-8 bg-orange-100">
        <div className="max-w-5xl mx-auto text-neutral-900 text-center">
          © 2024{" "}
          <a href="/" className="font-medium" target="_blank" rel="noopener">
            Hacktiv Blog
          </a>
          . All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
