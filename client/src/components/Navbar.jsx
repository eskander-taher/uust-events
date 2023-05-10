import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({user, setUser}) {

  function signOut() {
    localStorage.removeItem("userData");
    setUser(null);
  }
  
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-white text-2xl font-bold bg-slate-700 px-4 py-2 rounded-lg"
            >
              UUST Eevents
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 ml-24 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Events
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative bg-gray-100 rounded-md">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="py-2 pl-3 pr-10 block w-96 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.446 14.797a8.5 8.5 0 111.414-1.414l3.854 3.853a1 1 0 01-1.414 1.414l-3.854-3.853zm-6.946-.797a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Sign in and Sign up */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user ? (
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 mr-4 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={signOut}
                  >
                    Sign out
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      className="text-gray-300 hover:bg-gray-700 mr-4 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/signup"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-sky-400"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Hamburger Menu */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for the hamburger menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon for the close button */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="hidden md:block absolute inset-y-0 right-0 pt-2 pb-3 w-48 bg-gray-800">
              <div className="px-3 py-2 space-y-1">
                <Link
                  to="/events"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
