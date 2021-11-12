import React, { useEffect, useState } from "react";

// Styles
import "./Search.css";

//MaterialUi
import DropBox from "./DropBox/DropBox";
import HospitalStrip from "./HospitalStrip/HospitalStrip";
import Cities from "./Cities/Cities";
import { getHosps } from "../../api";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [tags, setTags] = useState(["Private"]);
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [selectedCity, setSelectedCity] = useState("");

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

  return (
    <div className="search">
      <Cities
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        tags={tags}
        setTags={setTags}
      />
      <div className="search__content">
        <div className="search__content__left">
          <div className="d-flex">
            <h3>Filters</h3>
            <span
              className="dropBox__label dropBox__label__danger"
              onClick={() => {
                setTags([]);
                setSelectedCity([]);
              }}
            >
              Clear
            </span>
          </div>
          <DropBox title="Tags" tags={tags} setTags={setTags} />
          <DropBox title="Tags" tags={tags} setTags={setTags} />
        </div>

        <div className="search__content__right">
          <div className="search__box">
            <i className="fas fa-search"></i>

            <input
              type="text"
              name="search"
              id="search"
              value={searchKey}
              placeholder="Search..."
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>

          {tags.length
            ? hospitals
                .filter(
                  ({ city, name, state }) =>
                    (city.toLowerCase().includes(searchKey.toLowerCase()) ||
                      name.toLowerCase().includes(searchKey.toLowerCase()) ||
                      state.toLowerCase().includes(searchKey.toLowerCase())) &&
                    city.includes(selectedCity)
                )
                .map((hos) => (
                  <HospitalStrip
                    key={hos._id}
                    name="Hospital Name"
                    hospital={hos}
                  />
                ))
            : hospitals
                .filter(
                  ({ city, name, state }) =>
                    (city.toLowerCase().includes(searchKey.toLowerCase()) ||
                      name.toLowerCase().includes(searchKey.toLowerCase()) ||
                      state.toLowerCase().includes(searchKey.toLowerCase())) &&
                    city.includes(selectedCity)
                )
                .map((hos) => (
                  <HospitalStrip
                    key={hos._id}
                    name="Hospital Name"
                    hospital={hos}
                  />
                ))}
          {/* <HospitalStrip name="Hospital Name" /> */}
          {/* <HospitalStrip name="Hospital Name" /> */}
          {/* <HospitalStrip name="Hospital Name" /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
