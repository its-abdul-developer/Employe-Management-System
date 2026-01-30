import React, { useState } from "react";

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    // alert("Logged in successfully!");
    setemail("")
    setpassword("")
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="p-14 border-2 border-emerald-600 rounded-md">
        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          <input
            required
            type="email"
            placeholder="Email"
            className="rounded-full border border-emerald-600 focus:border-2 outline-none text-sm px-3 py-1.5"

            value={email}
            onChange={(e)=>{
                // console.log(e.target.value);
                setemail(e.target.value)
            }}

          />
          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
            required
            type="password"
            placeholder="Password"
            className="rounded-full border border-emerald-600 focus:border-2 outline-none text-sm px-3 py-1.5"
          />
          <button className="bg-emerald-600 rounded-full py-1.5 cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
