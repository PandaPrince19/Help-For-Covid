import React, { useState } from "react";

//Styles
import "./DropBox.css";

const DropBox = ({ title, tags, setTags }) => {
  const [isOpen, setIsOpen] = useState(true);

  const labelsData = [
    {
      id: 0,
      value: "Few Left",
    },
    {
      id: 1,
      value: "Available",
    },
    {
      id: 2,
      value: "Private",
    },
    {
      id: 3,
      value: "Government",
    },
  ];

  const handleLabelChange = (label) => {
    if (!tags.includes(label)) setTags((prev) => [...prev, label]);
    else setTags((prev) => prev.filter((val) => val !== label));
  };

  return (
    <div className="dropBox">
      <p className="dropBox__header">
        <i
          className={`fas fa-caret-${isOpen ? "up" : "down"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        ></i>
        {title}
      </p>

      {isOpen && (
        <div className="dropBox__content">
          {tags.map((tag) => (
            <span key={tag} className={`dropBox__label dropBox__label__dark`}>
              {tag}
            </span>
          ))}
          {labelsData
            .filter((label) => !tags.includes(label.value))
            .map(({ id, value }) => (
              <span
                key={id}
                className={`dropBox__label dropBox__label__${
                  tags.includes(value) ? "active" : "outlined"
                }`}
                onClick={() => handleLabelChange(value)}
              >
                {value}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropBox;
