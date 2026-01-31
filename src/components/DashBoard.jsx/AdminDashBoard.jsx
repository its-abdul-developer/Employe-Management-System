import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

export const AdminDashBoard = () => {
  return (
    <div>
      <Header />
    <CreateTask />
    <AllTask />
    </div>
  );
};
