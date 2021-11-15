import React, { useState, useContext, createContext, useEffect } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    function checkLocalStorage() {
      const token = localStorage.getItem("token");
      if (token === "hpiaosgfhpoa03284-02u35ojspadgf") {
        setLoggedIn(true);
      }
      return;
    }
    checkLocalStorage();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get("email") === "admin@soc.com" &&
      data.get("password") === "admin"
    ) {
      setLoggedIn(true);
      localStorage.setItem("token", "hpiaosgfhpoa03284-02u35ojspadgf");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
