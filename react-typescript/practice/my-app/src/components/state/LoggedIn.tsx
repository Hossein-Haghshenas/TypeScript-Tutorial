import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <button onClick={handleLogin}>{isLoggedIn ? "LogOut" : "Login"}</button>
      <section>User is {isLoggedIn ? "Logged in" : "Logged out !"}</section>
    </div>
  );
};

export default LoggedIn;
