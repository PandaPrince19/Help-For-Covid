import React, { useState } from "react";

// Styles
import "./Header.css";

//Assets
import Logo from "../../../assets/logo.svg";

//react router
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ setActiveModal, user, setUser }) => {
  const [isHidden, setIsHidden] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    setUser("");
    localStorage.removeItem("token");
  };

  console.log({ path: location.pathname });
  return (
    <div className="header">
      <div className="header__logo" onClick={() => history.push("/")}>
        <img src={Logo} alt="logo" />
      </div>

      {isHidden && (
        <i className="fas fa-bars" onClick={() => setIsHidden(false)}></i>
      )}

      <div className={`header__links ${isHidden ? "header__hidden" : ""}`}>
        <i className="fas fa-times" onClick={() => setIsHidden(true)}></i>
        <div
          className={`header__link  ${
            location.pathname.includes("search") ? "header__link__active" : ""
          }`}
          onClick={() => history.push("/search")}
        >
          Search
        </div>
        {user ? (
          <div className={`header__link`} onClick={logout}>
            Logout
          </div>
        ) : (
          <>
            <div
              className={`header__link`}
              onClick={() => setActiveModal("Register")}
            >
              Register
            </div>
            <div
              className={`header__link`}
              onClick={() => setActiveModal("Login")}
            >
              Login
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
