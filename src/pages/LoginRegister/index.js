import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../redux/action/account";

const LoginRegister = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getAccount);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(setLogin(form));
  };

  useEffect(() => {}, [user]);

  return (
    <div className="sm:px-10 md:px-80 h-screen flex justify-center items-center bg-gray-300">
      <div className="w-full mx-40 px-20 pt-10 pb-20 border-2 rounded-lg shadow-lg bg-white">
        <div className="pb-10 text-center">FIRSTEP (Administrator)</div>
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            autoFocus
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            type="password"
            name="password"
            placeholder="******************"
            value={form.password}
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>
        <div class="md:flex items-center justify-between">
          <button
            class="bg-secondary text-black font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
    // <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    //   <div class="mb-4">
    //     <label
    //       class="block text-grey-darker text-sm font-bold mb-2"
    //       for="username"
    //     >
    //       Username
    //     </label>
    //     <input
    //       class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
    //       id="username"
    //       type="text"
    //       placeholder="Username"
    //     />
    //   </div>
    //   <div class="mb-6">
    //     <label
    //       class="block text-grey-darker text-sm font-bold mb-2"
    //       for="password"
    //     >
    //       Password
    //     </label>
    //     <input
    //       class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
    //       id="password"
    //       type="password"
    //       placeholder="******************"
    //     />
    //     <p class="text-red text-xs italic">Please choose a password.</p>
    //   </div>
    //   <div class="flex items-center justify-between">
    //     <button
    //       class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
    //       type="button"
    //     >
    //       Sign In
    //     </button>
    //     <a
    //       class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
    //       href="#"
    //     >
    //       Forgot Password?
    //     </a>
    //   </div>
    // </div>
  );
};

export default LoginRegister;
