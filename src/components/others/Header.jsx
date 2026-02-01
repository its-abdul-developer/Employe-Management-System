import React from "react";

const Header = ({ data }) => {
  console.log(data);

  return (
    <div className="flex justify-between items-center  p-10">
      <div>
        <h1>{data.id}</h1>
        <h1 className="font-medium text-xl">
          Hello <br /> <span className="font-bold text-2xl">Abdul👋🏻</span>
        </h1>
      </div>
      <button className="bg-red-500 px-3 py-1 rounded-xs">Log Out</button>
    </div>
  );
};

export default Header;
