import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const AuthButton = () =>
    !isAuthenticated ? (
      <button
        className="btn btn-light btn-sm"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    ) : (
      <button
        className="btn btn-light btn-sm"
        onClick={() => logout({ returnTo: "http://localhost:3000" })}
      >
        Logout
      </button>
    );

  return (
    <nav className="justify-content-between">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
