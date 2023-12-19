import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar  w-screen sticky top-0 left-0 px-5 bg-gray-300">
      <div className="flex-1">
        <Link to={"/"}>
          <img
            className="h-10 w-10 rounded-full"
            src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/272830507_1389139564850909_1844613196509865249_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFFZGAHF15Ju9cRUPaER9OTbb6Z3hvoek5tvpneG-h6TloRph36dnbjCjJkuMjXHhqkgCNF1syctbpWU0wvIBoh&_nc_ohc=u657z53Zvn4AX8OdJkj&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfBMQY0RGGsi-g6JR1swFtCYQEDXtBJO-yhLb116T294DA&oe=658620FB"
            alt="BNCC logo"
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
