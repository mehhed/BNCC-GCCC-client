import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <section className="border">
      <img
        className="mx-auto w-full max-h-[600px]"
        src="../../../public/Trendy Website Homepage Accessories Sale Banner (1).png"
        alt=""
      />
      {/* helmet for title  */}
      <Helmet>
        <title>BNCC Gov. city college chattogram | Home</title>
      </Helmet>
    </section>
  );
};

export default Home;
