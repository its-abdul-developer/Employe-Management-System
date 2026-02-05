import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeesDashBoard from "./components/DashBoard.jsx/EmployeesDashBoard";
import { AdminDashBoard } from "./components/DashBoard.jsx/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // localStorage.clear();

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((a) => a.email == email && a.password == password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
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
          JSON.stringify({ role: "employee", data: employee }),
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
      {user == "admin" ? (
        <AdminDashBoard />
      ) : user == "employee" ? (
        <EmployeesDashBoard data={loggedInUserData} />
      ) : null}
      {/* <EmployeesDashBoard /> */}
      {/* <AdminDashBoard /> */}
    </>
  );
};

export default App;
