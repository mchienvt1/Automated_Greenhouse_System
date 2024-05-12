import * as React from "react";
import { useState } from "react";
import { FaChevronDown, FaHamburger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  return (
    <div className="mx-auto w-5/12">
      <div className="relative focus:border-gray-400">
        <button
          type="submit"
          className="absolute inset-y-0 end-4 flex items-center ps-3"
        >
          <svg
            className="h-4 w-4 text-green-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
        <input
          type="text"
          id="default-search"
          className="block w-full rounded-lg bg-[#EDEDED] p-2 ps-10 text-sm text-gray-900 shadow-xl focus:border-gray-400"
          placeholder="Search..."
          required
        />
      </div>
    </div>
  );
};

const UserInfo = () => {
  return (
    <div className="flex flex-row items-center">
      <img
        className="h-8 w-8 rounded-full"
        src="https://avatars.githubusercontent.com/u/116896981?v=4"
        alt="user photo"
      />
      <div className="px-2">
        <span className="text-medium font-bold text-gray-900">Hậu</span>
      </div>
    </div>
  );
};

const DropDownList = () => {
  const [isHidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="mx-2">
      <button
        onClick={() => {
          setHidden(!isHidden);
        }}
        type="button"
        id="dropdownInformationButton"
      >
        <FaChevronDown />
      </button>
      {!isHidden && (
        <div
          id="dropdownInformation"
          className="absolute right-4 z-10 my-4 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow transition duration-300 ease-out"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a href="#" className="relative block px-4 py-2">
                Settings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <button
              onClick={handleSignout}
              className="relative block px-4 py-2 text-sm"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavBar = ({ setToggleSidebar }) => {
  return (
    <nav className="flex flex-row items-center bg-white px-6 py-4">
      <FaHamburger
        className="block lg:hidden"
        onClick={() => setToggleSidebar(true)}
      />
      <SearchInput />
      <UserInfo />
      <DropDownList />
      <FaBell />
    </nav>
  );
};
export default NavBar;
