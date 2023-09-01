import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {/*  navbar goes here */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700"
                >
                  <svg
                    className="h-7 w-7 mr-2 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="font-bold">TIGS DEV</span>
                </a>
              </div>

              {/* Primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 hover:text-gray-900">
                  Features
                </a>
                <a href="#" className="py-5 px-3 hover:text-gray-900">
                  Pricing
                </a>
              </div>
            </div>

            {/* Secondary nav */}

            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-900 transition duration-300 rounded"
              >
                SignUp
              </a>
            </div>
            {/* mobile btn */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* mobile menu */}
      <div className={navbarOpen ? " md:hidden display " : " hidden"}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>

      {/*  content goes here */}

      <div className="py-32 text-center">
        <h2 className="font-extrabold text-6xl">Navbars!</h2>
      </div>
    </div>
  );
};

export default Navbar;
