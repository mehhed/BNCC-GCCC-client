import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

const Nav = () => {
  const [navbar, setnavbar] = useState(false);
  return (
    <div className=" py-4 w-screen sticky top-0 left-0 px-5 bg-gray-300 z-50">
      <div className="flex justify-between items-center h-full w-full">
        <div className="text-white text-2xl md:text-3xl flex-1">
          <img
            className="w-10 h-10 rounded-full"
            src="../../public/logo.png"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            setnavbar(!navbar);
          }}
          className="lg:hidden cursor-pointer text-2xl flex justify-end flex-1 text-white">
          {navbar ? <AiOutlineClose /> : <HiOutlineMenu />}
        </div>
        <div
          className={`lg:flex  flex-1 ${
            navbar ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full bg-[#20232d] lg:bg-transparent justify-end z-40`}>
          <ul className="flex flex-col lg:flex-row lg:justify-end justify-start gap-x-5 lg:items-center text-white">
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : "block lg:inline-block"
                }>
                Home
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/About`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                About
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/Service`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Service
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/Project`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Project
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/Contact`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Contact
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/login`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending "
                    : ""
                }>
                <BiSolidUser></BiSolidUser>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
