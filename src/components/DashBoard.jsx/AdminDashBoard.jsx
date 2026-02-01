import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

export const AdminDashBoard = () => {
  return (
    <div className="overflow-hidden">
      <Header />
    <CreateTask />
    <AllTask />
    </div>
  );
};
