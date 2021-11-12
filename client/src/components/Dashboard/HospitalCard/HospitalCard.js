import React, { useState } from "react";

// Styles
import "./HospitalCard.css";

//assets
import Hospital from "../../../assets/hospital/hospital.png";
import Modal from "../../Modal/Modal";
import CreateEditHospital from "../CreateEditHospital/CreateEditHospital";

const HospitalCard = () => {
  const [activeModal, setActiveModal] = useState("");

  return (
    <div className="hospitalCard">
      <img src={Hospital} alt="hospital" />

      <div className="hospitalCard__info">
        <div className="hospitalCard__name">
          <b>Name</b>
        </div>

        {/* <div>
          <span className="dropBox__label dropBox__label__dark">7</span>
        </div> */}
      </div>

      {activeModal === "edit" && (
        <Modal setIsModal={(bool) => !bool && setActiveModal("")}>
          <CreateEditHospital />
        </Modal>
      )}

      <div className="hospitalCard__actions">
        <i className="fas fa-trash-alt"></i>
        <i className="fas fa-pen" onClick={(e) => setActiveModal("edit")}></i>
      </div>
    </div>
  );
};

export default HospitalCard;
