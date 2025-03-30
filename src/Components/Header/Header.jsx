import React from "react";
import { useNavigate } from "react-router-dom";
import Myimage from "../../assets/image/circle.jpg";
import { RiMenuLine, RiAccountCircleFill } from "@remixicon/react";

import { NavLink } from "react-router-dom";
function Header({ islogin, setIslogin , props}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIslogin(false);
    console.log(islogin);

    navigate("/");
  };
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={Myimage} alt="" className="w-12 h-12 rounded-full" />
            <RiMenuLine size={30} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">This is my School</h1>
          </div>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to={"/signin"}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                SignIn
              </NavLink>
            </li>

            <li>
              {islogin ? (
                
                <div>
                  <RiAccountCircleFill className="text-2xl " size={30} />
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-gray-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
