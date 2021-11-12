import React, { useState } from "react";

//Styles
import "./Cities.css";

const Cities = ({ selectedCity, setSelectedCity, tags, setTags }) => {
  const citiesData = [
    {
      id: 0,
      name: "Mumbai",
      src: "mumbai",
      alt: "mumbai",
    },
    {
      id: 1,
      name: "NCR",
      src: "ncr",
      alt: "ncr",
    },
    {
      id: 2,
      name: "Bangalore",
      src: "bang",
      alt: "mumbai",
    },

    {
      id: 3,
      name: "Hyderabad",
      src: "hyd",
      alt: "hyderabad",
    },
    {
      id: 4,
      name: "Ahmedabad",
      src: "ahd",
      alt: "ahmedabad",
    },
    {
      id: 6,
      name: "Chandigarh",
      src: "chd",
      alt: "chandigarh",
    },
    {
      id: 7,
      name: "Chennai",
      src: "chen",
      alt: "chennai",
    },
    {
      id: 8,
      name: "Pune",
      src: "pune",
      alt: "pune",
    },
    {
      id: 9,
      name: "Kolkata",
      src: "kolk",
      alt: "kolkata",
    },
    {
      id: 10,
      name: "Kochi",
      src: "koch",
      alt: "kochi",
    },
  ];

  const handleCityChange = (name) => {
    if (selectedCity === name) {
      setSelectedCity("");
      setTags([...tags.filter((t) => t !== name)]);
    } else {
      setTags([...tags.filter((tag) => tag !== selectedCity), name]);
      setSelectedCity(name);
    }
  };

  return (
    <div className="cities">
      {citiesData.map(({ id, src, alt, name }) => (
        <div className="city" onClick={() => handleCityChange(name)} key={id}>
          <img
            src={`https://in.bmscdn.com/m6/images/common-modules/regions/${src}${
              name === selectedCity ? "-selected" : ""
            }.png`}
            alt="mumbai"
          />
          <p
            className={`city__name  ${
              name === selectedCity ? "city__name__active" : ""
            }`}
          >
            {name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cities;
