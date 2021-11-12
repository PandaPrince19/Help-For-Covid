import React from "react";

// Styles
import "./Banner.css";

//Components
import TransBtn from "./TransBtn/TransBtn";

//Assets
import Doctor from "../../../assets/doc.svg";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__left">
        <h1>CoviHelp</h1>
        <p className="banner__desc">
          Quickly find nearby beds with Oxygen tanks with the help of CoviHelp
          <ul>
            <li>find beds with ease by keywords</li>
            <li>register as a hospital to provide help</li>
            <li>get instant access to contact info of hospitals</li>
          </ul>
        </p>
        <TransBtn text="Get Started" onClick={() => history.push("/search")} />
      </div>
      <div className="banner__right">
        <img src={Doctor} alt="doctor" className="doctor" />
      </div>
    </div>
  );
};

export default Banner;
