import { useState } from "react";
import { AuthUser } from "./User.types";

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "hossein", email: "hossein@gmail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <section>Username is : {user?.name}</section>
      <section>Email is : {user?.email}</section>
    </div>
  );
};

export default User;
