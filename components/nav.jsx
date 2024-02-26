import React from "react";

const Nav = () => {
  return (
    <>
      <div className="container h-screen">
        <div className="text-center ">My Blog</div>
        <input type="text" placeholder="Search" class="w-full border border-2 border-gray-300 p-2 rounded-lg"/>
      </div>
    </>
  );
};

export default Nav;
