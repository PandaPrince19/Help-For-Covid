import React, { useEffect, useState } from "react";
import { Notify } from "notiflix";

import { loadUser, login, getHosps, reg } from "../../api";

// Styles
import "./Landing.css";

//Assets
import Triangle from "../../assets/triangle.svg";
import Circle from "../../assets/circle.svg";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Ellipse1 from "../../assets/ellipse/ellipse1.svg";
import Ellipse2 from "../../assets/ellipse/ellipse2.svg";
import Ellipse3 from "../../assets/ellipse/ellipse3.svg";
import Modal from "../Modal/Modal";
import Login from "./Login/Login";
import Search from "../Search/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Register/Register";
import Dashboard from "../Dashboard/Dashboard";

const Landing = () => {
  const [activeModal, setActiveModal] = useState("");
  const [user, setUser] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState({
    name: "",
    type: "",
    regEmail: "",
    govId: "",
    regPassword: "",
    confirmPass: "",
  });
  const { name, type, regEmail, govId, regPassword, confirmPass } = form;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await loadUser();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getHosps();
        setHospitals(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const register = async (e) => {
    e.preventDefault();

    console.log(form);

    if (regPassword !== confirmPass)
      Notify.Failure("Password and confirm password do not match!", {
        fontFamily: "Roboto",
        useGoogleFont: true,
      });
    else {
      try {
        const { data } = await reg(form);

        console.log(data);

        setActiveModal("");
        setEmail(regEmail);
        setPassword(regPassword);
        await loginUser();
      } catch (err) {
        console.log(err);
        const errors = err.response?.data.errors;

        if (errors) {
          errors.forEach((error) => {
            Notify.Failure(error.msg, {
              fontFamily: "Roboto",
              useGoogleFont: true,
            });
          });
        }
      }
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Notify.Failure("Please enter both, email and password", {
        fontFamily: "Roboto",
        useGoogleFont: true,
      });
    } else {
      const formData = { email, password };

      try {
        const { data } = await login(formData);

        localStorage.setItem("token", data.token);

        const res = await loadUser();
        setUser(res.data);

        console.log(user);

        setActiveModal("");
        setEmail("");
        setPassword("");
      } catch (err) {
        console.log(err);
        const errors = err.response?.data.errors;

        if (errors) {
          errors.forEach((error) => {
            Notify.Failure(error.msg, {
              fontFamily: "Roboto",
              useGoogleFont: true,
            });
          });
        }
      }
    }
  };

  useEffect(() => {
    console.log({ hospitals });
  }, [hospitals]);

  return (
    <div className="landing">
      <img src={Triangle} alt="triangle" className="triangle" />
      <img src={Circle} alt="circle" className="circle" />
      <img src={Ellipse1} alt="ellipse" className="ellipse ellipse__blue" />
      <img src={Ellipse2} alt="ellipse" className="ellipse ellipse__pink" />
      <img src={Ellipse3} alt="ellipse" className="ellipse ellipse__red" />

      <div className="landing__overlay">
        <Router>
          <Header
            setActiveModal={setActiveModal}
            user={user}
            setUser={setUser}
          />
          <Route exact path="/" component={Banner} />
          <Route path="/search" component={Search} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
        {/* <Banner /> */}
      </div>

      {activeModal === "Login" && (
        <Modal
          isModal={activeModal === "Login"}
          setIsModal={(bool) => setActiveModal(bool ? "Login" : "")}
        >
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            loginUser={loginUser}
          />
        </Modal>
      )}
      {activeModal === "Register" && (
        <Modal
          isModal={activeModal === "Register"}
          setIsModal={(bool) => setActiveModal(bool ? "Register" : "")}
        >
          <Register register={register} form={form} setForm={setForm} />
        </Modal>
      )}
    </div>
  );
};

export default Landing;
