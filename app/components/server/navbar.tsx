export default function Navbar() {
  return (
    <nav className=" px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block  md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border  p-5  md:mt-0 md:flex-row md:space-x-8 md:border-0  md:text-sm md:font-medium lg:text-lg">
            <li>
              <a
                href="#"
                className="block rounded  py-2 pl-3 pr-4  md:bg-transparent md:p-0 md:font-bold md:text-yellow-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-yellow-500 md:dark:hover:bg-transparent "
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="md:hover: block rounded py-2 pl-3 pr-4  text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-yellow-500 "
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-yellow-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-yellow-500  "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a> */}
        <button className="btn border-yellow-400 bg-black text-yellow-400">
          Login
        </button>
      </div>
    </nav>
  );
}
