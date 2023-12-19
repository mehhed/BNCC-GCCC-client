import React from "react";
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <div className="w-full p-5 text-center  bg-gray-300">
      <p className="text-lg ">
        Copyright © 2023 - All right reserved by
        <Link to={"/"}> BNCC-gov city college chattogram</Link>
      </p>
    </div>
  );
};

export default Fotter;
