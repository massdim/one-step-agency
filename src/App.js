import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Main } from "./components";
import { LoginRegister } from "./pages";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { isLoggedIn } = useSelector((state) => state.general);
  const [access_token, setAccessToken] = useState();

  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
  }, [isLoggedIn]);
  return (
    <>
      {access_token ? (
        <BrowserRouter>
          <Navbar />
          <Main />
        </BrowserRouter>
      ) : (
        <LoginRegister />
      )}
    </>
  );
}

export default App;
