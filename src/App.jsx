import React, { use, useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeesDashBoard from "./components/DashBoard.jsx/EmployeesDashBoard";
import { AdminDashBoard } from "./components/DashBoard.jsx/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // });

  const authData = useContext(AuthContext);
  // console.log(authData.employees);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((a) => a.email == email && a.password == password)
    ) {
      setUser("admin");
       localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin" }),
        );
      // console.log(user);
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" }),
        );
      }
      // console.log(user);
    } else {
      console.log("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashBoard /> : user == 'employee' ? <EmployeesDashBoard data={loggedInUserData} /> : null}
      {/* <EmployeesDashBoard /> */}
      {/* <AdminDashBoard /> */}
    </>
  );
};

export default App;
