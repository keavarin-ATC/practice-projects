import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  //Clear ออกไปเพราะ เรามีcontext
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    <>
      <MainHeader
      // /* ไม่ต้องมี เพราะใช้ context isAuthenticated={isLoggedIn}*/ onLogout={
      //   logoutHandler
      // }
      />
      <main>
        {!ctx.isLoggedIn && <Login /*onLogin={loginHandler} */ />}
        {ctx.isLoggedIn && <Home /*onLogout={logoutHandler}*/ />}
      </main>
    </>
    // </AuthContext.Provider>
  );
}

export default App;
